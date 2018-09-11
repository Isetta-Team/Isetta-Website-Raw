# Resources

*This page is always updating to include more resources*

Useful articles/resources we used during the development of Isetta



## String Hashing
* [A StringID Library on Github](https://github.com/TheAllenChou/string-id)
* [Practical Hash IDs](http://cowboyprogramming.com/2007/01/04/practical-hash-ids/)
* [Minial perfect hashing for game assets](https://metricpanda.com/rival-fortress-update-24-minimal-perfect-hash-for-game-assets)
* [Preprocessed strings for asset ids](http://www.randygaul.net/2015/12/11/preprocessed-strings-for-asset-ids/)
* [Hash Tables - Introduction ](http://cecilsunkure.blogspot.com/2012/07/hash-tables.html)


## Sound
* [Unreal Audio System Overview](https://docs.unrealengine.com/en-US/Engine/Audio/Overview)
* [Demystifying Audio Middleware](https://www.somatone.com/demystifying-audio-middleware/)
* [FMOD API Overview](https://www.fmod.com/resources/documentation-api?page=content/generated/common/lowlevel_introduction.html#configuration)
* The Game Engine Architecture's chapter 13 on Audio



## Memory
* Introduction
	* *Game Engine Architecture*: Section 3.2.5.1 Alignment and Packing
	* [Gamesutra - Writing a Game Engine from Scratch Part2: Memory](https://www.gamasutra.com/blogs/MichaelKissner/20151104/258271/Writing_a_Game_Engine_from_Scratch__Part_2_Memory.php): Also covers modern CPU memory access patterns.
	* [Are we out of memory?](http://www.swedishcoding.com/2008/08/31/are-we-out-of-memory/)
	* **TODO** [Gallery of Processor Cache Effects](http://igoro.com/archive/gallery-of-processor-cache-effects/)
* Implementation
	* [IBM - Building your own memory manager for C/C++ projects](https://www.ibm.com/developerworks/aix/tutorials/au-memorymanager/index.html)
	* [new and delete operators in C++](https://www.geeksforgeeks.org/new-and-delete-operators-in-cpp-for-dynamic-memory/)
	* [Use the Memory Windows in the Visual Studio Debugger](https://docs.microsoft.com/en-us/visualstudio/debugger/memory-windows?view=vs-2017)
	* [Memory Patterns in Visual Studio](https://stackoverflow.com/questions/127386/in-visual-studio-c-what-are-the-memory-allocation-representations)
	* [C++ Casting, or: "Oh No, They Broke Malloc!"](https://embeddedartistry.com/blog/2017/2/28/c-casting-or-oh-no-we-broke-malloc): On different types of casts (`static_cast`, `reinterpret_cast`, `const_cast`, `dynamic_cast`, C-style casts) in C++ and when you should use them. `reinterpret_cast` is especially important as we will need to cast `uintptr_t` to actual pointers a lot.
	* [ISO C++ FAQ: Is there a way to force new to allocate memory from a specific memory area?](https://isocpp.org/wiki/faq/dtors#memory-pools)
	* [ISO C++ FAQ on Memory Management](https://isocpp.org/wiki/faq/freestore-mgmt)
	* [How does delete[] “know” the size of the operand array?](https://stackoverflow.com/questions/197675/how-does-delete-know-the-size-of-the-operand-array)

* [Latency Numbers Every Programmer Should Know](https://gist.github.com/jboner/2841832)









## Networking
* [Gaffer On Games - Game Networking](https://gafferongames.com/categories/game-networking/)
## Serialization / Reflection
* [A C++ 11 Reflection and Serialization library on Github](https://github.com/simonask/reflect)


## Misc.
* [Everything about unordered_map](https://codeforces.com/blog/entry/21853)
* [unordered_map cppreference](https://en.cppreference.com/w/cpp/container/unordered_map)
* [Data Structures in Games](http://enemyhideout.com/2016/05/games-101-data-structures-in-games/)
* The Game Engine Architecture's chapter 5.3 on containers
* [An Introduction to Modern CMake](https://cliutils.gitlab.io/modern-cmake/)
* [IN-HOUSE ENGINE DEVELOPMENT: PROCESS TIPS](https://johanneskuhlmann.de/blog/in-house-engine-development-process-tips/)
* [IN-HOUSE ENGINE DEVELOPMENT: TECHNICAL TIPS](https://johanneskuhlmann.de/blog/in-house-engine-development-technical-tips/)
* [When should static_cast, dynamic_cast, const_cast and reinterpret_cast be used?](https://stackoverflow.com/questions/332030/when-should-static-cast-dynamic-cast-const-cast-and-reinterpret-cast-be-used)
