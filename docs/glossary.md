# Glossary of All Footnote Terms

<!--
Whenever you are going to footnote something, look in here and copy over the definition so we can keep it consistent throughout the blogs/interviews. 

Also, please add any terms we haven't touched on that you think of!
-->

**Linter**- a tool that flags code for errors, bugs, stylistic errors, and suspicious constructs. [↩](https://isetta.io/blogs/week-1/#fnref:1)

**Construct On-Demand Technique**- in the context of the [singleton pattern](http://gameprogrammingpatterns.com/singleton.html), this means that the single instance is only constructed when first requested. We can utilize this nature to control initialization order by manually invoking the getter for the singletons in the right order. [↩](https://isetta.io/blogs/week-1/#fnref:2)

**Entity-Component-System (ECS)**- an architectural pattern that follows composition over inheritance principle and is mostly used in games. [↩](https://isetta.io/blogs/week-1/#fnref:3)

**Microsoft Foundation Class** **Library**- an object-oriented C++ library that contains useful macros for exceptions, run-time type identification, serialization, and more. 

**DLL**- a dynamic-linked library which is Microsoft shared library concept which can be transported around easier than a project and contains information about the compiled project. [↩](https://isetta.io/blogs/engine-architecture/#fnref:1)

**Wrapper**- a class that "wraps" around another class to hide/change/add functionality. This is usually done when using other people's libraries to ensure only your features are available. [↩](https://isetta.io/blogs/engine-architecture/#fnref:2)

**Volume-casting**- when a volume's path is traced along a line/curve to test collisions with other objects. [↩](https://isetta.io/blogs/engine-architecture/#fnref:4)

**[PhysX](https://www.geforce.com/hardware/technology/physx)**- NVIDIA's real-time physics engine used by most commercially available game engines such as Unity, Unreal, and Lumberyard. [↩](https://isetta.io/blogs/engine-architecture/#fnref:5)

**Variable-render**- refers to the fact that rendering will be updated as fast as the CPU/GPU can allow, not being slowed by a frame rate. All other modules will then be updated with a fixed timestep since some of them dependent on the timestep and can become non-deterministic with a variable timestep. [↩](https://isetta.io/blogs/engine-architecture/#fnref:6)

**Level Scene Graph**- the scene graph corresponding to a level, similar to a level configuration file. It will contain the information (transformation, behavior, whether it is static, etc.) about the starting game objects. [↩](https://isetta.io/blogs/engine-architecture/#fnref:7)

**Persistent Game Data**- Jason Gregory refers to this as "LSR" data, Load-and-Stay-Resident, as seen in _Game Engine Architecture_section 15.4.2_ [↩](https://isetta.io/blogs/week-2/#fnref:1)

**Defragmentation**- Fragmentation is when a lot of memory allocations or files take up noncontinuous chunks of space, leaving awkward bubbles that can't be used by anyone. So **defragmentation** is the process of reordering those objects so that we can clear up a cleaner, bigger stretch of free space or memory. [↩](https://isetta.io/blogs/week-2/#fnref:2)

**Runtime** or **Dynamic Polymorphism**- when an overridden class or method is determined at runtime as opposed to compile time. This allows for us to change some behavior of our program depending on the data type it's operating with. [↩](https://isetta.io/blogs/week-2/#fnref:3)

**Casey Muratori**- a game engine developer and creator of [Handmade Hero](https://handmadehero.org/), a web series documenting his efforts in building a game engine from scratch. We interviewed him as part of this project, and his interview can currently be found [here](https://isetta.io/interviews/CaseyMuratori-hmh-video/). [↩](https://isetta.io/blogs/week-2/#fnref:6)

**MonoBehaviour**- the base class within Unity that all components which attach to GameObjects must derive from, it has methods for start, update, and destroy. [↩](https://isetta.io/interviews/AdamSerdar-interview/#fnref:0)

**ScriptableObjects**- scripts which cannot be attached to GameObjects but still store (serialize) user data. [↩](https://isetta.io/interviews/AdamSerdar-interview/#fnref:1)

**Animation-blended System**- can be graph of multiple animations and transitions from an animation to another, i.e., idle to walk, and the blend system is how the animations are "mixed" together, it extrapolates from the starting animation to the ending animation. [↩](https://isetta.io/interviews/AdamSerdar-interview/#fnref:2)

**Core**- refers to a CPU in a multi-core processor, it is one of the processing units in the single computing component that read and execute machine instructions. [↩](https://isetta.io/interviews/AdamSerdar-interview/#fnref:3)

**Waterfall Schedules**- a linear schedule where each subsequent item is dependent on the previous components being completed, it is less iterative and flexible because the flow is usually mono-directional. [↩](https://isetta.io/interviews/AdamSerdar-interview/#fnref:4)

**Node-based**- when an interface is visual with components, "boxes", that are connected to each other with outputs connected to inputs; a shader is a program that alters the graphical look of an object. A node-based shader system means a shader is edited through nodes. [↩](https://isetta.io/interviews/AdamSerdar-interview/#fnref:5)

**Scriptable Render Pipeline**- a term specific to Unity, however can use in more generic sense of being able to customize the graphics pipeline for different platform requirements by downgrading/upgrading the level of detail, shader information, etc. [↩](https://isetta.io/interviews/AdamSerdar-interview/#fnref:6)

**OpenAL**- an audio library used for games, although it contains the word open it actually isn't open-sourced. Its open-source counterpart is OpenALSoft. [↩](https://isetta.io/interviews/AdamSerdar-interview/#fnref:7)

**Panda3D**- a game engine, a framework for 3D rendering and game development for Python and C++ programs. It was originally developed by Disney and expanded by past ETC projects. [↩](https://isetta.io/interviews/AdamSerdar-interview/#fnref:8)

**Core Render Loop**- the loop where the rendering function is called. The way the rendering occurs/is called varies from engine to engine, but is usually performed at the end of the main game loop. [↩](https://isetta.io/interviews/AdamSerdar-interview/#fnref:9)

**Unreal's Blueprint Visual Scripting System**- the node-based scripting in the Unreal Engine used for gameplay scripting. [↩](https://isetta.io/interviews/AdamSerdar-interview/#fnref:11)

**Job Control**- the control of multiple tasks on a computer system that may be "in-flight" at the same time. It requires proper allocation of resources and locked access to prevent deadlocks and failures.[↩](https://isetta.io/interviews/CaseyMuratori-interview/#fnref:666)

**Cross Product**- the 3D math operation where the input is two vectors and the output is one vector that's perpendicular to both input vectors. However, the direction of the output vector depends on whether the space is defined as left handed or right handed.[↩](https://isetta.io/interviews/CaseyMuratori-interview/#fnref:301)

**Depth Peeling**- a method of order-independent transparency when rendering 3D geometry. It determines what should be drawn on top by rendering multiple passes of a scene and comparing depths.[↩](https://isetta.io/interviews/CaseyMuratori-interview/#fnref:988)

**Unified Modeling Language (UML)**- used to visually represent a software system with its actors and roles so that a programmer can better understand and design said system. Sometimes, UML diagrams can end up as a "disaster situation".[↩](https://isetta.io/interviews/CaseyMuratori-interview/#fnref:399)

**Build Engineer**- the engineer in charge of the infrastructure that builds a software application, as well as testing and troubleshooting code for before the software's release.[↩](https://isetta.io/interviews/CaseyMuratori-interview/#fnref:500)

**CMake**- a cross-platform, open-source application for managing the build process of software in a compiler-independent way.[↩](https://isetta.io/interviews/CaseyMuratori-interview/#fnref:400)

**Ninja**- a small build system that is designed to run builds as fast as possible.[↩](https://isetta.io/interviews/CaseyMuratori-interview/#fnref:401)

**Engine abstraction**- the part of the engine code which depends on the hardware/software platform that the engine runs on and will be different on each platform. For example, the code that talks to the operating system on macOS will be different from that on Windows. Engine developers usually tackle this problem by having an abstraction layer on top of operating system code. So the code above that layer still looks the same when you swap out the underlying operating system. [↩](https://isetta.io/interviews/TommyRefenes-interview/#fnref:2)

**Platform-dependent**- code refers to application code that is dependent on one operating system, and typically won't run on multiple. [↩](https://isetta.io/interviews/TommyRefenes-interview/#fnref:301)

**OpenGL**- short for Open Graphics Library - a cross-language, cross-platform application programming interface (API) for rendering 2D and 3D vector graphics. The API is typically used to interact with a graphics processing unit (GPU), to achieve hardware-accelerated rendering. It's the underlying rendering library for many modern game engines.[↩](https://isetta.io/interviews/TommyRefenes-interview/#fnref:3)

**SWF**-  short for Small Web Format, is an Adobe Flash file format used for multimedia, vector graphics and ActionScript. SWF files can contain animations or applets of varying degrees of interactivity and function.[↩](https://isetta.io/interviews/TommyRefenes-interview/#fnref:6)

**Spine**- a 2D skeletal animation software for video games by Esoteric Software. [↩](https://isetta.io/interviews/TommyRefenes-interview/#fnref:8)

**Box2D**- an open source C++ engine for simulating rigid bodies in 2D. Box2D is developed by Erin Catto and has the zlib license. [↩](https://isetta.io/interviews/TommyRefenes-interview/#fnref:3125) 

**FMOD**- a a cross platform audio engine and authoring tool used throughout the game industry. It was used by over 2,000 games in the last 15 years.[↩](https://isetta.io/interviews/TommyRefenes-interview/#fnref:743)

**Physics Solver**- a physics engine for games usually consists of two parts: collision detection and collision resolution, and solver refers to the resolution part. Collision detection detects what objects collide with each other first, and then the solver determines their correct physical response, like position, rotation, velocity, etc. [↩](https://isetta.io/interviews/TommyRefenes-interview/#fnref:3126)

**BINK**- the defacto video codec for games created by Rad Tools.[↩](https://isetta.io/interviews/TommyRefenes-interview/#fnref:519)

**JAI**- a language being developed by Jonathan Blow and his team at Thekla to address some of the issues game developers have with the current industry standard, C++. [↩](https://isetta.io/interviews/TommyRefenes-interview/#fnref:654)

**FLA**- the file format for projects created by Adobe Animate, and can contain graphics, video, text, audio, and more. They are often saved as SWF files to be used on the web. [↩](https://isetta.io/interviews/TommyRefenes-interview/#fnref:38927)

**Fill Rate**-  the number of pixels a video card can read/write to the screen per second. [↩](https://isetta.io/interviews/TommyRefenes-interview/#fnref:444)

**Backface Culling**- the technique of performing visibility checks on a mesh to not render the back face (face not facing the camera). [↩](https://isetta.io/interviews/TommyRefenes-interview/#fnref:789)

**Stencil Buffer**- an additional depth buffer to the depth and color buffers. [↩](https://isetta.io/interviews/TommyRefenes-interview/#fnref:99)

**Depth Culling**- the process of deciding which elements to render based on the distance from the camera and if it is being hidden by another element. [↩](https://isetta.io/interviews/TommyRefenes-interview/#fnref:32)

**Run-length Encoding**-  a form of lossless data compression where data is stored as a single data value and count. [↩](https://isetta.io/interviews/TommyRefenes-interview/#fnref:21)

**Free list**- a memory management data structure that uses a linked list which points to successive free regions of memory that can be utilized for allocation individually.[↩](https://isetta.io/blogs/week-4/#fn:24920)

**STL**- standard library which is the C++ library containing most of the needed data structures. It is known to not be best for performance, however, will save us time not implementing them. [↩](https://isetta.io/blogs/week-3/#fnref:845)

**GLFW**- a library utility for creating windows and receiving input from the window. [↩](https://isetta.io/blogs/week-3/#fnref:8987)

**std::function**- a container for lambda functions, see cppreference. We have renamed std::function to Action in our aliases for simpler calling. [↩](https://isetta.io/blogs/week-3/#fnref:875)

**OSI**- Open System Interconnection and is a standard for networking layers. [↩](https://isetta.io/blogs/week-3/#fnref:784)

**Packet**- formatted data that is sent over a network. Virtual objects are serialized and broken into these small chunks before being sent, and different protocols expect different formats for packets. [↩](https://isetta.io/blogs/week-3/#fnref:483920)

**Client-server model**- in networking where there is one central server that all other machines (the "clients") connect to. This server is typically the authority on all important and possibly conflicting information. [↩](https://isetta.io/blogs/week-3/#fnref:909281)

**Peer-to-peer model**- in networking is where every machine to one another, which requires more bandwidth per client and more complex data authority handling but avoids needing a dedicated server. Peer-to-peer is generally harder to implement than client-server. [↩](https://isetta.io/blogs/week-3/#fnref:909282)

**Handshake** in networking is an automated negotiation process for creating a connection between two machines, typically a client and a server. The process requires the machines to exchange special packets before the connection can be established. [↩](https://isetta.io/blogs/week-3/#fnref:909283)

**Ring buffer**- (or [circular buffer](https://en.wikipedia.org/wiki/Circular_buffer)) is a FIFO data structure which is broadly used for transmitting data between asynchronous processes. See more:  [↩](https://isetta.io/blogs/week-3/#fnref:8383)

**Localhost**- an address in networking specifically, 127.0.0.1. Packets that are sent here are not technically sent anywhere, they're just sent up to the next layer for processing. [↩](https://isetta.io/blogs/week-3/#fnref:535362)

**Packet queue**- a queue of packets, which are small chunks of an original, bigger message. These are sent out in-batch because of packet size limitations over internet networks. [↩](https://isetta.io/blogs/week-5/#fnref:34902)

**Deterministic Behaviour**-  a process whose resulting state is determined by the initial state and inputs. It is heavily reliant on having a fixed-time so each step is performing the same amount of "work". [↩](https://isetta.io/blogs/week-5/#fnref:877)

**Data locality**- essentially accessing data in as nearby of code as possible to utilize caches most effectively. Robert Nystrom covers it really well in this chapter from [Game Programming Patterns](http://gameprogrammingpatterns.com/data-locality.html). [↩] (https://isetta.io/blogs/week-5/#fnref:32402) 

**Branching**- hen the processor needs to evaluate something in order to determine what code to run next. It tends to be very wasteful of processing time because of the typical [instruction pipeline](https://en.wikipedia.org/wiki/Instruction_pipelining) on a computer.

**Window handle**- a GLFW construct can be passed to objects and functions to allow them to hook into a particular window from the operating system. [↩] (https://isetta.io/blogs/week-5/#fnref:321)

**Pixel Stream**-  a stream of pixel data, typically as four floating point numbers or integers representing red, green, blue, and opacity/alpha. [↩] (https://isetta.io/blogs/week-5/#fnref:838383)

**Messaging buffer**- a stream of pixel data, typically as four floating point numbers or integers representing red, green, blue, and opacity/alpha. [↩] (https://isetta.io/blogs/week-5/#fnref:838383)

**Packet queue**- a queue of packets, which are small chunks of an original, bigger message. These are sent out in-batch because of packet size limitations over internet networks. [↩] (https://isetta.io/blogs/week-5/#fnref:34902)

**Two-Level Segregate Fit (TLSF)**-  a memory allocation scheme meant for use in video games because of its fast and efficient memory usage.  [↩] (https://isetta.io/blogs/week-5/#fnref:837294) 

**Regression Testing**- the process of testing changes in software to make sure functionality is not broken when updating the software. [↩] (https://isetta.io/blogs/week-5/#fnref:3902832) 