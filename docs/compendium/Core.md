# Core

## Week 1
- [Core](../blogs/engine-architecture.md#core): As the journey starts, we layed out the roadmap of our core libraries and introduced each of them — even though some were changed or removed later on.
- [Module Manager](../blogs/week-1.md#module-manager): Our module manager takes care of module start-up, shut-down and update sequence. We thought it would be trivial but actually fell into a 2-hour discussion about it's fundamental design...
- [Error Handling](../blogs/week-1.md#error-handling): We agreed on the usages of exceptions and asserts, and hesitantly brought in MFC to help with asserts.
- [Math](../blogs/week-1.md#math): The first version of our Math library was quickly implemented by referencing Unity's Math API and various online 3D math resources.
- [String ID](../blogs/engine-architecture.md#core): We didn't think too much and brought in an open source string id library.

## Week 2
- [Memory Allocators](../blogs/week-2.md#memory): We designed and implemented the initial naive version of stack and pool allocator, whose performance was proven to be phenomenal through benchmarking. We also proposed a memory management pattern in our game, without knowing how big a boon or bane it would be in the future.
- [Engine Config](../blogs/week-2.md#engine-config): By analyzing our needs and referencing established engines, we designed and implemented a surprisingly easy to use configuration system.
- Patch Notes:
	- [Asserts](../blogs/week-2.md#assertions): Our premonition was right — MFC was indeed not the best way to implement assertions for us, so we removed it and made our own.

## Week 3
- [Serialization](../blogs/week-3.md#serialization): We originally included serialization in our architectural diagram because we thought networking would need it. But the networking library we brought in already has its own! As much as we wanted to do serialization, we decided to drop it to save headaches and limit the scope.
- [STL Wrapper](../blogs/week-3.md#stl-wrapper): As the development goes on we realized STL wrapper is not necessary and would be tedious and trivial to implement, we dropped it. We still have a "IsettaAlias.h" though so we can write `U8` instead of `uint8_t` every time. 
- [Data Structures](../blogs/week-3.md#data-structures): We realized we need some custom data structures like `RingBuffer` so we implemented that. We set up the mindset to implement data structures on-demand.
- [Timer](../blogs/week-3.md#timer): We implemented our `Timer` class using C++'s built in `<chrono>` library.
- [Memory Management](../blogs/week-3.md#memory-management): We implemented a double-buffer allocator, a pool allocator, and a very first version of defragmentation with custom object handles.
- [File System](../blogs/week-3.md): We made *a* file system that's capable of async file manipulation using Microsoft's API.

## Week 4
- [Defragmentation](../blogs/week-4.md#memory): A naive and unoptimized defragmentation system was born.
- Patch Notes:
	- [Math](../blogs/week-4.md#math-libraryunit-testing): Someone found a bug in our `Matrix4` class and opened a pull request on Github!

## Week 5
- [Module Manager, removed](../blogs/week-5.md#goodbye-module-manager): We said good bye to our module manager and moved its functionality to Engine Loop after serious considerations.
- [Memory](../blogs/week-5.md#memory): We implemented an almighty freelist allocator and made some changes to our memory management API for better usability. This is also the week where we abandoned our all "static" fantasy.

## Week 7
- [Serialization](../blogs/week-7.md#serialization): Shared our opinion on serialization and how to work with our networking library's serialization.
- Patch Notes:
	- [Freelist alignment](../blogs/week-7.md#freelistallocator-alignment): Caught and fixed a freelist alignment bug.

## Week 9
- Patch Notes:
	- [Quaternions](../blogs/week-9.md#whats-wrong-with-our-quaternions): Fixed a bug in our math library during the process of making `NetworkTransform`. 
	- [Logger File I/O](../blogs/week-9.md#logger-file-io): We discovered a problem caused by optimization in our file system and made a non-perfect fix.

## Week 10
- [Custom Dynamic Array](../blogs/week-10.md#custom-dynamic-array): We used `std::vector` extensively in our engine and discovered the need for managing their memory, so we implmented our own dynamic array class. The process revealed more problems in our memory management system, which includes:
	- [A draw back to preallocating all your memory](../blogs/week-10.md#a-drawback-to-preallocating-all-your-memory).
	- [Our memory management can be affected by initialization sequence](../blogs/week-10.md#initialization-timing-and-memory-management).
	- [Placement `new` for array in undefined](../blogs/week-10.md#placement-new-for-arrays-is-undefined).

## Week 12
- [Memory Managemer Initialization](../blogs/week-12.md#memory-manager-upgrades): We made another change related to initialization order of memory manager and other systems.
- [Performance Optimization](../blogs/week-12.md#performance-optimization): We optimized some systems using our memory manager's capability
  
## Week 13
- [Monitoring Memory Leaks](../blogs/week-13.md#monitoring-memory-leaks): Finally, we implemented a system that can monitor leaks on our own memory manager.
- [Delegate](../blogs/week-13.md#delegates): We made a new data structure that takes care of manaing callbacks and handles.
- Patch Notes:
	- [Dynamic Array](../blogs/week-13.md#move-assignment-operator-for-arrays): Fixed a bug in our `Array`'s move assignment operator.

## Relevant Interviews
Ordered by amount of relevant information:
- [Jeff Preshing](../interviews/JeffPreshing-interview.md)
- [Shanne Nishry](../interviews/ShaneeNishry-interview.md)
- [Tommy Refenes](../interviews/TommyRefenes-interview.md)
- [Amandine Coget](../interviews/AmandineCoget-interview.md)
- [Raymond Graham](../interviews/RaymondGraham-interview.md)

## TODO: Postmortem
