# Glossary of All Footnote Terms

<!--
Whenever you are going to footnote something, look in here and copy over the definition so we can keep it consistent throughout the blogs/interviews. 

Also, please add any terms we haven't touched on that you think of!
-->

**.geo files**- Horde3D's processed file for model and animations, optimized for more efficient rendering. The file is processed through the Horde3DUtil library and done prior to runtime. [↩](/blogs/week-6/#fnref:4533)

**A\***- pronounced "A star", this is an algorithm that is widely used in pathfinding and graph traversal. It is an extension of Dijkstra's algorithm that also uses heuristics to guide its search for better performance. [↩](/blogs/week-11/#fnref:558694)

**Airlock**- in games, this refers to an area in which loading of the next chunk/section of the map is being performed. Within this zone the next and previous sections can both be in memory, or with limited memory only the next is being loaded into memory. In the first case the player can enter both the previous and next zones (once loading completes), however in the latter the player can neither advance or backtrack their game's progress while the loading happens. [↩](/interviews/ElanRuskin-interview/#fnref:10)

**Allocator**- a data structure that encapsulates memory management and doles out memory on request. There are different types of allocators based on the needs (amount and lifetime) of the memory. [↩](/interviews/ElanRuskin-interview/#fnref:7)

**Animation-blended system**- a graph of multiple animations and transitions from an animation to another, i.e., a idle animation to a walking animation, and the blend system is how the animations are "mixed" together. It extrapolates from the starting animation to the ending animation. [↩](/interviews/AdamSerdar-interview/#fnref:2)

**Application context**- the context, the set of data required to interrupt and continue a task,  of an application. [↩](/interviews/MartinMiddleton-interview/#fnref:16)

**Asynchronous**- typically associated with parallel programming, this is when a task runs and completes separately from the main application/thread. [↩](/blogs/week-9/#fnref:76)

**Audio renderer**- a system which plays/outputs spatialized sound, sound that is positioned in the world. [↩](/interviews/MartinMiddleton-interview/#fnref:17)

**Autodesk 3ds Max**- formerly 3D Studio and 3D Studio Max, is a professional 3D computer graphics program for making 3D animations, models, games, and images. [↩](/interviews/ArasPranckevicius-interview/#fnref:11)

**BINK**- the defacto video codec for games created by Rad Tools.[↩](/interviews/TommyRefenes-interview/#fnref:519)

**Backface culling**- the technique of performing visibility checks on a mesh to not render the back face (face not facing the camera). [↩](/interviews/TommyRefenes-interview/#fnref:789)

**Batching**- when many instances of graphics data are bundled together and handled by the GPU in a single draw call operation. Issuing draw calls can be expensive, so batching is a good technique to speed up a renderer. [↩](/interviews/RaymondGraham-interview/#fnref:93)

**Big O notation**- a mathematical notation that describes the limiting behavior of a function when its argument approaches a value, typically infinity. It's usually used to evaluate the performance of an algorithm. [↩](/blogs/week-9/#fnref:283892)

**Binary files**- files stored in binary format, a format that is easily computer-readable but not really human readable. These are more compact in size than human readable files. [↩](/interviews/ElanRuskin-interview/#fnref:2)

**Binary size**- the size of the binary files built from source code and other assets. [↩](/interviews/ShaneeNishry-interview/#fnref:1)

**BitSquid**-  more modernly known as Autodesk Stingray, is a discontinued game engine from Stockholm, Sweden. End of sale was announced for January 7, 2018, and afterward it became a plugin for Autodesk 3DS Max known as 3DS Max Interactive. [↩](/interviews/AmandineCoget-interview/#fnref:284972)

**Blender**- an open-source 3D computer graphics software used in creating 3D models, animations, and interactive applications. [↩](/interviews/JeffPreshing-interview/#fnref:1)

**Boilerplate code**-  a section of code that has to be included in many places with little to no alteration. [↩](/blogs/week-7/#fnref:3954920)

**Box2D**- an open source C++ engine for simulating rigid bodies in 2D. Box2D is developed by Erin Catto and has the zlib license. [↩](/interviews/TommyRefenes-interview/#fnref:3125) 

**Branching**- hen the processor needs to evaluate something in order to determine what code to run next. It tends to be very wasteful of processing time because of the typical [instruction pipeline](https://en.wikipedia.org/wiki/Instruction_pipelining) on a computer.

**Breadth-first search (BFS)**- an algorithm for traversing or searching tree or graph data structures; it starts at the tree root and explores all neighbor nodes before looking at children nodes. [↩](/blogs/week-11/#fnref:489392)

**Broad-phase detection**- a physics simulation phase performed by constructing a tree of simple primitives (either sphere or box) where the complex collider shapes are simplified into these shapes. Then iterating through these checks to determine if the simple shapes are colliding (this is a quicker calculation). The **narrow-phase** happens after the broad phase by checking the exact shape of the collider which are typically more complex shapes, such as capsules and object-bounding boxes (obb). [↩](/blogs/week-8/#fnref:65)

**Build engineer**- the engineer in charge of the infrastructure that builds a software application, as well as testing and troubleshooting code for before the software's release.[↩](/interviews/CaseyMuratori-interview/#fnref:500)

**Builder**- a tool used to process assets from their editable forms (files editable by external software) into a more compact, unreadable file to be used by the engine for a game. The file format is typically proprietary and specific to the engine, and engine metadata is stored within the file. [↩](/interviews/ElanRuskin-interview/#fnref:1)

**Bullet Physics**- a real-time physics simulation library, a physics engine, which simulate collisions for soft and rigid body dynamics. [↩](/interviews/JeffPreshing-interview/#fnref:5)

**CDLOD**- short for the [paper](https://github.com/fstrugar/CDLOD/blob/master/cdlod_paper_latest.pdf) titled Continuous Distance-Dependent Level of Detail Rendering Heightmaps. It describes a technique for GPU-based rendering of heightmap terrains. [↩](/interviews/ShaneeNishry-interview/#fnref:40)

**CMake**- a cross-platform, open-source application for managing the build process of software in a compiler-independent way. [↩](/interviews/CaseyMuratori-interview/#fnref:400) [↩](/interviews/JeffPreshing-interview/#fnref:7)

**Call stack**- a stack data structure that stores the information about the active routines of a computer. It can be walked up/down into the callee functions and function definitions, respectively. [↩](/interviews/JeffPreshing-interview/#fnref:9)

**Casey Muratori**- a game engine developer and creator of [Handmade Hero](https://handmadehero.org/), a web series documenting his efforts in building a game engine from scratch. We interviewed him as part of this project, and his interview can currently be found [here](interviews/CaseyMuratori-hmh-video/). [↩](/blogs/week-2/#fnref:6)

**Client-server model**- in networking where there is one central server that all other machines (the "clients") connect to. This server is typically the authority on all important and possibly conflicting information. [↩](/blogs/week-3/#fnref:909281)

**Cocoa**- Apple's native object-oriented API for macOS. [↩](/interviews/ArasPranckevicius-interview/#fnref:1)

**Compute shader**- a shader stage that is used entirely for computing arbitrary information. While it can do rendering, it is generally used for tasks not directly related to drawing triangles and pixels.  [↩](/interviews/RaymondGraham-interview/#fnref:971221)

**Construct On-Demand Technique**- in the context of the [singleton pattern](http://gameprogrammingpatterns.com/singleton.html), this means that the single instance is only constructed when first requested. We can utilize this nature to control initialization order by manually invoking the getter for the singletons in the right order. [↩](/blogs/week-1/#fnref:2)

**Core render loop**- the loop where the rendering function is called. The way the rendering occurs/is called varies from engine to engine, but is usually performed at the end of the main game loop. [↩](/interviews/AdamSerdar-interview/#fnref:9)

**Core**- refers to a CPU in a multi-core processor, it is one of the processing units in the single computing component that read and execute machine instructions. [↩](/interviews/AdamSerdar-interview/#fnref:3)

**Cross product**- the 3D math operation where the input is two vectors and the output is one vector that's perpendicular to both input vectors. However, the direction of the output vector depends on whether the space is defined as left handed or right handed.[↩](/interviews/CaseyMuratori-interview/#fnref:301)

**Culling**- the early rejection of objects being passed through the render pipeline, because they don't contribute to the final image. [↩](/blogs/week-6/#fnref:49)

**DLL**- a dynamic-linked library which is Microsoft shared library concept which can be transported around easier than a project and contains information about the compiled project. [↩](/blogs/engine-architecture/#fnref:1)

**Data locality**- essentially accessing data in as nearby of code as possible to utilize caches most effectively. Robert Nystrom covers it really well in this chapter from [Game Programming Patterns](http://gameprogrammingpatterns.com/data-locality.html). [↩](/blogs/week-5/#fnref:32402) 

**Defragmentation**- the process of reducing fragmentation, where **fragmentation** is where memory is used inefficiently with lots of gaps in between used memory chunks. In this context, defragmentation is used in the sense of keeping the rooms fully utilized, not wasting space on a fairly empty room. [↩](/interviews/MartinMiddleton-interview/#fnref:11) [↩](/blogs/week-2/#fnref:2)

**Delimiter**- a sequence of one or more characters used to specify the boundary between separate regions in text or other data streams. An example would be the comma character for comma-separated values. [↩](/blogs/week-9/#fnref:230495)

**Dependencies**- links that are required between programs, such that one program is reliant on another. [↩](/interviews/JeffPreshing-interview/#fnref:6)

**Dependency injection**- a technique where one object supplies the dependencies of another object. A dependency is something that one object needs to run correctly, and injection is the process of passing one object to another. [↩](/interviews/ShaneeNishry-interview/#fnref:2)

**Depth culling**- the process of deciding which elements to render based on the distance from the camera and if it is being hidden by another element. [↩](/interviews/TommyRefenes-interview/#fnref:32)

**Depth peeling**- a method of order-independent transparency when rendering 3D geometry. It determines what should be drawn on top by rendering multiple passes of a scene and comparing depths.[↩](/interviews/CaseyMuratori-interview/#fnref:988)

**Deterministic behaviour**-  a process whose resulting state is determined by the initial state and inputs. It is heavily reliant on having a fixed-time so each step is performing the same amount of "work". [↩](/blogs/week-5/#fnref:877)

**Dijkstra's algorithm**- an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It's most common variant finds the shortest path by accumulating distances between node pairs in the path. [↩](/blogs/week-11/#fnref:4848392)

**Direct memory access (DMA)**- a technique of computer systems that allows certain hardware subsystems to access main system memory without taking up the CPU cycles. [↩](/interviews/RaymondGraham-interview/#fnref:8833)

**DirectX**- a collection of application programming interfaces (APIs) for handling tasks related to multimedia, especially game programming, on Microsoft platforms, like Windows and Xbox. It is most known for Direct3D which is the graphics API used for creating windows and rendering, and serves similar purposes as OpenGL. [↩](/interviews/MartinMiddleton-interview/#fnref:15)

**Disassembly**- the assembly language, translated from machine code, of a program; it is the compiler's version of the program. [↩](/interviews/JeffPreshing-interview/#fnref:8)

**Disk I/O**- read or write operations involving a physical disk. In general, to load an asset from the disk, the system will need to read it from the hard disk, write it into the memory (and possibly cache), which takes a lot of time. [↩](/interviews/RaymondGraham-interview/#fnref:8383)

**Double buffer**- the use of two buffers to hold data. By switching the buffers, the reader can see the complete version of data instead of a partially written one. [↩](/interviews/RaymondGraham-interview/#fnref:9955)

**Draw call**- a command from CPU to GPU that contains all the information encapsulated by CPU about textures, states, shaders, rendering objects, buffers, etc. [↩](/interviews/RaymondGraham-interview/#fnref:9583)

**Dynamic memory pools**- pools in which memory sizes are determined during runtime, and are changing per allocation rather than being fixed for all. [↩](/interviews/ElanRuskin-interview/#fnref:5)

**Element buffers**- hold additional information regarding the vertices, specifically what index the pertinent information is located within the vertex array. [↩](/blogs/week-6/#fnref:39)

**Engine abstraction**- the part of the engine code which depends on the hardware/software platform that the engine runs on and will be different on each platform. For example, the code that talks to the operating system on macOS will be different from that on Windows. Engine developers usually tackle this problem by having an abstraction layer on top of operating system code. So the code above that layer still looks the same when you swap out the underlying operating system. [↩](/interviews/TommyRefenes-interview/#fnref:2)

**Entity-Component-System (ECS)** is an architectural pattern that follows composition over inheritance principle and is mostly used in games. [↩](/interviews/RaymondGraham-interview/#fnref:234) [↩](/interviews/MartinMiddleton-interview/#fnref:3) [↩](/blogs/week-1/#fnref:3)

**FBX**- a proprietary file format owned by Autodesk that is mostly commonly used for 3D model and animation data within the games industry. [↩](/interviews/ArasPranckevicius-interview/#fnref:12)

**FLA**- the file format for projects created by Adobe Animate, and can contain graphics, video, text, audio, and more. They are often saved as SWF files to be used on the web. [↩](/interviews/TommyRefenes-interview/#fnref:38927)

**FMOD**- a a cross platform audio engine and authoring tool used throughout the game industry. It was used by over 2,000 games in the last 15 years.[↩](/interviews/TommyRefenes-interview/#fnref:743)

**Fill rate**-  the number of pixels a video card can read/write to the screen per second. [↩](/interviews/TommyRefenes-interview/#fnref:444)

**findstr**- a command for the Windows command prompt that searches files for a specified string, it has additional options for printing file names and line numbers among other options. [↩](/blogs/week-12/#fnref:1)

**Fixed memory pools**- a data structure for dynamic allocation of fixed block-size memory chunks. [↩](/interviews/ElanRuskin-interview/#fnref:4)

**Frame buffers**- a portion of RAM containing a bitmap of the display, containing the data for that given frame on the video display. [↩](/interviews/JeffPreshing-interview/#fnref:14)

**Free list**- a memory management data structure that uses a linked list which points to successive free regions of memory that can be utilized for allocation individually.[↩](/blogs/week-4/#fn:24920)

**Frostbite**- EA's proprietary game engine used across most of their studios. [↩](/interviews/AmandineCoget-interview/#fnref:134)

**Frustum**- the portion of the world which is viewable by a camera. It is typically shaped like a pyramid with near and far planes clipping the volume. What is rendered is the volume between the 2 planes. [↩](/blogs/week-6/#fnref:324)

**Function templates**- functions definitions that, at compile time, generate individual function definitions for any types used with the template. This can be very useful for cutting out duplicate code, but greatly increases compile time and code size. [↩](/blogs/week-7/#fnref:290252)

**Function pointer**- a 4/8 byte pointer, depending on your computer architecture, that points to a virtual table holding a reference to a function; instead of pointing to a variable the pointer points to a function. [↩](/blogs/week-9/#fnref:39)

**GLFW**- a library utility for creating windows and receiving input from the window. [↩](/blogs/week-3/#fnref:8987)

**Game development kit (devkit)**- hardware different from the commercially available version of the hardware, specialized for development. It will have a way of booting with a development version of the game, and modern developer kits have debugging features for the developers. [↩](/interviews/ElanRuskin-interview/#fnref:11)

**Geometry instancing**- the practice of rendering multiple copies of the same mesh in a scene at once. This technique is primarily used for objects such as trees, grass, or buildings which can be represented as repeated geometry without appearing unduly repetitive. [↩](/interviews/ShaneeNishry-interview/#fnref:98)

**Gilbert-Johnson-Keerthi (GJK)**- a distance algorithm method of determing the minimum distance between convex sets. It is used heavily in collision detection systems. [Casey Muratori](https://twitter.com/cmuratori?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) has a great blog on [Implementing GJK](https://caseymuratori.com/blog_0003). [↩](/blogs/week-8/#fnref:1324)

**glTF(GL Transmission Format)**- a royalty-free file format for 3D scenes and models using the JSON standard. [↩](/interviews/ArasPranckevicius-interview/#fnref:13)

**Goal-oriented action planner (GOAP)**- an artificial intelligence system for agents that allows them to plan a sequence of actions to satisfy a particular goal. For a detailed explanation, visit [http://alumni.media.mit.edu/~jorkin/goap.html](http://alumni.media.mit.edu/~jorkin/goap.html)  [↩](/interviews/ShaneeNishry-interview/#fnref:85)

**grep**- a command for a Linux command line that will search specific files for a regular expression or string. When compared with Window's `findstr` it is much more flexible in its capabilities. [↩](/blogs/week-8/#fnref:239402) [↩](/blogs/week-12/#fnref:2)

**Handshake** in networking is an automated negotiation process for creating a connection between two machines, typically a client and a server. The process requires the machines to exchange special packets before the connection can be established. [↩](/blogs/week-3/#fnref:909283)

**Hash**- a structure that maps keys to values through a formula defined to convert structures into an index, typically the formula is constructed to avoid collisions between similar objects. The hash of the same object will always return the same value. [↩](/interviews/MartinMiddleton-interview/#fnref:10)

**Heads-up display (HUD)**- overlay on the screen that presents important information to the player. [↩](/interviews/AmandineCoget-interview/#fnref:135)

**Heightmap**- a texture (rasterized image) where pixels have different meaning rather than representing color. One common usage of heightmap is to store surface elevation data. [↩](/interviews/ShaneeNishry-interview/#fnref:3)

**Heuristic**- a technique for solving a problem more quickly, often utilized in optimization problems for computer science. [↩](/blogs/week-7/#fnref:3829) [↩](/blogs/week-9/#fnref:83)

**Homogenous coordinates**- differentiate points from vectors by expanding the traditional Vector3 to a Vector4 and placing a 0 in the 4th element for vectors and 1 in the 4th element for points. [↩](/blogs/week-6/#fnref:932)

**IMGUI**- stands for immediate mode GUI which is a code-driven GUI system where on each rendering frame the application needs to issue the draw commands of the GUI (the GUI is not stored for multiple frames) [↩](/interviews/AmandineCoget-interview/#fnref:1024)

**Intellisense**- an intelligent code completion feature in Microsoft Visual Studio that is capable of detailing information about the code and objects that the programmer is working with while coding. [↩](/interviews/AmandineCoget-interview/#fnref:83838392) [↩](/blogs/week-12/#fnref:8152)

**Internet Protocol version 4 (IPv4)**- the fourth version of the Internet Protocol (IP). It is one of the core protocols of standards-based internetworking methods in the Internet, and does not guarantee delivery or proper sequencing. [↩](/blogs/week-11/#fnref:39042)

**JAI**- a language being developed by Jonathan Blow and his team at Thekla to address some of the issues game developers have with the current industry standard, C++. [↩](/interviews/TommyRefenes-interview/#fnref:654)

**JavaScript Object Notation (JSON)**- a lightweight data-interchange format that can be used for a database. It features a set of syntax that's both easy for human to understand and for machine to parse. [↩](/interviews/ShaneeNishry-interview/#fnref:50)

**Job control**- the control of multiple tasks on a computer system that may be "in-flight" at the same time. It requires proper allocation of resources and locked access to prevent deadlocks and failures.[↩](/interviews/CaseyMuratori-interview/#fnref:666)

**Key-value map**- an abstract data type composed of a collection of (key, value) pairs. [↩](/blogs/week-8/#fnref:8383)

**Least Recently Used cache scheme**- a strategy for evicting data from a memory cache based on how recently the data has been accessed. [↩](/interviews/ShaneeNishry-interview/#fnref:10)

**Level scene graph**- the scene graph corresponding to a level, similar to a level configuration file. It will contain the information (transformation, behavior, whether it is static, etc.) about the starting game objects. [↩](/blogs/engine-architecture/#fnref:7)

**Level of detail (LOD)**- the process of simplifying a model/mesh by removing vertices and detail. This typically occurs when the model is far enough such that the details are relatively insignificant compared to others in the viewport. [↩](/interviews/MartinMiddleton-interview/#fnref:6)

**Linter**- a tool that flags code for errors, bugs, stylistic errors, and suspicious constructs. [↩](/blogs/week-1/#fnref:1)

**Localhost**- an address in networking specifically, 127.0.0.1. Packets that are sent here are not technically sent anywhere, they're just sent up to the next layer for processing. [↩](/blogs/week-3/#fnref:535362)

**Macros**-  a way of automatically substituting text for some other during the compiling process. In C++, they are defined as #define TEXT_IN_CODE TEXT_TO_COPY OVER. For example, if you define #define SPEED 5 and write mySpeed = SPEED, SPEED will be substituted by 5 during compile time and the compiler will actually see mySpeed = 5. [↩](/blogs/week-6/#fnref:1238)

**Messaging buffer**- a stream of pixel data, typically as four floating point numbers or integers representing red, green, blue, and opacity/alpha. [↩](/blogs/week-5/#fnref:838383)

**Metal**- a low-level, low-overhead hardware-accelerated 3D graphic and compute shader application programming interface (API) developed by Apple Inc. [↩](/interviews/RaymondGraham-interview/#fnref:8395)

**Microsoft Foundation Class Library**- an object-oriented C++ library that contains useful macros for exceptions, run-time type identification, serialization, and more. 

**Microsoft Visual C++ (MSVC)**- an integrated development environment (IDE) for writing and debugging C and C++ programming languages. [↩](/blogs/week-10/#fnref:3721)

**Model-view matrix**- the matrix which transforms a position in local space to world space, then to camera space. [↩](/blogs/week-6/#fnref:440)

**MonoBehaviour**- the base class within Unity that all components which attach to `GameObject` must derive from, it has methods for start, update, and destroy, among a ton of others. [↩](/interviews/AdamSerdar-interview/#fnref:0) [↩](/interviews/MartinMiddleton-interview/#fnref:4)

**Network authority**- when a certain machine, typically the server, has the control (final decision) on the state of a variable/script/entity. [↩](/interviews/MartinMiddleton-interview/#fnref:9)

**Ninja**- a small build system that is designed to run builds as fast as possible.[↩](/interviews/CaseyMuratori-interview/#fnref:401)

**Node-based**- when an interface is visual with components, "boxes", that are connected to each other with outputs connected to inputs. A node-based shader system means a shader is edited through nodes. [↩](/interviews/AdamSerdar-interview/#fnref:5)

**Not A Number (NaN)**- a numeric data type value that represents an undefined or unrepresentable value, especially in floating-point calculations. [↩](/blogs/week-9/#fnref:234892)

**OSI**- Open System Interconnection and is a standard for networking layers. [↩](/blogs/week-3/#fnref:784)

**Object composition**- in Object Oriented Programming, this is a way to combine simple objects or data types into more complex ones. The Component pattern in Game Programming Patterns book describes this in detail. [↩](/blogs/week-6/#fnref:90865)

**Object factory**- a programming pattern where you decouple object creation and destruction with the actual usage of the object. An object factory typically creates objects based on passed parameters, which you would then receive and use. [↩](/blogs/week-7/#fnref:28392)

**Open Dynamic Engine (ODE)**- a free and open source physics engine written in C/C++ that can do both rigid body dynamics simulation and collision detection. [↩](/interviews/ArasPranckevicius-interview/#fnref:14)

**Open world streaming**- the the process of "streaming" (loading) the world/map (sections of the world) into memory while the player moves throughout the world. While the player moves the game decides which section of the map should be loaded into memory, the engine needs to manage memory and framerate during these times of loading. [↩](/interviews/ElanRuskin-interview/#fnref:8)

**OpenAL**- an audio library used for games, although it contains the word open it actually isn't open-sourced. Its open-source counterpart is OpenALSoft. [↩](/interviews/AdamSerdar-interview/#fnref:7)

**OpenGL Mathematics (GLM)**- a mathematics library based off of OpenGL specifications, that contains definitions for typical math constructs used in graphics. [↩](/interviews/JeffPreshing-interview/#fnref:4)

**OpenGL**- short for Open Graphics Library - a cross-language, cross-platform application programming interface (API) for rendering 2D and 3D vector graphics. The API is typically used to interact with a graphics processing unit (GPU), to achieve hardware-accelerated rendering. It's the underlying rendering library for many modern game engines.[↩](/interviews/TommyRefenes-interview/#fnref:3) [↩](/interviews/MartinMiddleton-interview/#fnref:14) [↩](/blogs/week-6/#fnref:85213)

**Oracle**- a computer technology corporation headquartered in Redwood Shores, California, who acquired Java from Sun Microsystems and is now maintaining it. 

**Packet queue**- a queue of packets, which are small chunks of an original, bigger message. These are sent out in-batch because of packet size limitations over internet networks. [↩](/blogs/week-5/#fnref:34902)

**Packet**- formatted data that is sent over a network. Virtual objects are serialized and broken into these small chunks before being sent, and different protocols expect different formats for packets. [↩](/blogs/week-3/#fnref:483920)

**Panda3D**- a game engine, a framework for 3D rendering and game development for Python and C++ programs. It was originally developed by Disney and expanded by past ETC projects. [↩](/interviews/AdamSerdar-interview/#fnref:8)

**Parallel programming**- when code can be run on multiple threads rather than a linear process, therefore speeding up the execution. A **parallel algorithm** is an algorithm that can be executed as multiple pieces at a time, being split among multiple threads, then joined at the end to get the result. [↩](/blogs/week-9/#fnref:832)

**Path tracing**- a realistic lighting algorithm that simulates light bouncing around a scene. It uses the Monte Carlo method to give a faithful rendition of the global illumination of the scene. [↩](/interviews/ArasPranckevicius-interview/#fnref:23421) 

**Peer-to-peer networking**- where every machine communicates with one another, which requires more bandwidth per client and more complex data authority handling but avoids needing a dedicated server. Peer-to-peer is generally harder to implement than client-server. [↩](/interviews/MartinMiddleton-interview/#fnref:8) [↩](/blogs/week-3/#fnref:909282)

**Persistent game data**- Jason Gregory refers to this as "LSR" data, Load-and-Stay-Resident, as seen in _Game Engine Architecture_section 15.4.2_ [↩](/blogs/week-2/#fnref:1)

**PhyreEngine**- Sony's game engine that is freely available for PlayStation developers. The engine is compatible with the PlayStation platforms of the last decade. [↩](/interviews/MartinMiddleton-interview/#fnref:2)

**Physics solver**- a physics engine for games usually consists of two parts: collision detection and collision resolution, and solver refers to the resolution part. Collision detection detects what objects collide with each other first, and then the solver determines their correct physical response, like position, rotation, velocity, etc. [↩](/interviews/TommyRefenes-interview/#fnref:3126)

**PhysX**- NVIDIA's real-time physics engine used by most commercially available game engines such as Unity, Unreal, and Lumberyard. [↩](/blogs/engine-architecture/#fnref:5)

**Pivot**-  the local position of the model which is the zero position. When transforming the model in the world space, all changes are relative to this point. An offset pivot is when the pivot is placed in a position that isn't about the model, for example offset in X=100 from the model. [↩](/blogs/week-6/#fnref:587)

**Pixel stream**-  a stream of pixel data, typically as four floating point numbers or integers representing red, green, blue, and opacity/alpha. [↩](/blogs/week-5/#fnref:838383)

**Platform-dependent**- code refers to application code that is dependent on one operating system, and typically won't run on multiple. [↩](/interviews/TommyRefenes-interview/#fnref:301)

**Programmable shader pipeline**- allows the developer to customize some phases in the render pipeline (mostly the vertex processing phase and the fragment shader phase). It was introduced by OpenGL 3.2 in 2009. [↩](/interviews/RaymondGraham-interview/#fnref:1221)

**Protocol**- a specific implementation of a layer of the network stack. [↩](/interviews/MartinMiddleton-interview/#fnref:12)

**Qt**-  a framework for creating retained GUI applications. [↩](/blogs/week-6/#fnref:97) 

**Quadtree**- a special type of tree data structure used in spatial partitioning. It recursively divides the whole space into four quads of the same size, and keeps doing it until each leaf quad contains a certain amount of actual spatial units (like polygons when used for rendering, and colliders when used for collision detection). If you are interested in learning more, refer to the Spatial Partitioning chapter in _Game Programming Patterns._ [↩](/interviews/ShaneeNishry-interview/#fnref:30)

**Ray tracing**- a rendering technique for generating an image by tracing the path of light as pixels in an image plane and simulating the effects of its encounters with virtual objects. [↩](/interviews/RaymondGraham-interview/#fnref:9712)

**Regression testing**- the process of testing changes in software to make sure functionality is not broken when updating the software. [↩](/blogs/week-5/#fnref:3902832) 

**Remote procedure call (RPC)**- a function that can be called on a computer by another computer across a network. [↩](/blogs/week-9/#fnref:13425)

**Render paths**- programs to affect the shading/rendering of lighting and shadow fidelity, along with other graphic details, with different performance characteristics. [↩](/interviews/RaymondGraham-interview/#fnref:049)

**RenderWare**-  a game engine by Criterion Software that launched in 1993 and continued to regularly support games through 2010. It was known for providing an off-the-shelf solution to the difficulties of PS2 graphics programming. [↩](/interviews/ArasPranckevicius-interview/#fnref:10)

**Retained GUI**-  also known as canvas/scene graph, is where GUI is registered once and is displayed, "retained", on screen until it removes itself from rendering. [↩](/interviews/AmandineCoget-interview/#fnref:1025)

**Retro compatibility**-  also known as backwards compatibility, is when a system is setup such that it works with legacy code/input. [↩](/interviews/AmandineCoget-interview/#fnref:53)

**Ring buffer**- (or [circular buffer](https://en.wikipedia.org/wiki/Circular_buffer)) is a FIFO data structure which is broadly used for transmitting data between asynchronous processes. [↩](/blogs/week-3/#fnref:8383)

**Run-length encoding**-  a form of lossless data compression where data is stored as a single data value and count. [↩](/interviews/TommyRefenes-interview/#fnref:21)

**Run-time type information/identification (RTTI)**- in C++, this is information about an object's type that is available at runtime. [↩](/blogs/week-6/#fnref:215) [↩](/interviews/JeffPreshing-interview/#fnref:10)

**Runtime** or **Dynamic Polymorphism**- when an overridden class or method is determined at runtime as opposed to compile time. This allows for us to change some behavior of our program depending on the data type it's operating with. [↩](/blogs/week-2/#fnref:3)

**STL**- standard library which is the C++ library containing most of the needed data structures. It is known to not be best for performance, however, will save us time not implementing them. [↩](/blogs/week-3/#fnref:845)

**SWF**-  short for Small Web Format, is an Adobe Flash file format used for multimedia, vector graphics and ActionScript. SWF files can contain animations or applets of varying degrees of interactivity and function.[↩](/interviews/TommyRefenes-interview/#fnref:6)

**Scaleform**- a vector graphics rendering engine used to display Adobe Flash-based user interfaces and HUDs for video games. [↩](/interviews/AmandineCoget-interview/#fnref:231)

**Scene graph**- holds the entities and components (including transforms and parent hierarchies) of a level, also known as a scene. [↩](/interviews/MartinMiddleton-interview/#fnref:5)

**Scriptable Render Pipeline (SRP)**- an alternative to the built-in rendering pipeline in Unity. With the SRP, developers can control and tailor rendering via C# scripts. This way, they can either slightly modify or completely build and customize the render pipeline to their needs.  [↩](/interviews/AdamSerdar-interview/#fnref:6) [↩](/interviews/ShaneeNishry-interview/#fnref:6)

**ScriptableObjects**- scripts which cannot be attached to GameObjects but still store (serialize) user data. [↩](/interviews/AdamSerdar-interview/#fnref:1)

**Seek**- a programming concept related to file reading, where a program has a file pointer associated with a position and a seek moves the pointer to a specific position within that file. [↩](/interviews/JeffPreshing-interview/#fnref:12)

**Seek-free loading**- a system which is able to read a file "free" (without) "seeking", (searching) a file, for data/position within a file. Seeking causes disk activity which is generally slower than CPU performance.  [↩](/interviews/JeffPreshing-interview/#fnref:11)

**Serialization**- the process of data being converted into a byte stream for easier storage and transfer, think of it as similar to a save and load system. [↩](/interviews/MartinMiddleton-interview/#fnref:7)

**Simple DirectMedia Layer (SDL)**- a hardware abstraction layer for audio, input, and graphics across multiple platforms. [↩](/interviews/MartinMiddleton-interview/#fnref:13)

**Singleton pattern**- a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system. [↩](/blogs/week-8/#fnref:23842)

**Software developer kit (SDK)**- a set of programs used in developing another program. [↩](/interviews/JeffPreshing-interview/#fnref:2)

**Spatial partitioning**- as defined by Bob Nystrom, a way to "efficiently locate objects by storing them in a data structure organized by their positions". If you are interested in learning more, refer to the [Spatial Partitioning chapter](http://gameprogrammingpatterns.com/spatial-partition.html) in his Game Programming Patterns book. [↩](/blogs/week-13/#fnref:1)

**Spine**- a 2D skeletal animation software for video games by Esoteric Software. [↩](/interviews/TommyRefenes-interview/#fnref:8)

**Static allocations**- the allocation of memory at compile time, therefore faster than dynamic because the computer doesn't need to switch into kernel mode to grab more memory. [↩](/interviews/ElanRuskin-interview/#fnref:6)

**std::function**- a container for lambda functions, see cppreference. We have renamed std::function to Action in our aliases for simpler calling. [↩](/blogs/week-3/#fnref:875)

**Std::iterator**- a C++ type that can be used to iterate through collections of elements based on that collection. [↩](/interviews/AmandineCoget-interview/#fnref:668322)

**Steering behavior**- a way of applying various forces to a unit's movement to generate realistic behaviors like chasing, fleeing, following, and more. [↩](/blogs/week-11/#fnref:848493)

**Stencil buffer**- an additional depth buffer to the depth and color buffers. [↩](/interviews/TommyRefenes-interview/#fnref:99)

**Student T-Test**- a statistic test to determine whether a sample set passes hypothesis, the chance the samples are the same or different. For more information see Elan's [GDC talk](https://www.youtube.com/watch?v=fl9V0U2SGeI). [↩](/interviews/ElanRuskin-interview/#fnref:3)

**_Sunset Overdrive_**- a game developed by Insomniac Games for the Xbox One. It is a fast-paced, open world action-adventure, third-person shooter. [↩](/interviews/ElanRuskin-interview/#fnref:9)

**Synergistic Processing Unit (SPU)**- the processing unit associated with the Cell architecture of the PS3. The PS3 had seven as part of its hardware, only six of which were usable by game developers. [↩](/interviews/RaymondGraham-interview/#fnref:847) [↩](/interviews/MartinMiddleton-interview/#fnref:1) [↩](/interviews/JeffPreshing-interview/#fnref:13)

**Test harnesses**- a test framework which can ensure the progression of the software. In the Isetta Engine case, they will act as sample levels to demo features of the engine and as versioning happens to ensure old features aren't broken on accident.[↩](/blogs/week-6/#fnref:675)

**The Demoscene**- an international computer art subculture focused on producing demos, which are self-contained, sometimes extremely small, audio-visual computer programs. [↩](/interviews/ArasPranckevicius-interview/#fnref:9)

**Thread-safe code**- only manipulates shared data structures in a manner that ensures that all threads behave properly and fulfill their design specifications without unintended interaction. [↩](/interviews/AmandineCoget-interview/#fnref:2384972)

**Transpose**- when the entries on the diagonals are flipped about the center diagonal.[↩](/blogs/week-6/#fnref:1123)

**Trie**- also known as a radix tree, digital tree, or prefix tree, this is a kind of search tree—an ordered tree data used to store a dynamic set or associative array where the keys are usually strings. [↩](/blogs/week-9/#fnref:683892)

**Two-Level Segregate Fit (TLSF)**-  a memory allocation scheme meant for use in video games because of its fast and efficient memory usage.  [↩](/blogs/week-5/#fnref:837294) 

**Type safety**- when the compiler can check whether the written code is using the right types and whether the language prevents or discourages type errors, errors from mismatching types. [↩](/blogs/week-9/#fnref:98761)

**Type trait**- defines a compile-time templated-base interface to query or modify the properties of types, for more see [type support](https://en.cppreference.com/w/cpp/types). [↩](/interviews/JeffPreshing-interview/#fnref:3)

**Typecasting**- also known as type conversion, this is a method of changing one data type to another. It helps ensure that variables are processed correctly by functions, but can also be dangerous with the way they handle the conversion. [↩](/blogs/week-7/#fnref:352252)

**UNIX**- a family of multitasking, multiuser operating systems that derive from the original AT&T Unix, originally developed at Ken Thompson, Dennis Ritchie, and others at Bell Labs. It's main comparable is Microsoft's DOS, which is mono-task and monouser. [↩](/interviews/ArasPranckevicius-interview/#fnref:2)

**Unified Modeling Language (UML)**- used to visually represent a software system with its actors and roles so that a programmer can better understand and design said system. Sometimes, UML diagrams can end up as a "disaster situation".[↩](/interviews/CaseyMuratori-interview/#fnref:399)

**Unified memory architecture**- an architecture that uses a portion of a computer's RAM rather than dedicated graphics memory. It is a single memory address space accessible from any processor in a system. [↩](/interviews/RaymondGraham-interview/#fnref:9463)

**Union**- a special class type in C++ that can hold only one of its non-static data members at a time. Similar to a struct, you can declare multiple variables in a union, but only one is available at the same time. Another distinction is that the size of a struct is the sum of all of its members, but the size of a union is the size of the biggest member. The way the author understands it is that union gives you different ways to interpret the same memory values. [↩](/blogs/week-6/#fnref:2354)

**Unreal Material Editor**- a node-based graph interface that enables you to create shaders. For more see the [Unreal Documentation](https://docs.unrealengine.com/en-us/Engine/Rendering/Materials/Editor). [↩](/interviews/RaymondGraham-interview/#fnref:199583)

**Unreal's Blueprint Visual Scripting System**- the node-based scripting in the Unreal Engine used for gameplay scripting. [↩](/interviews/AdamSerdar-interview/#fnref:11)

**Variable-render**- refers to the fact that rendering will be updated as fast as the CPU/GPU can allow, not being slowed by a frame rate. All other modules will then be updated with a fixed timestep since some of them dependent on the timestep and can become non-deterministic with a variable timestep. [↩](/blogs/engine-architecture/#fnref:6)

**Vector field**- an assignment of a vector to each point in a subset of space, such as a plan with a collection of arrows with a given magnitude and direction. Vector fields are often used to model the speed and direction of a moving fluid like a river. [↩](/blogs/week-11/#fnref:666403)

**Vector unit architecture (VU)**- the architecture for the Emotion Engine that was used in the Playstation 2 console. The two processing units were focused for 3D math and predecessor for the vertex shader pipelines. [↩](/interviews/RaymondGraham-interview/#fnref:379)

**Vertex shader**-  a graphics program that alters information associated to the vertices, it is one of the first stages in the graphics pipeline. [↩](/blogs/week-6/#fnref:9098)

**Vertex arrays and buffers**- hold the vertex information such as vertex positions, normals, color, etc and are stored within the OpenGL state. [↩](/blogs/week-6/#fnref:12)

**Viewport**- a region of a 2D rectangle that's used to project the 3D scene to a virtual camera and thus provide a way to view the 3D virtual world. [↩](/interviews/ShaneeNishry-interview/#fnref:20) [↩](/blogs/week-6/#fnref:70) 

**Virtual memory**- a memory management technique that abstracts uniformed memory space from different kind of storage device. [↩](/interviews/RaymondGraham-interview/#fnref:1995)

**Virtual table (vtable)**- a lookup table of functions used to resolve function calls. It's mostly used in C++ inheritance. [↩](/blogs/week-10/#fnref:1)

**Volume-casting**- when a volume's path is traced along a line/curve to test collisions with other objects. [↩](/blogs/engine-architecture/#fnref:4)

**Vulkan**- a low-overhead, cross-platform 3D graphics and compute API targeting high-performance realtime 3D graphics applications such as video games and interactive media across all platforms. [↩](/interviews/RaymondGraham-interview/#fnref:1835)

**Waterfall schedule**- a linear schedule where each subsequent item is dependent on the previous components being completed, it is less iterative and flexible because the flow is usually mono-directional. [↩](/interviews/AdamSerdar-interview/#fnref:4)

**Window handle**- a GLFW construct can be passed to objects and functions to allow them to hook into a particular window from the operating system. [↩](/blogs/week-5/#fnref:321)

**Wrapper**- a class that "wraps" around another class to hide/change/add functionality. This is usually done when using other people's libraries to ensure only your features are available. [↩](/blogs/engine-architecture/#fnref:2)

**Z-buffer**- also known as the depth buffer, contains information regarding the distance from the camera, the depth. Z-buffering can also refer to the technique in which pixels are culled from the frame, not rendered, because another pixel's depth is closer to the camera, therefore the pixel in the background is being covered. [↩](/interviews/JeffPreshing-interview/#fnref:15)
