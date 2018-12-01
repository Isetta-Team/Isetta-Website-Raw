# Networking
**You still sure you want to use networking in your game???**

Networking in Isetta is completely messaging based, there are no `Cmd` or `Rpc` or `SyncVar`s like in Unity. Our [example networking level](https://github.com/Isetta-Team/Isetta-Engine/blob/develop/Isetta/IsettaTestbed/NetworkLevel/NetworkLevel.cpp) and [`NetworkTestComponent`](https://github.com/Isetta-Team/Isetta-Engine/blob/develop/Isetta/IsettaTestbed/NetworkLevel/NetworkTestComp.cpp) is the best place for you to get started.

If you do use networking a lot, the team members in the room are probably the best documentation.

## Essential API
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
