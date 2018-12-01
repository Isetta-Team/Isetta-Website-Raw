# Entities/Transforms
Entities in the Isetta engine are comparable to GameObjects in Unity and Entities in Unreal. They are the objects that persist in the level/scene that can have a parent entity and can have children entities. Entities hold components and have a transform to locate them in the world. Entities can be add to the level through the macros `Entity::Instantiate(std::string name, Entity* parent, bool isStatic)` included with `#include "Scene/Entity.h"`, and return an entity pointer. The `parent` defaults to `nullptr` which sets the entity's parent to the top level and `isStatic` defaults to `false`. Static entities cannot be translated, rotated, or scaled once the level has loaded.

Transforms hold the position, rotation, and scale information for an entity. The transformation information has local and world transformation, as well as the local axes of the entity.

```cpp
Entity* entity = Entity::Instantiate("entityName");
Transform* transform = entity->transform;
entity->AddComponent<ExampleComponent>();
```

## Essential API
- static `Entity::Instantiate`: instantiate a new (but empty) entity to the current level
- `Entity::transform*`: entities hold a pointer to their transform
- `Transform::SetWorldPos(Math::Vector3 pos)`
- `Transform::GetWorldPos()`
- `Transform::TranslateWorld(Math::Vector3 delta)`...
- `Transform::GetWorldRot`
- `Transform::LookAt(Math::Vector3 target)`
- `Transform::GetLocalToWorldMatrix()`: returns a Matrix4, can be useful for debug drawing
- For more, look at the `Transform.h` file under "Engine/Scene" folder