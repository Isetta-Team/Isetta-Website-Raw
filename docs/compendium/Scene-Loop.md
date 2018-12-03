# Scene & Engine Loop

## Week 0
- [Module Manager](../blogs/week-1/#module-manager): Used a module which friends to all the modules to manage the start-up and shut-down of them.

## Week 3
- [Engine Loop](../blogs/week-3/#engine-loop): Implemented the engine loop with fixed update time step and variable rendering.
- [Timer](../blogs/week-3/#timer): Created a clock class to support multiple clocks in-engine and a stopwatch class to record time.

## Week 5
- [Goodbye Module Manager](../blogs/week-5/#goodbye-module-manager): Removed the manager that handled the lifecycle of all of our modules because redundancy.
- [Scene Graph Object Model](../blogs/week-5/#scene-graph-object-model): Determined to use a blend of data-oriented and object-oriented design for our scene graph object model for the rest of development (or until we change our minds).
- Patch Notes:
    - [Explicit StartUp, Update, ShutDown in the engine loop](../blogs/week-5/#explicit-startup-update-shutdown)

## Week 6
- [Level (Scene Graph)](../blogs/week-6/#level-scene-graph): Designed the scene graph architecture as Level-Entity-Component, and created a reflection system for loading user-defined levels.
- [Transform](../blogs/week-6/#transform): Began development on our transform hierarchy, and implemented some gameplay features with it like a flyby camera.

## Week 7
- Patch Notes:
    - ["Camera" vs. "CameraComponent"](../blogs/week-7/#camera-vs-cameracomponent)

## Week 8
- [Component Registry](../blogs/week-8/#component-registry): Added a component registration mechanism for the components to store their type hierarchy so as to support component inheritance lookup.
- Patch Notes:
    - [Exiting the Engine Loop](../blogs/week-8/#exiting-the-engine-loop)

## Week 9
- [Awaking unique Components](../blogs/week-9/#components): Added several more features to our Component class family, including much of what Unity has for theirs (which is beginning to make sense to us) like `Awake` function and checking component uniqueness.

## Week 10
- Patch Notes:
    - [Initialization Timing with Memory Management](../blogs/week-10/#initialization-timing-and-memory-management)

## Week 11
- [Level Loading](../blogs/week-11/#level-loading): Got loading from startup level to another prebuilt loader in the engine working. There were a few catching points, but overall went smoothly.

## Week 12
- Patch Notes:
    - [API Design Improvements in Level, Transform, Entity and Component](../blogs/week-12/#api-design-improvements)
  
## Week 13
- []()

## Week 14
- []()

## Relevant Interviews
- [Martin Middleton](../interviews/MartinMiddleton-interview.md/#custom-entity-system-in-unity)
- [Amandine Coget](../interviews/AmandineCoget-interview.md/#parallelism-and-data-oriented-design)
- [Tommy Refenes](../interviews/TommyRefenes-interview/#stealth-loading-in-super-meat-boy)

## Postmortem