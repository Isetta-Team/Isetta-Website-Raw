disqus:
# Networking

!!! question
    **You still sure you want to use networking in your game???**

Networking in Isetta is completely messaging based, there are no `Cmd` or `Rpc` or `SyncVar`s like in Unity. Our [example networking level](https://github.com/Isetta-Team/Isetta-Engine/blob/develop/Isetta/IsettaTestbed/NetworkLevel/NetworkLevel.cpp) and [`NetworkTestComponent`](https://github.com/Isetta-Team/Isetta-Engine/blob/develop/Isetta/IsettaTestbed/NetworkLevel/NetworkTestComp.cpp) is the best place for you to get started.

A few things to definitely note:
- When implementing a network message class, you need to define both the `Serialize` and the `Copy` functions. `Serialize` *MUST* return `true` at the end of the function--otherwise your client will disconnect every time you try to send the message and you won't know why!
- Each of the serialization functions we use come from yojimbo, and they're the following:
    - serialize_int: Serializes an integer `value` and compresses that within the range of `min` and `max`
    - serialize_bits: Serializes the number of `bits` of a 32-bit `value`
    - serialize_bool: Serializes a boolean `value` using bits
    - serialize_float: Serializes a float `value`
    - serialize_uint32: Serializes a 32-bit unsigned integer `value`
    - serialize_uint64: Serializes a 64-bit unsigned integer `value` by serializing the low and high 32 bits
    - serialize_double: Serializes a double `value` by casting it to a 64-bit unsigned integer and serializing that
    - serialize_bytes: Serializes an array of `bytes` from a given pointer to `data`
    - serialize_string: Serializes a `string` of a given `buffer_size`
    - serialize_object: Serializes an `object` using a `Serialize` member function of the object that takes in the `stream` parameter

If you do use networking a lot, the team members in the room are probably the best documentation.

## Essential API
- `yojimbo::Message`: The base class of the message objects
- `NetworkManager::StartHost("hostIP")`
- `NetworkManager::StopHost()`
- `NetworkManager::StartServer("serverIP")`
- `NetworkManager::StopServer()`
- `NetworkManager::StartClient("clientIP")`
- `NetworkManager::StopClient()`
- `NetworkManager::SendMessageFromClient<MyMessage>(Action<MyMessage*> messageInitializer)` where T inherits `yojimbo::Message`
- `NetworkManager::RegisterClientCallback<MyMessage>(Action<yojimbo::Message*>)`
- `NetworkManager::SendMessageFromServer<MyMessage>(int clientIndex, Action<MyMessage*> messageInitializer)`
- `NetworkManager::RegisterServerCallback<MyMessage>(Action<int clientIndex, yojimbo::Message*>)`
- `NetworkManager::.SendMessageFromServerToAll<MyMessage>(MyMessage*)`

## Code Snippets
Defining a HandleMessage:
``` cpp
// HandleMessage simply sends an integer handle between 0 and 64 across the
// network
DEFINE_NETWORK_MESSAGE(HandleMessage)

// IMPORTANT: The Serialize function _must_ be a template around the Stream
// type, and it MUST return true at the end of the function. Otherwise the
// serialization will be assumed to have failed!
template <typename Stream>
bool Serialize(Stream* stream) {
  // serialize_int is supplied by yojimbo, along with many other primitive
  // type serialization functions
  serialize_int(stream, handle, 0, 64);
  return true;
}

// The Copy function must be overridden with boilerplate that copies the values
// from a given message. This is used for the general SendToAll functions that
// the NetworkManager has.
void Copy(const yojimbo::Message* otherMessage) override {
  const HandleMessage* message =
      reinterpret_cast<const HandleMessage*>(otherMessage);
  handle = message->handle;
}

public:
int handle = 0;  // Obviously we'll just use a handle

DEFINE_NETWORK_MESSAGE_END
```

Registering a callback for HandleMessage on the client:
``` cpp
exampleClientHandleId =
    NetworkManager::Instance().RegisterClientCallback<HandleMessage>(
        [](yojimbo::Message* message) {
          // We'll always have to cast our message into the message we're
          // anticipating
          HandleMessage* handleMessage = static_cast<HandleMessage*>(message);

          LOG(Debug::Channel::Networking, "Server sends handle #%d",
              handleMessage->handle);

          // Depending on the handle, we can do something (we tore out a
          // couple system here though)
          if (handleMessage->handle == 0) {
            LOG(Debug::Channel::Networking,
                "Server says we should play the animation!");
          }
          if (handleMessage->handle == 1) {
            LOG(Debug::Channel::Networking,
                "Server says we should stop the animation!");
          }
        });
```