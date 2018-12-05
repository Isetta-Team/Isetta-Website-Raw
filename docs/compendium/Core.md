# Core

## Week 1
- [The Whole Core](../../blogs/engine-architecture.md#core): At the start of our journey, we layed out the roadmap of our core libraries and introduced each of them — even though some were changed or removed later on.
- [Module Manager](../../blogs/week-1.md#module-manager): Our module manager takes care of module start-up, shut-down and update sequence. We thought it would be trivial but actually fell into a 2-hour discussion about the fundamental design of the modules...
- [Error Handling](../../blogs/week-1.md#error-handling): We agreed on the usages of exceptions and asserts, and hesitantly brought in the Microsoft Foundation Class library to help with asserts.
- [Math](../../blogs/week-1.md#math): The first version of our Math library was quickly implemented by referencing Unity's Math API and various online 3D math resources.
- [String ID](../../blogs/engine-architecture.md#core): We didn't think too much and brought in an open-source string ID library.

## Week 2
- [Memory Management, Part 1](../../blogs/week-2.md#memory): We designed and implemented our initial naive version of [stack](../../blogs/week-2/#stack-allocator) and [pool](../../blogs/week-2/#pool-allocator) allocators, whose performance was proven to be phenomenal through [benchmarking](../../blogs/week-2/#benchmarking). We also [proposed a memory management pattern](../../blogs/week-2/#proposed-memory-management-patterns-in-our-engine) in our game, without knowing how big a boon or bane it would be in the future.
- [Engine Config](../../blogs/week-2.md#engine-config): By [analyzing our needs](../../blogs/week-2/#requirements) and [referencing established engines](../../blogs/week-2/#comparison-with-other-engines), we designed and implemented a surprisingly easy to use configuration system.
- Patch Notes:
	- [Asserts](../../blogs/week-2.md#assertions): Our premonition was right — the Microsoft Foundation Class library was indeed not the best way to implement assertions for us, so we removed it and made our own.

## Week 3
- [Serialization](../../blogs/week-3.md#serialization): We originally included serialization in our architecture diagram because we thought networking would need it. But the networking library we brought in already has its own! As much as we wanted to do serialization, we decided to drop it to save headaches and limit the scope.
- [STL Wrapper](../../blogs/week-3.md#stl-wrapper): As the development went on, we realized an STL wrapper is not necessary and would be tedious and trivial to implement, we dropped it. We still had `IsettaAlias.h` though, so we can write `U8` instead of `uint8_t` every time.
- [Data Structures](../../blogs/week-3.md#data-structures): We realized we need some custom data structures like `RingBuffer` for our other systems, so we implemented that. At this point, we also got ourselves into the mindset that we could implement our data strucures on-demand throughout the project.
- [Timer](../../blogs/week-3.md#timer): We implemented our `Timer` class using C++'s built-in `<chrono>` library — it was as simple as that.
- [Memory Management, Part 2](../../blogs/week-3.md#memory-management): We implemented a [double-buffer allocator](../../blogs/week-3/#double-buffered-allocator), a [pool allocator](../../blogs/week-3/#non-templated-pool-allocator), and our very first version of defragmentation with [custom object handles](../../blogs/week-3/#object-handles) instead of regular pointers.
- [File System](../../blogs/week-3.md#filesystem): We made *a* file system that's capable of async file manipulation using Microsoft's API. It was a lot of circular documentation, and knowing the right terminology was really important to figuring out what to learn.

## Week 4
- [Memory Defragmentation](../../blogs/week-4.md#memory): A naive and unoptimized defragmentation system was born.
- Patch Notes:
	- [Someone's Checking Our Math!](../../blogs/week-4.md#math-libraryunit-testing): Someone found a bug in our `Matrix4` class and opened a pull request on Github!

## Week 5
- [Module Manager, Removed](../../blogs/week-5.md#goodbye-module-manager): `ModuleManager` was becoming an obvious central hub (a.k.a. choke point) for our engine's modules. Once we had introduced systems other than modules in our engine, the module manager became restrictice, so we said good bye to it and moved its functionality to Engine Loop. This also allowed us to revisit our different update loops, now named `FixedUpdate` and `VariableUpdate`.
- [Memory Management, Part 3](../../blogs/week-5.md#memory): Our previous allocators weren't enough for our needs, so we implemented an almighty [free list allocator](../../blogs/week-5/#freedom-from-the-free-list-allocator) that enabled a lot of versatility in our memory management systems. Unfortunately, this is effectively dynamic allocation, so we had to abandon our dream of [solely static allocations in the engine](../../blogs/week-5/#abandoning-the-all-static-fantasy). Our API [was changed](../../blogs/week-5/#abandoning-the-all-static-fantasy) after all of this to improve usability for our developers.

## Week 7
- [Serialization](../../blogs/week-7.md#serialization): We discussed what our need for serialization is within the engine and rationalized why sticking with our networking library's serialization was best for the time being.
- Patch Notes:
	- [Free List Alignment Fix](../../blogs/week-7.md#freelistallocator-alignment): We found an alignment bug in our freelist and fixed it—temporarily. We [really fixed it](https://github.com/Isetta-Team/Isetta-Engine/commit/d7d24af304d58f763679bf65ffb3475dcb27d487#diff-5f55751c1c29a1bbebb54046753a0f79) a week or two later by changing the execution order of when we access a node on the free list and when we overwrite it.

## Week 9
- Patch Notes:
	- [Quaternions](../../blogs/week-9.md#whats-wrong-with-our-quaternions): We fixed some nasty Quaternion bugs in our Math library during the process of making `NetworkTransform`.
	- [Logger File I/O](../../blogs/week-9.md#logger-file-io): We discovered a problem with our logging output caused by optimization in our file system and made a non-perfect fix.

## Week 10
- [Our Own Dynamic Array](../../blogs/week-10.md#custom-dynamic-array): We used `std::vector` extensively in our engine and discovered the need for managing its memory, so we implmented our own dynamic array class. The process revealed more problems in our memory management system, which includes:
	- [A draw back to preallocating all of our memory](../../blogs/week-10.md#a-drawback-to-preallocating-all-your-memory), which caused us to miss when we would make out-of-array accesses.
	- [Our memory management can only be used after a certain point in our initialization sequence](../../blogs/week-10.md#initialization-timing-and-memory-management), so we needed to weigh some architecture decisions in order to use `static` variables.
	- [Placement `new` for array is undefined](../../blogs/week-10.md#placement-new-for-arrays-is-undefined), and we had no clue. This one wasn't on us, but we did need to account for it by iterating over all of our allocated elements individually and initializing them instead of using array `new`.

## Week 12
- [Memory Management, Initialization Edition](../../blogs/week-12.md#memory-manager-upgrades): Our free list allocator had been useful so far, but we kept hitting a problem whenever we would use more than we allotted at startup. So we implemented some allocator expansion features! And since our memory manager isn't a module within our engine, we refactored it to follow [RAII](https://en.cppreference.com/w/cpp/language/raii).
- [Performance Optimization](../../blogs/week-12.md#performance-optimization): Some of our systems heavily used our free list allocator but could have been using our pool allocators, so we switched them over and saw some modest performance increases.
  
## Week 13
- [Monitoring Memory Leaks](../../blogs/week-13.md#monitoring-memory-leaks): At long last, we implemented a system that can monitor leaks on our own memory manager.
- [Delegates](../../blogs/week-13.md#delegates): We made a new data structure that takes care of managing callbacks and handles to unify our system-to-system event structure.
- Patch Notes:
	- [Moving the Dynamic Array](../../blogs/week-13.md#move-assignment-operator-for-arrays): Our custom dynamic array had a bug that completely broke any `move` operations on them.

## Relevant Interviews
- Shanee Nishry:
	- [Keeping it Minimal, Decoupled & Data-Oriented](../../interviews/ShaneeNishry-interview/#keeping-it-minimal-decoupled-data-oriented)
	- [Developing for an iOS Engine](../../interviews/ShaneeNishry-interview/#developing-for-an-ios-engine)
	- [Caching in on Memory](../../interviews/ShaneeNishry-interview/#caching-in-on-memory)
- Jeff Preshing:
	- [The Arc80 Engine Architecture](../../interviews/RaymondGraham-interview/#the-console-evolution-and-engine-implications)
	- [Systems Integration](../../interviews/JeffPreshing-interview/#systems-integration)
	- [Low-level Debugging](../../interviews/JeffPreshing-interview/#low-level-debugging)
	- [Reflection and Serialization](../../interviews/JeffPreshing-interview/#reflection-and-serialization)
	- [Console Development Experiences](../../interviews/JeffPreshing-interview/#console-development-experiences)
- Raymond Graham:
	- [The Console Evolution and Engine Implications](../../interviews/RaymondGraham-interview/#the-console-evolution-and-engine-implications)
	- [Porting between Non-Compatible Architectures](../../interviews/RaymondGraham-interview/#porting-between-non-compatible-architectures)
- Amandine Coget:
	- [Parallelism and Data-Oriented Design](../../interviews/AmandineCoget-interview/#parallelism-and-data-oriented-design)
- Tommy Refenes:
	- [Basic Principles of Abstraction](../../interviews/TommyRefenes-interview/#basic-principles-of-abstraction)
	- [Stealth Loading in Super Meat Boy](../../interviews/TommyRefenes-interview/#stealth-loading-in-super-meat-boy)

## TODO: Postmortem
