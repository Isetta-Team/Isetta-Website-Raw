# Resources

*This page is always updating to include more resources*

Useful articles/resources we used during the development of Isetta

## 3D Math
* *Game Engine Architecture 2nd edition* - Chapter 4: 3D Math for Games
* *Essential Mathematics for Games & Interactive Applications* by James Van Verth & Lars Bishop
* *Geometric Tools for Computer Graphics* by Philip Schneider & David Eberly

## Builds
* [An Introduction to Modern CMake](https://cliutils.gitlab.io/modern-cmake/)


## Cache
* [Gallery of Processor Cache Effects](http://igoro.com/archive/gallery-of-processor-cache-effects/)
* [Scott Meyers - CPU Caches and Why You care](https://vimeo.com/97337258)
* [Latency Numbers Every Programmer Should Know](https://gist.github.com/jboner/2841832)

## Collision Detection
* General Introduction
    * [*Real-Time Collision Detection*](https://realtimecollisiondetection.net/) by Christer Ericson
    * [Toptal - Collision Detection for Solid Objects](https://www.toptal.com/game/video-game-physics-part-ii-collision-detection-for-solid-objects)
    * [Ryan Schmidt (Duke University) - Everything you ever wanted to know about collision detection](https://www2.cs.duke.edu/courses/cps124/spring04/notes/12_collisions/collision_detection.pdf)

* Coarse Phase (Broad Phase)
    * [Comenius University Slides - Broad Phase Collision Detection](https://dai.fmph.uniba.sk/upload/8/87/Ca15_lesson05.pdf)
    * [Randy Gual - Dynamic AABB Tree](http://www.randygaul.net/2013/08/06/dynamic-aabb-tree/)
    * [Allen Chou - Broadphase - Dynamic AABB Tree](http://allenchou.net/2014/02/game-physics-broadphase-dynamic-aabb-tree/)
    * [AABB Collision Detection](https://developer.mozilla.org/en-US/docs/Games/Techniques/3D_collision_detection)
    * [Introductory Guide to AABB Tree Collision Detection](https://www.azurefromthetrenches.com/introductory-guide-to-aabb-tree-collision-detection/)

* Fine Phase & Others
    * [Gamasutra - Simple Intersection Tests for Games](https://www.gamasutra.com/view/feature/131790/simple_intersection_tests_for_games.php?print=1)
    * [Correct Box Sphere Intersection](http://theorangeduck.com/page/correct-box-sphere-intersection)
    * [StackExchange - Simple 3D OBB-Collision](https://gamedev.stackexchange.com/questions/112883/simple-3d-obb-collision-directx9-c)
    * [Separating Axis Theorem for OBB](http://www.jkh.me/files/tutorials/Separating%20Axis%20Theorem%20for%20Oriented%20Bounding%20Boxes.pdf)
    * [Randy Gual - Deriving OBB to OBB Intersection](http://www.randygaul.net/2014/05/22/deriving-obb-to-obb-intersection-sat/)
    * [Capsule-Capsule Collision in Games](http://thunderfist-podium.blogspot.com/2012/02/capsule-capsule-collision-in-games.html)
    * [gamedev.net - Capsule-Box Intersection](https://www.gamedev.net/forums/topic/360869-capsule-or-swept-sphere---box-collision/)
    * [Distance between 3D Lines & Segments](http://geomalgorithms.com/a07-_distance.html)

* Raycasting
    * [Ray-Capsule Test Sample Code on Github](https://gist.github.com/jdryg/ecde24d34aa0ce2d4d87)
    * [Ray-OBB Intersection Test](https://www.gamedev.net/forums/topic/360869-capsule-or-swept-sphere---box-collision/)
    * [Picking with custom Ray-OBB function](http://www.opengl-tutorial.org/miscellaneous/clicking-on-objects/picking-with-custom-ray-obb-function/)
    * [Details of Ray/OBB Intersection Paper by Wildfire Games](https://svn.wildfiregames.com/public/ps/trunk/docs/ray_intersect.pdf)

* GJK
    * [Casey Muratori - Implementing GJK](https://caseymuratori.com/blog_0003)
    * [GJK Sample Code on Github](https://github.com/kevinmoran/GJK)

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

## Data-Oriented vs Object-Oriented
* [Entity Component Systems &
Data Oriented Design (Aras Pranckevicius)](http://aras-p.info/texts/files/2018Academy%20-%20ECS-DoD.pdf)
* [CppCon 2014: Mike Acton "Data-Oriented Design and C++"](https://www.youtube.com/watch?v=rX0ItVEVjHc)
* [CppCon 2015: Vittorio Romeo “Implementation of a component-based entity system in modern C++”](https://www.youtube.com/watch?v=NTWSeQtHZ9M)
* [Dice Introduction to Data-Oriented Design](https://www.dice.se/wp-content/uploads/2014/12/Introduction_to_Data-Oriented_Design.pdf)
* [Stingray's Practical Examples in Data Oriented Design](http://bitsquid.blogspot.com/2010/05/practical-examples-in-data-oriented.html)
* [Data-Oriented Demo: SOA, composition Jonathan Blow](https://www.youtube.com/watch?v=ZHqFrNyLlpA)

## Data Structures
* [Ring Buffers](https://embeddedartistry.com/blog/2017/4/6/circular-buffers-in-cc)
* [Everything about unordered_map](https://codeforces.com/blog/entry/21853)
* [unordered_map cppreference](https://en.cppreference.com/w/cpp/container/unordered_map)
* [Data Structures in Games](http://enemyhideout.com/2016/05/games-101-data-structures-in-games/)
* *Game Engine Architecture 2nd edition* - Chapter 5.3: Containers
* [Why inheritance is viewed poorly](https://softwareengineering.stackexchange.com/questions/260343/why-is-inheritance-generally-viewed-as-a-bad-thing-by-oop-proponents/260354#260354)

## DLL
* [Windows Walkthrough: Creating and Using a Dynamic Link Library](https://msdn.microsoft.com/en-us/library/ms235636.aspx)
* [Inline Functions with dllimport/dllexport](https://stackoverflow.com/questions/8876279/c-inline-functions-with-dllimport-dllexport)
* [Multiple Classes in DLL File](https://stackoverflow.com/questions/37291851/multiple-classes-in-dll-file)
* [How to export a DLL from Visual Studio 2017 C++ Project](https://stackoverflow.com/questions/46071035/how-to-export-a-dll-from-visual-studio-2017-community-edition-c-project)

## ECS
* [Nomad Game Engine: Part 2 — ECS](https://medium.com/@savas/nomad-game-engine-part-2-ecs-9132829188e5)

## Engine Loop
* [Game Programming Pattern - Game Loop](http://gameprogrammingpatterns.com/game-loop.html)
* [Gaffer On Games - Fix Your Timestep](https://gafferongames.com/post/fix_your_timestep/)

## Filesystem
* [Windows with C++ - The Evolution of Threads and IO in Windows](https://msdn.microsoft.com/en-us/magazine/jj883951.aspx)
* StackOverflow
    * [Understanding Multithread Reading C++11](https://stackoverflow.com/questions/29028137/how-to-multithread-reading-a-file-in-c11)
    * [Async Write C++ without Windows](https://stackoverflow.com/questions/21126950/asynchronously-writing-to-a-file-in-c-unix)
    * [Streambuf - What is it?](https://stackoverflow.com/questions/8116541/what-exactly-is-streambuf-how-do-i-use-it)
    * [ReadFile Example](https://stackoverflow.com/questions/30914346/read-lines-from-file-async-using-winapi-readfile)
    * [WriteFile with IO Completion Ports](https://stackoverflow.com/questions/9451557/writefile-with-io-completion-port-issue)
    * [WriteFile Example](https://stackoverflow.com/questions/9174947/writefile-function-c)
    * [IO Completion Port with ReadFile Example](https://stackoverflow.com/questions/9683441/iocp-and-readfileex-usage)
* Microsoft Docs
    * [ReadFile](https://docs.microsoft.com/en-us/windows/desktop/api/fileapi/nf-fileapi-readfile)
    * [WriteFile](https://docs.microsoft.com/en-us/windows/desktop/api/fileapi/nf-fileapi-writefile)
    * [Async Read | ReadFileEx](https://docs.microsoft.com/en-us/windows/desktop/api/fileapi/nf-fileapi-readfileex)
    * [IO Completion Ports](https://docs.microsoft.com/en-us/windows/desktop/fileio/i-o-completion-ports)
    * [PostQueuedCompletionStatu](https://docs.microsoft.com/en-us/windows/desktop/fileio/postqueuedcompletionstatus)
    * [CreateThread](https://docs.microsoft.com/en-us/windows/desktop/api/processthreadsapi/nf-processthreadsapi-createthread)
    * [End of File Example](https://docs.microsoft.com/en-us/windows/desktop/fileio/testing-for-the-end-of-a-file)
* [Multithreading Performance](https://msdn.microsoft.com/en-us/library/ms810437.aspx)
* [Understanding Async IO Operations](https://softwareengineering.stackexchange.com/questions/322387/using-asynchronous-calls-for-heavy-io-operation-how-to-prevent-crushing-the-cpu)

## Graphics
* Horde3D
    * [Some How-To Code](http://horde3d.org/wiki/index.php5?title=Horde3D_Wiki:HOWTO)
    * [Procedural Generated Geometry](http://horde3d.org/wiki/index.php5?title=Procedurally_generated_geometry_tutorial)
    * Forum:
        * [Horde3D Overlay](http://www.horde3d.org/forums/viewtopic.php?f=2&t=169)
        * [How to Draw Primitives](http://www.horde3d.org/forums/viewtopic.php?f=1&t=1027&p=10332#p10332)
        * [Basic OpenGL functions with Horde3D](http://www.horde3d.org/forums/viewtopic.php?f=1&t=1734)
        * [Raw OpenGL](http://www.horde3d.org/forums/viewtopic.php?f=1&t=978)
* OpenGL
    * LearnOpenGL
        * [Hello Window](https://learnopengl.com/Getting-started/Hello-Window)
        * [Hello Triangle](https://learnopengl.com/Getting-started/Hello-Triangle)
        * [Transformations](https://learnopengl.com/Getting-started/Transformations)
    * [OpenGL Error Codes](https://www.khronos.org/opengl/wiki/OpenGL_Error)

## GUI
* [Retained Mode Versus Immediate Mode](https://docs.microsoft.com/en-us/windows/desktop/learnwin32/retained-mode-versus-immediate-mode)
* [Dear ImGui](https://github.com/ocornut/imgui)
* [ImGui in 3D](https://github.com/ocornut/imgui/issues/1627)
* [IMGUI for GameDev tools](https://gist.github.com/bkaradzic/853fd21a15542e0ec96f7268150f1b62)
* [Why Qt and not IMGUI](https://deplinenoise.wordpress.com/2017/03/05/why-qt-and-not-imgui/)

## Memory
* **Introduction**
	* *Game Engine Architecture 2nd edition* - Chapter 3.2.5.1: Alignment and Packing
	* *Game Engine Architecture 2nd edition* - Chapter 5.2: Memory Management
	* [Gamesutra - Writing a Game Engine from Scratch Part2: Memory](https://www.gamasutra.com/blogs/MichaelKissner/20151104/258271/Writing_a_Game_Engine_from_Scratch__Part_2_Memory.php): Also covers modern CPU memory access patterns.
	* [Are we out of memory?](http://www.swedishcoding.com/2008/08/31/are-we-out-of-memory/)

* **Implementation**
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
* [*Multiplayer Game Programming*](https://www.amazon.com/Multiplayer-Game-Programming-Architecting-Networked/dp/0134034309)
    * *Ch. 6, Network Topologies and Sample Games* covers how to build out an application layer for your game networking
* UDP Sockets
    * [Rutgers - Programming with UDP sockets](https://www.cs.rutgers.edu/~pxk/417/notes/sockets/udp.html)
    * Sample [`BroadcastSender.c`](http://cs.ecs.baylor.edu/~donahoo/practical/CSockets/code/BroadcastSender.c) and [`BroadcastReceiver.c`](http://cs.ecs.baylor.edu/~donahoo/practical/CSockets/code/BroadcastReceiver.c)


## Serialization / Reflection
* [A C++ 11 Reflection and Serialization library on Github](https://github.com/simonask/reflect)
* [A practical guide to C++ Serialization (use Boost)](http://www.ocoudert.com/blog/2011/07/09/a-practical-guide-to-c-serialization/)
* [Serialization and Unserialization (ISO C++)](https://isocpp.org/wiki/faq/serialization)
* [Boost Serialization (Requirements and Other Solutions)](https://www.boost.org/doc/libs/1_36_0/libs/serialization/doc/index.html)
* [C++ Meta-Serialization](https://eliasdaler.github.io/meta-stuff/)
* [s11n - Serialization Library](http://www.s11n.net/)
* [Eternity - Serialization Library](https://sourceforge.net/projects/eternity-it/)
* [Cereal - Serialization Library](https://github.com/USCiLab/cereal)


## Sound
* [Unreal Audio System Overview](https://docs.unrealengine.com/en-US/Engine/Audio/Overview)
* [Demystifying Audio Middleware](https://www.somatone.com/demystifying-audio-middleware/)
* [FMOD API Overview](https://www.fmod.com/resources/documentation-api?page=content/generated/common/lowlevel_introduction.html#configuration)
* *Game Engine Architecture 2nd edition* - Chapter 13: Audio


## String Hashing
* [A StringID Library on Github](https://github.com/TheAllenChou/string-id)
* [Practical Hash IDs](http://cowboyprogramming.com/2007/01/04/practical-hash-ids/)
* [Minial perfect hashing for game assets](https://metricpanda.com/rival-fortress-update-24-minimal-perfect-hash-for-game-assets)
* [Preprocessed strings for asset ids](http://www.randygaul.net/2015/12/11/preprocessed-strings-for-asset-ids/)
* [Hash Tables - Introduction ](http://cecilsunkure.blogspot.com/2012/07/hash-tables.html)

## Scene Graph
* Transform:
    * *Game Engine Architecture 2nd edition* - Chapter 4: 3D Math for Games
    * *Mathematics for 3D Game Programming and Computer Graphics 3rd edition* - Chapter 2-4
    * [Godot Engine - Using transforms](http://docs.godotengine.org/en/3.0/tutorials/3d/using_transforms.html)
    * [Unity API - transform](https://docs.unity3d.com/ScriptReference/Transform.html)
    * [Unreal’s FTransform class](https://api.unrealengine.com/INT/API/Runtime/Core/Math/FTransform/index.html)
    * [YouTube - Gimbal Lock Explained](https://youtu.be/zc8b2Jo7mno)


## Visual Studio
* [Common Macros for Build Commands](https://msdn.microsoft.com/en-us/library/c02as0cs.aspx)


## Misc.
* [In-house Engine Development: Process Tips](https://johanneskuhlmann.de/blog/in-house-engine-development-process-tips/)
* [In-house Engine Development: Technical Tips](https://johanneskuhlmann.de/blog/in-house-engine-development-technical-tips/)

* [Deriving objects from stings](https://stackoverflow.com/questions/582331/is-there-a-way-to-instantiate-objects-from-a-string-holding-their-class-name)
* [String Interning - Useful Properties & Github Repo](https://alexpolt.github.io/intern.html)
* [Fast C++ Logging Library](https://github.com/gabime/spdlog)
* [Stanford CS101 - Bits and Bytes](https://web.stanford.edu/class/cs101/bits-bytes.html)
* [Microsoft Docs - Walkthrough: Create and use your own Dynamic Link Library (C++)](https://docs.microsoft.com/en-us/cpp/build/walkthrough-creating-and-using-a-dynamic-link-library-cpp?view=vs-2017)

## Misc. C++
* [LearnC++ — Overloading the comparison operators](https://www.learncpp.com/cpp-tutorial/96-overloading-the-comparison-operators/)
* [Cppreference - Array Initialization](https://en.cppreference.com/w/c/language/array_initialization)
* [Cppreference - Priority Queue](https://en.cppreference.com/w/cpp/container/priority_queue)
* [Cppreference - Parameter pack](https://en.cppreference.com/w/cpp/language/parameter_pack)
* [Cppreference - Constraints and concepts](https://en.cppreference.com/w/cpp/language/constraints)
* [StackOverflow - Why is `inline` required on static inline variables?](https://stackoverflow.com/
questions/46874055/why-is-inline-required-on-static-inline-variables)
* [StackOverflow - How are C++11 lambdas represented and passed?](https://stackoverflow.com/questions/16921247/how-are-c11-lambdas-represented-and-passed)
* [Variadic Templates](https://en.cppreference.com/w/cpp/language/parameter_pack)
* [Eli Bendersky's Blog - Variadic templates in C++](https://eli.thegreenplace.net/2014/variadic-templates-in-c/)
* [Bartek's coding blog - Factory With Self-Registering Types](https://www.bfilipek.com/2018/02/factory-selfregister.html#templates): We referenced this article we designing our level auto registration system.
