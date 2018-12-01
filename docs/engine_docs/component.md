disqus:
# Components

Components in the Isetta Engine are similar to components in other engines, they should be designed for individal tasks and have minimal coupling with other components. Components cannot be standalone/instantiated in a level without being attached to an entity, done with `entity->AddComponent<COMPONENT, bool isActive = true>(Component constructor args...)`. You can look at any of our [example levels](level.md#example-levels) for usage

- `entity` is an instantiated entity variable as shown above
- `COMPONENT` is the class name of your component to add, ie. `ExampleComponent`
- `bool isActive = true` is whether the component starts enabled/disabled and defaults to starting active
- `Component constructor args...` are the arguments to pass to the component's constructor (can be empty to use the default constructor -- a component MUST have a default constructor in addition to any other constructors)

A component is created with Isetta component macros: `DEFINE_COMPONENT(COMPONENT, PARENT, bool unique)` and `DEFINE_COMPONENT_END(COMPONENT_NAME, PARENT)`. Where:
- `COMPONENT` is the name of your new component class, ie. `ExampleComponent`
- `PARENT` is the name of the parent/base class of component, use `Component` if you have no base class
- `bool unique` is whether the component must be unique on an entity (whether an entity could have multiple of this component)
    - The unique variable does NOT mean the component is unique across the level, ie. a singleton

To create a component, create a header (.h) and cpp (.cpp) file of the name of your component:

`ExampleComponent.h`
```cpp
#pragma once
#include <IsettaEngine.h>

DEFINE_COMPONENT(ExampleComponent, Component, false)
private:
// Private variables of your component
public:
// A component MUST have a default constructor
ExampleComponent() = default;

// Awake is called once, immediately when the component is first created and enabled
void Awake() override;
// Start is called once, on the first update frame after the component is created and enabled
void Start() override;
// OnEnable is called immediately each time the component becomes active, including after creation
void OnEnable() override;
// OnDisable is called immediately each time the component becomes inactive
void OnDisable() override;
// Update is called each frame (variable delta time)
void Update() override;
// GuiUpdate is called each frame (variable delta time), GUI can only be called in GuiUpdate
void GuiUpdate() override;
// LateUpdate is called each frame (variable delta time)
void LateUpdate() override;
// FixedUpdate is called on fixed time (constant delta time)
void FixedUpdate() override;
// OnDestroy is called once when the component is destroyed
void OnDestroy() override;

DEFINE_COMPONENT_END(ExampleComponent, Component)
```

The cpp file then contains the definitions for each of these functions. Not all functions need to be defined, if not overriden, the function update will run faster.

Here are empty template of component header to copy:
```cpp
#pragma once
#include <IsettaEngine.h>

DEFINE_COMPONENT(COMPONENT_NAME, Component, false)
private:
public:
COMPONENT_NAME() = default;
DEFINE_COMPONENT_END(COMPONENT_NAME, Component)
```

## Essential API
- `Entity::AddComponent<T>`: Add a component to an entity
- `Entity::GetComponent<T>`: Get a component from an entity
- `Component::SetActive(bool active)`: Toggle active state
- `Component::entity*`: Components have a pointer to its owner entity
- `Component::transform*`: Components have a pointer to its entity's transform
- Life time methods see above