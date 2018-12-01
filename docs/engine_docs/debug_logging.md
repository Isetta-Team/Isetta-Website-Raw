disqus:
# Debug Logging
Debug logging in the engine is done through `Logger.h` which has multiple macros to help you log your messages. The Logger works in conjunction with other systems in the engine, so we recommend you use that to `std::cout`. In case you didn't read this paragraph...

!!! warning
    DO NOT USE `std::cout`

## Essential API
Each macro has multiple variations and will output:
\[Engine Time\]\[Verbosity\]\[Channel\] Filename(Line number) Message
<br><br>

- `LOG(message)` -- defaults to `Debug::Channel::General` and `Debug::Verbosity::Info`
- `LOG_INFO(message)` -- defaults to `Debug::Channel::General` and `Debug::Verbosity::Info`
- `LOG_WARNING(message)` -- defaults to `Debug::Channel::General` and `Debug::Verbosity::Warning`
- `LOG_ERROR(message)` -- defaults to `Debug::Channel::General` and `Debug::Verbosity::ERROR`
    - **THE ENGINE WILL BREAK WITH THIS MESSAGE**

!!! tip
    To specify a channel, change `(message)` to `(Debug::Channel::CHANNEL, message)`
