# Core

## Timeline

### Week 1
- [The Whole Core](../../blogs/engine-architecture/#core): At the start of our journey, we layed out the roadmap of our core libraries and introduced each of them — even though some were changed or removed later on.
- [Module Manager](../../blogs/week-1/#module-manager): Our module manager takes care of module startup, shutdown and update sequence. We thought it would be trivial but actually fell into a 2-hour discussion about the fundamental design of the modules...
- [Error Handling](../../blogs/week-1/#error-handling): We agreed on the usages of exceptions and asserts, and hesitantly brought in the Microsoft Foundation Class library to help with asserts.
- [Math](../../blogs/week-1/#math): The first version of our Math library was quickly implemented by referencing Unity's Math API and various online 3D math resources.
- [String ID](../../blogs/engine-architecture/#core): We didn't think too much and brought in an open-source string ID library.

### Week 2
- Patch Notes:
	- [Asserts](../../blogs/week-2/#assertions): Our premonition was right — the Microsoft Foundation Class library was indeed not the best way to implement assertions for us, so we removed it and made our own.

### Week 3
- [Serialization](../../blogs/week-3/#serialization): We originally included serialization in our architecture diagram because we thought networking would need it. But the networking library we brought in already has its own! As much as we wanted to do serialization, we decided to drop it to save headaches and limit the scope.
- [STL Wrapper](../../blogs/week-3/#stl-wrapper): As the development went on, we realized an STL wrapper is not necessary and would be tedious and trivial to implement, we dropped it. We still had `IsettaAlias.h` though, so we can write `U8` instead of `uint8_t` every time.
- [Data Structures](../../blogs/week-3/#data-structures): We realized we need some custom data structures like `RingBuffer` for our other systems, so we implemented that. At this point, we also got ourselves into the mindset that we could implement our data strucures on-demand throughout the project.
- [Timer](../../blogs/week-3/#timer): We implemented our `Timer` class using C++'s built-in `<chrono>` library — it was as simple as that.
- [File System](../../blogs/week-3/#filesystem): We made *a* file system that's capable of async file manipulation using Microsoft's API. It was a lot of circular documentation, and knowing the right terminology was really important to figuring out what to learn.

### Week 4
- Patch Notes:
	- [Someone's Checking Our Math!](../../blogs/week-4/#math-libraryunit-testing): Someone found a bug in our `Matrix4` class and opened a pull request on Github!

### Week 5
- [Module Manager, Removed](../../blogs/week-5/#goodbye-module-manager): `ModuleManager` was becoming an obvious central hub (a.k.a. choke point) for our engine's modules. Once we had introduced systems other than modules in our engine, the module manager became restrictice, so we said good bye to it and moved its functionality to Engine Loop. This also allowed us to revisit our different update loops, now named `FixedUpdate` and `VariableUpdate`.

### Week 7
- [Serialization](../../blogs/week-7/#serialization): We discussed what our need for serialization is within the engine and rationalized why sticking with our networking library's serialization was best for the time being.

### Week 9
- Patch Notes:
	- [Quaternions](../../blogs/week-9/#whats-wrong-with-our-quaternions): We fixed some nasty Quaternion bugs in our Math library during the process of making `NetworkTransform`.
	- [Logger File I/O](../../blogs/week-9/#logger-file-io): We discovered a problem with our logging output caused by optimization in our file system and made a non-perfect fix.

### Week 10
- [Our Own Dynamic Array](../../blogs/week-10/#custom-dynamic-array): We used `std::vector` extensively in our engine and discovered the need for managing its memory, so we implmented our own dynamic array class. The process revealed more problems in our memory management system!
  
### Week 13
- [Delegates](../../blogs/week-13/#delegates): We made a new data structure that takes care of managing callbacks and handles to unify our system-to-system event structure.
- Patch Notes:
	- [Moving the Dynamic Array](../../blogs/week-13/#move-assignment-operator-for-arrays): Our custom dynamic array had a bug that completely broke any `move` operations on them.

## Relevant Interviews

### Elan Ruskin
- [Synchronization of Time](../../interviews/ElanRuskin-interview/#synchronization-of-time)
- [Engines Can Change, Little by Little](../../interviews/ElanRuskin-interview/#engines-can-change-little-by-little)
### Shanee Nishry
- [Keeping it Minimal, Decoupled & Data-Oriented](../../interviews/ShaneeNishry-interview/#keeping-it-minimal-decoupled-data-oriented)
- [Developing for an iOS Engine](../../interviews/ShaneeNishry-interview/#developing-for-an-ios-engine)
### Jeff Preshing
- [The Arc80 Engine Architecture](../../interviews/RaymondGraham-interview/#the-console-evolution-and-engine-implications)
- [Systems Integration](../../interviews/JeffPreshing-interview/#systems-integration)
- [Low-level Debugging](../../interviews/JeffPreshing-interview/#low-level-debugging)
- [Reflection and Serialization](../../interviews/JeffPreshing-interview/#reflection-and-serialization)
- [Console Development Experiences](../../interviews/JeffPreshing-interview/#console-development-experiences)
### Raymond Graham
- [The Console Evolution and Engine Implications](../../interviews/RaymondGraham-interview/#the-console-evolution-and-engine-implications)
- [Porting between Non-Compatible Architectures](../../interviews/RaymondGraham-interview/#porting-between-non-compatible-architectures)
### Amandine Coget
- [Parallelism and Data-Oriented Design](../../interviews/AmandineCoget-interview/#parallelism-and-data-oriented-design)
### Tommy Refenes
- [Basic Principles of Abstraction](../../interviews/TommyRefenes-interview/#basic-principles-of-abstraction)
- [Stealth Loading in Super Meat Boy](../../interviews/TommyRefenes-interview/#stealth-loading-in-super-meat-boy)
### [Alice Ching](../../interviews/AliceChing-advice/)
### [Jason Gregory](../../interviews/JasonGregory-advice/)
### [Oliver Franzke](../../interviews/OliverFranzke-advice/)
### [Walt Destler](../../interviews/WaltDestler-advice/)

## TODO: Postmortem
