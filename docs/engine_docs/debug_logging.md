disqus:
# Debug Logging
Debug logging in the engine is done through `Logger.h` which has multiple macros to help you log your messages. The Logger works in conjunction with other systems in the engine, so we recommend you use that to `std::cout`. In case you didn't read this paragraph...

!!! warning
    DO NOT USE `std::cout`

Our logger will log to Visual Studio's output window, and in-game console window if you add `EditorComponent` to any entity.

## Essential API
Each macro has multiple variations and will output:
\[Engine Time\]\[Verbosity\]\[Channel\] Filename(Line number) Message

!!! example
    [0.000][Info][General] gamejam.cpp (64) You are the best jammers!
<br><br>

- `LOG(message)` -- defaults to `Debug::Channel::General` and `Debug::Verbosity::Info`
- `LOG_INFO(message)` -- defaults to `Debug::Channel::General` and `Debug::Verbosity::Info`
- `LOG_WARNING(message)` -- defaults to `Debug::Channel::General` and `Debug::Verbosity::Warning`
- `LOG_ERROR(message)` -- defaults to `Debug::Channel::General` and `Debug::Verbosity::ERROR`
    - **THE ENGINE WILL BREAK WITH THIS MESSAGE**

!!! tip
    To specify a channel, change `(message)` to `(Debug::Channel::CHANNEL, message)`

    Available channels: General, Memory, Networking, Graphics, Horde3D, Collisions, Gameplay, Sound, FileIO, GUI, All

## Code snippets
```cpp
LOG_INFO(Debug::Channel::Networking,
             "Client [%s] with IP [%s] is connected", info.machineName.c_str(),
             info.ip.c_str());

LOG_WARNING(Debug::Channel::General, "Entity %s not found!", name.data());

LOG_ERROR(Debug::Channel::Networking,
              "Cannot send message from client cause client is not running");
```