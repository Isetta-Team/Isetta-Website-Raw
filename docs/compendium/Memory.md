# Memory

## Timeline

### Week 2
- [Memory Management, Part 1](../../blogs/week-2/#memory): We designed and implemented our initial naive version of [stack](../../blogs/week-2/#stack-allocator) and [pool](../../blogs/week-2/#pool-allocator) allocators, whose performance was proven to be phenomenal through [benchmarking](../../blogs/week-2/#benchmarking). We also [proposed a memory management pattern](../../blogs/week-2/#proposed-memory-management-patterns-in-our-engine) in our game, without knowing how big a boon or bane it would be in the future.

### Week 3
- [Memory Management, Part 2](../../blogs/week-3/#memory-management): We implemented a [double-buffer allocator](../../blogs/week-3/#double-buffered-allocator), a [pool allocator](../../blogs/week-3/#non-templated-pool-allocator), and our very first version of defragmentation with [custom object handles](../../blogs/week-3/#object-handles) instead of regular pointers.

### Week 4
- [Memory Defragmentation](../../blogs/week-4/#memory): A naive and unoptimized defragmentation system was born.

### Week 5
- [Memory Management, Part 3](../../blogs/week-5/#memory): Our previous allocators weren't enough for our needs, so we implemented an almighty [free list allocator](../../blogs/week-5/#freedom-from-the-free-list-allocator) that enabled a lot of versatility in our memory management systems. Unfortunately, this is effectively dynamic allocation, so we had to abandon our dream of [solely static allocations in the engine](../../blogs/week-5/#abandoning-the-all-static-fantasy). Our API [was changed](../../blogs/week-5/#abandoning-the-all-static-fantasy) after all of this to improve usability for our developers.

### Week 7
- Patch Notes:
	- [Free List Alignment Fix](../../blogs/week-7/#freelistallocator-alignment): We found an alignment bug in our freelist and fixed it—temporarily. We [really fixed it](https://github.com/Isetta-Team/Isetta-Engine/commit/d7d24af304d58f763679bf65ffb3475dcb27d487#diff-5f55751c1c29a1bbebb54046753a0f79) a week or two later by changing the execution order of when we access a node on the free list and when we overwrite it.

### Week 10
- [Our Own Dynamic Array](../../blogs/week-10/#custom-dynamic-array): We used `std::vector` extensively in our engine and discovered the need for managing its memory, so we implmented our own dynamic array class. The process revealed more problems in our memory management system, which includes:
	- [A draw back to preallocating all of our memory](../../blogs/week-10/#a-drawback-to-preallocating-all-your-memory), which caused us to miss when we would make out-of-array accesses.
	- [Our memory management can only be used after a certain point in our initialization sequence](../../blogs/week-10/#initialization-timing-and-memory-management), so we needed to weigh some architecture decisions in order to use `static` variables.
	- [Placement `new` for array is undefined](../../blogs/week-10/#placement-new-for-arrays-is-undefined), and we had no clue. This one wasn't on us, but we did need to account for it by iterating over all of our allocated elements individually and initializing them instead of using array `new`.

### Week 12
- [Memory Management, Initialization Edition](../../blogs/week-12/#memory-manager-upgrades): Our free list allocator had been useful so far, but we kept hitting a problem whenever we would use more than we allotted at startup. So we implemented some allocator expansion features! And since our memory manager isn't a module within our engine, we refactored it to follow [RAII](https://en.cppreference.com/w/cpp/language/raii).
- [Performance Optimization](../../blogs/week-12/#performance-optimization): Some of our systems heavily used our free list allocator but could have been using our pool allocators, so we switched them over and saw some modest performance increases.
  
### Week 13
- [Monitoring Memory Leaks](../../blogs/week-13/#monitoring-memory-leaks): At long last, we implemented a system that can monitor leaks on our own memory manager.

## Relevant Interviews

### Elan Ruskin
- [Allocate, Allocate, Reallocate](../../interviews/ElanRuskin-interview/#allocate-allocate-reallocate)
### Shanee Nishry
- [Developing for an iOS Engine](../../interviews/ShaneeNishry-interview/#developing-for-an-ios-engine)
- [Caching in on Memory](../../interviews/ShaneeNishry-interview/#caching-in-on-memory)
### Jeff Preshing
- [The Arc80 Engine Architecture](../../interviews/RaymondGraham-interview/#the-console-evolution-and-engine-implications)
### Raymond Graham
- [Porting between Non-Compatible Architectures](../../interviews/RaymondGraham-interview/#porting-between-non-compatible-architectures)
### Amandine Coget
- [Parallelism and Data-Oriented Design](../../interviews/AmandineCoget-interview/#parallelism-and-data-oriented-design)

## Postmortem
**Writing your own memory manager will be a good use of time if you're trying to learn low-level programming.** It requires a wide breadth of low-level topics, including how `malloc` and `free` work; the performance implications of memory allocation (and garbage collectors); the layout of memory and details regarding that like cache, alignment, and structure padding; and a deeper understanding of C++, like how to use placement `new`, how to manually call destructors on objects, and where different types of objects are allocated (stack, heap, data segment).

This might seem intimidating on first glance, but it's not if you give yourself plenty of time to research, implement, and reimplement. We didn't even come close to getting it right the first time—in fact, we probably still have a couple fatal bugs within our memory management system that we haven't sussed out yet. But because the memory manager was used by practically everything in the engine, we had plenty of opportunities to test and iterate on it, which resulted in a more robust and functional memory manager than if we had tried to design a good one outright.

**Writing your own memory manager may not be a good use of time if you need results quick.** We appreciated developing our own as part of our project because it definitely yielded growth to our programmers, and we did see notable performance gains as a result of making one ourselves, but we had to spend a large amount of our time developing the memory manager or fixing it, and that portion of time was even more significant due to how short our project was. On a project that has the same timeline that we had for this engine (about 15 weeks), we would probably opt to not make a memory manager so that we could just go straight into developing higher level systems sooner. If you're targeting modern PCs, then you won't even really have to worry about stringent memory requirements either, so optimizing the development will likely still be more important than optimizing your memory accesses.

**More things to know:**

*   Be comprehensive with performance benchmarking for memory management systems. We benchmarked our allocators individually, but we failed to benchmark the performance of the entire system in use in a game so we couldn't see if our time investments were worthwhile. It will be tempting to see that individual allocators do well and just believe that results in overall better performance, but overhead can easily be introduced when you have multiple different subsystems to manage in a system.
*   Be careful of using templates in a memory manager, including variadic templates. These not only utterly _destroyed_ our compile time and broke Intellisense when using `new` (we couldn't tell what parameters were used in a constructor because they were hidden by the variadic templates), but they also made tracking down errors excruciatingly difficult because the error message would come from the memory allocator implementation and we wouldn't know which templated usage of that allocator was really failing.
*   The impact of different allocation patterns (like pool, single-frame, double-frame, etc.) is more important than blindly trying to make every memory allocation in your system "statically allocated." For example, in our engine, using a pool allocator for our entities improved our performance dramatically. The pool allocator also gives us more flexibility regarding how that memory is used, and we can reason about other optimizations we can make on it in the future as well.