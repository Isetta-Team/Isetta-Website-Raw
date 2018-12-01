# Input

We have both callback based and polling based input API. The [`InputTestComponent`](https://github.com/Isetta-Team/Isetta-Engine/blob/develop/Isetta/IsettaTestbed/InputLevel/InputTestComponent.cpp) and [`FlyController`](https://github.com/Isetta-Team/Isetta-Engine/blob/develop/Isetta/IsettaEngine/Components/FlyController.cpp) are the best place for you to get started

## Essential API
- `Input::GetMousePosition()`
- `Input::RegisterKeyPressCallback(KeyCode, Action<>)`
- `Input::RegisterKeyReleaseCallback(KeyCode, Action<>)`
- `Input::RegisterMousePressCallback(MouseButtonCode, Action<>)`
- `Input::IsKeyPressed(KeyCode)`
- `Input::IsMouseButtonPressed(MouseButtonCode)`
- `Input::IsGamepadButtonPressed(GamepadButton)`
- `Input::GetGamepadAxis(GamepadAxis)`
