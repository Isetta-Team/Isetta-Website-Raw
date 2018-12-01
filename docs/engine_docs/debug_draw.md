# Debug Drawing
The [`DebugComponent`](https://github.com/Isetta-Team/Isetta-Engine/blob/develop/Isetta/IsettaTestbed/DebugLevel/DebugComponent.cpp) and [debug level](level.md#example-levels) are the best places for you to get started.

## Essential API
- `DebugDraw::Point(Math::Vector3 point, Color color = Color::white, float size = 1.0f, float duration = 0.0f, bool depthTest = true)`
- `DebugDraw::Line(Math::Vector3 start, Math::Vector3 end, Color color = Color::white, float thickness = 1.0f, float duration = 0.0f, bool depthTest = true)`
- `DebugDraw::Ray(Math::Vector3 start, Math::Vector3 direction, Color color = Color::white, float thickness = 1.0f, float duration = 0.0f, bool depthTest = true)`
- `DebugDraw::Plane(Math::Matrix4 transformation = Math::Matrix4::identity, Color color = Color::white, float duration = 0.0f, bool depthTest = true)`
- `DebugDraw::WirePlane(Math::Matrix4 transformation = Math::Matrix4::identity, Color color = Color::white, float thickness = 1.0f, float duration = 0.0f, bool depthTest = true)`
- `DebugDraw::Cube(Math::Matrix4 transformation = Math::Matrix4::identity, Color color = Color::white, float duration = 0.0f, bool depthTest = true)`
- `DebugDraw::WireCube(Math::Matrix4 transformation = Math::Matrix4::identity, Color color = Color::white, float thickness = 1.0f, float duration = 0.0f, bool depthTest = true)`
- `DebugDraw::Sphere(Math::Vector3 position, float radius, Color color = Color::white, float duration = 0, bool depthTest = true)`
- `DebugDraw::WireSphere(Math::Vector3 position, float radius, Color color = Color::white, float thickness = 1.0f, float duration = 0, bool depthTest = true)`
- `DebugDraw::WireCapsule(Math::Matrix4 transformation, float radius = 0.5, float height = 2, Color color = Color::white, float thickness = 1.0f, float duration = 0, bool depthTest = true)`
- `DebugDraw::Grid(Math::Matrix4 transformation = Math::Matrix4::zero, int lines = 30, Color color = Color::lightGrey, float thickness = 1.0f, float duration = 0)`
- `DebugDraw::Axis(Math::Matrix4 transformation = Math::Matrix4::identity, Color xColor = Color::red, Color yColor = Color::green, Color zColor = Color::blue, float thickness = 2.0, float duration = 0, bool depthTest = true)`

## Code Snippets
``` cpp
DebugDraw::Point(2 * Math::Vector3::left, Color::magenta, 20);
DebugDraw::Line(Math::Vector3::zero, 3 * Math::Vector3::one);
// Rotating ray in a circle
if (Input::IsKeyPressed(KeyCode::V)) {
  static float angle = 0.0f;
  angle += 0.4f * EngineLoop::GetGameClock().GetDeltaTime();
  if (angle >= 2 * Math::Util::PI) {
    angle = 0;
  }
  DebugDraw::Ray(
      Math::Vector3::zero,
      Math::Vector3{Math::Util::Cos(angle), 0, Math::Util::Sin(angle)},
      Color::cyan, 2);
}
// Display plane
if (Input::IsKeyPressed(KeyCode::B)) {
  DebugDraw::Plane(Math::Matrix4::identity, Color::blue, 2);
}
DebugDraw::WirePlane(Math::Matrix4::identity);
DebugDraw::Cube(Math::Matrix4::Translate(Math::Vector3{2.8, 1.1, 0}) *
                    Math::Matrix4::Scale(2.2 * Math::Vector3::one),
                Color::brown);
DebugDraw::WireCube(Math::Matrix4::Translate(Math::Vector3{0, 0, -2}));
DebugDraw::WireSphere(Math::Vector3::up, 1, Color::red);
DebugDraw::WireCapsule(Math::Matrix4::Translate(Math::Vector3{-1, 4, 1}), 0.5,
                       2, Color::blue);
DebugDraw::AxisSphere(Math::Vector3::up, 1);
DebugDraw::Axis();
DebugDraw::Grid();
```