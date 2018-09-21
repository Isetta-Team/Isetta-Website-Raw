# Resources

*This page is always updating to include more resources*

Useful articles/resources we used during the development of Isetta

## Builds
* [An Introduction to Modern CMake](https://cliutils.gitlab.io/modern-cmake/)


## Cache
* [Gallery of Processor Cache Effects](http://igoro.com/archive/gallery-of-processor-cache-effects/)
* [Scott Meyers - CPU Caches and Why You care](https://vimeo.com/97337258)
* [Latency Numbers Every Programmer Should Know](https://gist.github.com/jboner/2841832)


## Config File (Engine Config)
* [Create A Simple Configuration Parser](https://www.dreamincode.net/forums/topic/183191-create-a-simple-configuration-file-parser/)
* [Implementing a CVAR System](https://stackoverflow.com/questions/5187449/implementing-a-cvar-system)
* [C++11/14 How to parse a simple config file](https://www.walletfox.com/course/parseconfigfile.php)
* [A Small Class to Read INI File](https://www.codeproject.com/Articles/10809/A-Small-Class-to-Read-INI-File)
* CryEngine
    * [Using Console and Config Files](http://docs.cryengine.com/display/SDKDOC4/Using+Console+and+Config+Files)
    * [ICVar Documentation](http://docs.cryengine.com/display/CPPAPI/ICVar)
* Lumberyard
    * [Console Variable Tutorial](https://docs.aws.amazon.com/lumberyard/latest/userguide/system-cvar-tutorial.html)
    * [`ISystem.h`](https://github.com/aws/lumberyard/blob/e881f3023cc1840650eb7b133e605881d1d4330d/dev/Code/CryEngine/CryCommon/ISystem.h)
    , [`IConsole.h`](https://github.com/aws/lumberyard/blob/master/dev/Code/CryEngine/CryCommon/IConsole.h)
    , [`XConsole.h`](https://github.com/aws/lumberyard/blob/0b34452ef270f6b27896858dc7899c9796efb124/dev/Code/CryEngine/CrySystem/XConsole.h)
    , [`XConsole.cpp`](https://github.com/aws/lumberyard/blob/e881f3023cc1840650eb7b133e605881d1d4330d/dev/Code/CryEngine/CrySystem/XConsole.cpp)
    , [`XConsoleVariable.h`](https://github.com/aws/lumberyard/blob/e881f3023cc1840650eb7b133e605881d1d4330d/dev/Code/CryEngine/CrySystem/XConsoleVariable.h)
    , [`XConsoleVariable.cpp`](https://github.com/aws/lumberyard/blob/e881f3023cc1840650eb7b133e605881d1d4330d/dev/Code/CryEngine/CrySystem/XConsoleVariable.cpp)
    , [`EntityCVars.h`](https://github.com/aws/lumberyard/blob/e881f3023cc1840650eb7b133e605881d1d4330d/dev/Gems/CryLegacy/Code/Source/CryEntitySystem/EntityCVars.h)
    , [`EntityCBars.cpp`](https://github.com/aws/lumberyard/blob/master/dev/Gems/CryLegacy/Code/Source/CryEntitySystem/EntityCVars.cpp)
    , [`ICfgFile.h`](https://github.com/aws/lumberyard/blob/master/dev/Code/Tools/RC/ResourceCompiler/ICfgFile.h)
    , [`CfgFile.h`](https://github.com/aws/lumberyard/blob/master/dev/Code/Tools/RC/ResourceCompiler/CfgFile.h)
    , [`CfgFile.cpp`](https://github.com/aws/lumberyard/blob/master/dev/Code/Tools/RC/ResourceCompiler/CfgFile.cpp)
* Unreal
    * [Console Variables in C++](https://api.unrealengine.com/INT/Programming/Development/Tools/ConsoleManager/index.html)

## Engine Loop
* [Game Programming Pattern - Game Loop](http://gameprogrammingpatterns.com/game-loop.html)
* [Gaffer On Games - Fix Your Timestep](https://gafferongames.com/post/fix_your_timestep/)

## Memory
* Introduction
	* *Game Engine Architecture 2nd edition* - Section 3.2.5.1: Alignment and Packing
	* *Game Engine Architecture 2nd edition* - Section 5.2: Memory Management
	* [Gamesutra - Writing a Game Engine from Scratch Part2: Memory](https://www.gamasutra.com/blogs/MichaelKissner/20151104/258271/Writing_a_Game_Engine_from_Scratch__Part_2_Memory.php): Also covers modern CPU memory access patterns.
	* [Are we out of memory?](http://www.swedishcoding.com/2008/08/31/are-we-out-of-memory/)

* Implementation
	* [Randy Gaul's Game Programming Blog - Memory Management](http://www.randygaul.net/2014/07/30/memory-management/): "Anything that has a very clear and non-variable lifespan should be able to be allocated on a stack."
	* [IBM - Building your own memory manager for C/C++ projects](https://www.ibm.com/developerworks/aix/tutorials/au-memorymanager/index.html): A step by step guide on implementing some allocators.
	* [ISO C++ FAQ: Is there a way to force new to allocate memory from a specific memory area?](https://isocpp.org/wiki/faq/dtors#memory-pools): Some discussion on placement `new`, `new`, and `delete`, and what you should know if you are going to manage object's lifetime on your own.
    * [GitHub - Memory Allocators Example](https://github.com/mtrebi/memory-allocators)
	* [Use the Memory Windows in the Visual Studio Debugger](https://docs.microsoft.com/en-us/visualstudio/debugger/memory-windows?view=vs-2017): The memory windows is very important when debugging memory allocators. You can see the memory layout byte by byte.
	* [Memory Patterns in Visual Studio](https://stackoverflow.com/questions/127386/in-visual-studio-c-what-are-the-memory-allocation-representations): Another utility for debugging memory allocator. Visual Studio uses certain patterns to mark the state of memory chunks.
	* [C++ Casting, or: "Oh No, They Broke Malloc!"](https://embeddedartistry.com/blog/2017/2/28/c-casting-or-oh-no-we-broke-malloc): On different types of casts (`static_cast`, `reinterpret_cast`, `const_cast`, `dynamic_cast`, C-style casts) in C++ and when you should use them. `reinterpret_cast` is especially important as we will need to cast `uintptr_t` to actual pointers a lot.
	* [When should static_cast, dynamic_cast, const_cast and reinterpret_cast be used?](https://stackoverflow.com/questions/332030/when-should-static-cast-dynamic-cast-const-cast-and-reinterpret-cast-be-used)
	* [ISO C++ FAQ on Memory Management](https://isocpp.org/wiki/faq/freestore-mgmt)
	* [How does delete[] “know” the size of the operand array?](https://stackoverflow.com/questions/197675/how-does-delete-know-the-size-of-the-operand-array)


## Networking
* [Gaffer On Games - Game Networking](https://gafferongames.com/categories/game-networking/)
* [Multiplayer Game Programming](https://www.amazon.com/Multiplayer-Game-Programming-Architecting-Networked/dp/0134034309)
    * *Ch. 6, Network Topologies and Sample Games* covers how to build out an application layer for your game networking

## Serialization / Reflection
* [A C++ 11 Reflection and Serialization library on Github](https://github.com/simonask/reflect)


## Sound
* [Unreal Audio System Overview](https://docs.unrealengine.com/en-US/Engine/Audio/Overview)
* [Demystifying Audio Middleware](https://www.somatone.com/demystifying-audio-middleware/)
* [FMOD API Overview](https://www.fmod.com/resources/documentation-api?page=content/generated/common/lowlevel_introduction.html#configuration)
* *Game Engine Architecture* - Chapter 13: Audio


## String Hashing
* [A StringID Library on Github](https://github.com/TheAllenChou/string-id)
* [Practical Hash IDs](http://cowboyprogramming.com/2007/01/04/practical-hash-ids/)
* [Minial perfect hashing for game assets](https://metricpanda.com/rival-fortress-update-24-minimal-perfect-hash-for-game-assets)
* [Preprocessed strings for asset ids](http://www.randygaul.net/2015/12/11/preprocessed-strings-for-asset-ids/)
* [Hash Tables - Introduction ](http://cecilsunkure.blogspot.com/2012/07/hash-tables.html)


## Visual Studio
* [Common Macros for Build Commands](https://msdn.microsoft.com/en-us/library/c02as0cs.aspx)


## Misc.
* [Everything about unordered_map](https://codeforces.com/blog/entry/21853)
* [unordered_map cppreference](https://en.cppreference.com/w/cpp/container/unordered_map)
* [Data Structures in Games](http://enemyhideout.com/2016/05/games-101-data-structures-in-games/)
* The Game Engine Architecture's chapter 5.3 on containers
* [In-house Engine Development: Process Tips](https://johanneskuhlmann.de/blog/in-house-engine-development-process-tips/)
* [In-house Engine Development: Technical Tips](https://johanneskuhlmann.de/blog/in-house-engine-development-technical-tips/)

* [Deriving objects from stings](https://stackoverflow.com/questions/582331/is-there-a-way-to-instantiate-objects-from-a-string-holding-their-class-name)
* [String Interning - Useful Properties & Github Repo](https://alexpolt.github.io/intern.html)
* [Fast C++ Logging Library](https://github.com/gabime/spdlog)
* [Ring Buffers](https://embeddedartistry.com/blog/2017/4/6/circular-buffers-in-cc)

## Misc. C++
* [LearnC++ — Overloading the comparison operators](https://www.learncpp.com/cpp-tutorial/96-overloading-the-comparison-operators/)
* [Cppreference - Array Initialization](https://en.cppreference.com/w/c/language/array_initialization)
* [Cppreference - Priority Queue](https://en.cppreference.com/w/cpp/container/priority_queue)
* [StackOverflow - Why is `inline` required on static inline variables?](https://stackoverflow.com/
questions/46874055/why-is-inline-required-on-static-inline-variables)
