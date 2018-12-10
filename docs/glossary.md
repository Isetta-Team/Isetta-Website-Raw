# Glossary of All Footnote Terms

<!--
Whenever you are going to footnote something, look in here and copy over the definition so we can keep it consistent throughout the blogs/interviews. 

Also, please add any terms we haven't touched on that you think of!
-->

**Linter**- a tool that flags code for errors, bugs, stylistic errors, and suspicious constructs. [↩](blogs/week-1/#fnref:1)

**Construct On-Demand Technique**- in the context of the [singleton pattern](http://gameprogrammingpatterns.com/singleton.html), this means that the single instance is only constructed when first requested. We can utilize this nature to control initialization order by manually invoking the getter for the singletons in the right order. [↩](blogs/week-1/#fnref:2)

**Entity-Component-System (ECS)**- an architectural pattern that follows composition over inheritance principle and is mostly used in games. [↩](blogs/week-1/#fnref:3)

**Microsoft Foundation Class** **Library**- an object-oriented C++ library that contains useful macros for exceptions, run-time type identification, serialization, and more. 

**DLL**- a dynamic-linked library which is Microsoft shared library concept which can be transported around easier than a project and contains information about the compiled project. [↩](blogs/engine-architecture/#fnref:1)

**Wrapper**- a class that "wraps" around another class to hide/change/add functionality. This is usually done when using other people's libraries to ensure only your features are available. [↩](blogs/engine-architecture/#fnref:2)

**Volume-casting**- when a volume's path is traced along a line/curve to test collisions with other objects. [↩](blogs/engine-architecture/#fnref:4)

[**PhysX**](https://www.geforce.com/hardware/technology/physx)- NVIDIA's real-time physics engine used by most commercially available game engines such as Unity, Unreal, and Lumberyard. [↩](blogs/engine-architecture/#fnref:5)

**Variable-render**- refers to the fact that rendering will be updated as fast as the CPU/GPU can allow, not being slowed by a frame rate. All other modules will then be updated with a fixed timestep since some of them dependent on the timestep and can become non-deterministic with a variable timestep. [↩](blogs/engine-architecture/#fnref:6)

**Level Scene Graph**- the scene graph corresponding to a level, similar to a level configuration file. It will contain the information (transformation, behavior, whether it is static, etc.) about the starting game objects. [↩](blogs/engine-architecture/#fnref:7)

**Persistent Game Data**- Jason Gregory refers to this as "LSR" data, Load-and-Stay-Resident, as seen in _Game Engine Architecture_section 15.4.2_ [↩](blogs/week-2/#fnref:1)

**Defragmentation**- Fragmentation is when a lot of memory allocations or files take up noncontinuous chunks of space, leaving awkward bubbles that can't be used by anyone. So **defragmentation** is the process of reordering those objects so that we can clear up a cleaner, bigger stretch of free space or memory. [↩](blogs/week-2/#fnref:2)

**Runtime** or **Dynamic Polymorphism**- when an overridden class or method is determined at runtime as opposed to compile time. This allows for us to change some behavior of our program depending on the data type it's operating with. [↩](blogs/week-2/#fnref:3)

**Casey Muratori**- a game engine developer and creator of [Handmade Hero](https://handmadehero.org/), a web series documenting his efforts in building a game engine from scratch. We interviewed him as part of this project, and his interview can currently be found [here](interviews/CaseyMuratori-hmh-video/). [↩](blogs/week-2/#fnref:6)

**MonoBehaviour**- the base class within Unity that all components which attach to GameObjects must derive from, it has methods for start, update, and destroy. [↩](interviews/AdamSerdar-interview/#fnref:0)

**ScriptableObjects**- scripts which cannot be attached to GameObjects but still store (serialize) user data. [↩](interviews/AdamSerdar-interview/#fnref:1)

**Animation-blended System**- a graph of multiple animations and transitions from an animation to another, i.e., a idle animation to a walking animation, and the blend system is how the animations are "mixed" together. It extrapolates from the starting animation to the ending animation. [↩](interviews/AdamSerdar-interview/#fnref:2)

**Core**- refers to a CPU in a multi-core processor, it is one of the processing units in the single computing component that read and execute machine instructions. [↩](interviews/AdamSerdar-interview/#fnref:3)

**Waterfall Schedules**- a linear schedule where each subsequent item is dependent on the previous components being completed, it is less iterative and flexible because the flow is usually mono-directional. [↩](interviews/AdamSerdar-interview/#fnref:4)

**Node-based**- when an interface is visual with components, "boxes", that are connected to each other with outputs connected to inputs. A node-based shader system means a shader is edited through nodes. [↩](interviews/AdamSerdar-interview/#fnref:5)

**Scriptable Render Pipeline**- a system in Unity that allows the game developer to configure and control the graphics and rendering process via high-level scripting. [↩](interviews/AdamSerdar-interview/#fnref:6)

**OpenAL**- an audio library used for games, although it contains the word open it actually isn't open-sourced. Its open-source counterpart is OpenALSoft. [↩](interviews/AdamSerdar-interview/#fnref:7)

**Panda3D**- a game engine, a framework for 3D rendering and game development for Python and C++ programs. It was originally developed by Disney and expanded by past ETC projects. [↩](interviews/AdamSerdar-interview/#fnref:8)

**Core Render Loop**- the loop where the rendering function is called. The way the rendering occurs/is called varies from engine to engine, but is usually performed at the end of the main game loop. [↩](interviews/AdamSerdar-interview/#fnref:9)

**Unreal's Blueprint Visual Scripting System**- the node-based scripting in the Unreal Engine used for gameplay scripting. [↩](interviews/AdamSerdar-interview/#fnref:11)

**Job Control**- the control of multiple tasks on a computer system that may be "in-flight" at the same time. It requires proper allocation of resources and locked access to prevent deadlocks and failures.[↩](interviews/CaseyMuratori-interview/#fnref:666)

**Cross Product**- the 3D math operation where the input is two vectors and the output is one vector that's perpendicular to both input vectors. However, the direction of the output vector depends on whether the space is defined as left handed or right handed.[↩](interviews/CaseyMuratori-interview/#fnref:301)

**Depth Peeling**- a method of order-independent transparency when rendering 3D geometry. It determines what should be drawn on top by rendering multiple passes of a scene and comparing depths.[↩](interviews/CaseyMuratori-interview/#fnref:988)

**Unified Modeling Language (UML)**- used to visually represent a software system with its actors and roles so that a programmer can better understand and design said system. Sometimes, UML diagrams can end up as a "disaster situation".[↩](interviews/CaseyMuratori-interview/#fnref:399)

**Build Engineer**- the engineer in charge of the infrastructure that builds a software application, as well as testing and troubleshooting code for before the software's release.[↩](interviews/CaseyMuratori-interview/#fnref:500)

**CMake**- a cross-platform, open-source application for managing the build process of software in a compiler-independent way.[↩](interviews/CaseyMuratori-interview/#fnref:400)

**Ninja**- a small build system that is designed to run builds as fast as possible.[↩](interviews/CaseyMuratori-interview/#fnref:401)

**Engine abstraction**- the part of the engine code which depends on the hardware/software platform that the engine runs on and will be different on each platform. For example, the code that talks to the operating system on macOS will be different from that on Windows. Engine developers usually tackle this problem by having an abstraction layer on top of operating system code. So the code above that layer still looks the same when you swap out the underlying operating system. [↩](interviews/TommyRefenes-interview/#fnref:2)

**Platform-dependent**- code refers to application code that is dependent on one operating system, and typically won't run on multiple. [↩](interviews/TommyRefenes-interview/#fnref:301)

**OpenGL**- short for Open Graphics Library - a cross-language, cross-platform application programming interface (API) for rendering 2D and 3D vector graphics. The API is typically used to interact with a graphics processing unit (GPU), to achieve hardware-accelerated rendering. It's the underlying rendering library for many modern game engines.[↩](interviews/TommyRefenes-interview/#fnref:3)

**SWF**-  short for Small Web Format, is an Adobe Flash file format used for multimedia, vector graphics and ActionScript. SWF files can contain animations or applets of varying degrees of interactivity and function.[↩](interviews/TommyRefenes-interview/#fnref:6)

**Spine**- a 2D skeletal animation software for video games by Esoteric Software. [↩](interviews/TommyRefenes-interview/#fnref:8)

**Box2D**- an open source C++ engine for simulating rigid bodies in 2D. Box2D is developed by Erin Catto and has the zlib license. [↩](interviews/TommyRefenes-interview/#fnref:3125) 

**FMOD**- a a cross platform audio engine and authoring tool used throughout the game industry. It was used by over 2,000 games in the last 15 years.[↩](interviews/TommyRefenes-interview/#fnref:743)

**Physics Solver**- a physics engine for games usually consists of two parts: collision detection and collision resolution, and solver refers to the resolution part. Collision detection detects what objects collide with each other first, and then the solver determines their correct physical response, like position, rotation, velocity, etc. [↩](interviews/TommyRefenes-interview/#fnref:3126)

**BINK**- the defacto video codec for games created by Rad Tools.[↩](interviews/TommyRefenes-interview/#fnref:519)

**JAI**- a language being developed by Jonathan Blow and his team at Thekla to address some of the issues game developers have with the current industry standard, C++. [↩](interviews/TommyRefenes-interview/#fnref:654)

**FLA**- the file format for projects created by Adobe Animate, and can contain graphics, video, text, audio, and more. They are often saved as SWF files to be used on the web. [↩](interviews/TommyRefenes-interview/#fnref:38927)

**Fill Rate**-  the number of pixels a video card can read/write to the screen per second. [↩](interviews/TommyRefenes-interview/#fnref:444)

**Backface Culling**- the technique of performing visibility checks on a mesh to not render the back face (face not facing the camera). [↩](interviews/TommyRefenes-interview/#fnref:789)

**Stencil Buffer**- an additional depth buffer to the depth and color buffers. [↩](interviews/TommyRefenes-interview/#fnref:99)

**Depth Culling**- the process of deciding which elements to render based on the distance from the camera and if it is being hidden by another element. [↩](interviews/TommyRefenes-interview/#fnref:32)

**Run-length Encoding**-  a form of lossless data compression where data is stored as a single data value and count. [↩](interviews/TommyRefenes-interview/#fnref:21)

**Free list**- a memory management data structure that uses a linked list which points to successive free regions of memory that can be utilized for allocation individually.[↩](blogs/week-4/#fn:24920)

**STL**- standard library which is the C++ library containing most of the needed data structures. It is known to not be best for performance, however, will save us time not implementing them. [↩](blogs/week-3/#fnref:845)

**GLFW**- a library utility for creating windows and receiving input from the window. [↩](blogs/week-3/#fnref:8987)

**std::function**- a container for lambda functions, see cppreference. We have renamed std::function to Action in our aliases for simpler calling. [↩](blogs/week-3/#fnref:875)

**OSI**- Open System Interconnection and is a standard for networking layers. [↩](blogs/week-3/#fnref:784)

**Packet**- formatted data that is sent over a network. Virtual objects are serialized and broken into these small chunks before being sent, and different protocols expect different formats for packets. [↩](blogs/week-3/#fnref:483920)

**Client-server model**- in networking where there is one central server that all other machines (the "clients") connect to. This server is typically the authority on all important and possibly conflicting information. [↩](blogs/week-3/#fnref:909281)

**Peer-to-peer model**- in networking is where every machine to one another, which requires more bandwidth per client and more complex data authority handling but avoids needing a dedicated server. Peer-to-peer is generally harder to implement than client-server. [↩](blogs/week-3/#fnref:909282)

**Handshake** in networking is an automated negotiation process for creating a connection between two machines, typically a client and a server. The process requires the machines to exchange special packets before the connection can be established. [↩](blogs/week-3/#fnref:909283)

**Ring buffer**- (or [circular buffer](https://en.wikipedia.org/wiki/Circular_buffer)) is a FIFO data structure which is broadly used for transmitting data between asynchronous processes. See more:  [↩](blogs/week-3/#fnref:8383)

**Localhost**- an address in networking specifically, 127.0.0.1. Packets that are sent here are not technically sent anywhere, they're just sent up to the next layer for processing. [↩](blogs/week-3/#fnref:535362)

**Packet queue**- a queue of packets, which are small chunks of an original, bigger message. These are sent out in-batch because of packet size limitations over internet networks. [↩](blogs/week-5/#fnref:34902)

**Deterministic Behaviour**-  a process whose resulting state is determined by the initial state and inputs. It is heavily reliant on having a fixed-time so each step is performing the same amount of "work". [↩](blogs/week-5/#fnref:877)

**Data locality**- essentially accessing data in as nearby of code as possible to utilize caches most effectively. Robert Nystrom covers it really well in this chapter from [Game Programming Patterns](http://gameprogrammingpatterns.com/data-locality.html). [↩](blogs/week-5/#fnref:32402) 

**Branching**- hen the processor needs to evaluate something in order to determine what code to run next. It tends to be very wasteful of processing time because of the typical [instruction pipeline](https://en.wikipedia.org/wiki/Instruction_pipelining) on a computer.

**Window handle**- a GLFW construct can be passed to objects and functions to allow them to hook into a particular window from the operating system. [↩](blogs/week-5/#fnref:321)

**Pixel Stream**-  a stream of pixel data, typically as four floating point numbers or integers representing red, green, blue, and opacity/alpha. [↩](blogs/week-5/#fnref:838383)

**Messaging buffer**- a stream of pixel data, typically as four floating point numbers or integers representing red, green, blue, and opacity/alpha. [↩](blogs/week-5/#fnref:838383)

**Packet queue**- a queue of packets, which are small chunks of an original, bigger message. These are sent out in-batch because of packet size limitations over internet networks. [↩](blogs/week-5/#fnref:34902)

**Two-Level Segregate Fit (TLSF)**-  a memory allocation scheme meant for use in video games because of its fast and efficient memory usage.  [↩](blogs/week-5/#fnref:837294) 

**Regression Testing**- the process of testing changes in software to make sure functionality is not broken when updating the software. [↩](blogs/week-5/#fnref:3902832) 

**Qt**-  a framework for creating retained GUI applications. [↩](blogs/week-6/#fnref:97) 

**Viewport**- the "window" which the camera will render content to the screen, it is specified with an (x,y) offset from the top-left in OpenGL and a width and height. [↩](blogs/week-6/#fnref:70) 

**Vertex arrays and buffers**- hold the vertex information such as vertex positions, normals, color, etc and are stored within the OpenGL state. [↩](blogs/week-6/#fnref:12)

**Element Buffers**- hold additional information regarding the vertices, specifically what index the pertinent information is located within the vertex array. [↩](blogs/week-6/#fnref:39)

**Culling**- the early rejection of objects being passed through the render pipeline, because they don't contribute to the final image. [↩](blogs/week-6/#fnref:49)

**Model-view Matrix**- the matrix which transforms a position in local space to world space, then to camera space. [↩](blogs/week-6/#fnref:440)

**Transpose**- when the entries on the diagonals are flipped about the center diagonal.[↩](blogs/week-6/#fnref:1123)

**Vertex Shader**-  a graphics program that alters information associated to the vertices, it is one of the first stages in the graphics pipeline. [↩](blogs/week-6/#fnref:9098)

**Homogenous Coordinates**- differentiate points from vectors by expanding the traditional Vector3 to a Vector4 and placing a 0 in the 4th element for vectors and 1 in the 4th element for points. [↩](blogs/week-6/#fnref:932)

**Frustum**- the portion of the world which is viewable by a camera. It is typically shaped like a pyramid with near and far planes clipping the volume. What is rendered is the volume between the 2 planes. [↩](blogs/week-6/#fnref:324)

**Pivot**-  the local position of the model which is the zero position. When transforming the model in the world space, all changes are relative to this point. An offset pivot is when the pivot is placed in a position that isn't about the model, for example offset in X=100 from the model. [↩](blogs/week-6/#fnref:587)

**.geo files**- Horde3D's processed file for model and animations, optimized for more efficient rendering. The file is processed through the Horde3DUtil library and done prior to runtime. [↩](blogs/week-6/#fnref:4533)

**Union**- a special class type in C++ that can hold only one of its non-static data members at a time. Similar to a struct, you can declare multiple variables in a union, but only one is available at the same time. Another distinction is that the size of a struct is the sum of all of its members, but the size of a union is the size of the biggest member. The way the author understands it is that union gives you different ways to interpret the same memory values. [↩](blogs/week-6/#fnref:2354)

**Object Composition**- in Object Oriented Programming, this is a way to combine simple objects or data types into more complex ones. The Component pattern in Game Programming Patterns book describes this in detail. [↩](blogs/week-6/#fnref:90865)

**Runtime type information (RTTI)**- a language feature that exposes information about an object's data type at runtime. For example, if you want to get the type name of some object as string, you would need RTTI. [↩](blogs/week-6/#fnref:215)

**Macros**-  a way of automatically substituting text for some other during the compiling process. In C++, they are defined as #define TEXT_IN_CODE TEXT_TO_COPY OVER. For example, if you define #define SPEED 5 and write mySpeed = SPEED, SPEED will be substituted by 5 during compile time and the compiler will actually see mySpeed = 5. [↩](blogs/week-6/#fnref:1238)

**Oracle**- a computer technology corporation headquartered in Redwood Shores, California, who acquired Java from Sun Microsystems and is now maintaining it. [↩](blogs/week-6/#fnref:85213)

**Test Harnesses**- a test framework which can ensure the progression of the software. In the Isetta Engine case, they will act as sample levels to demo features of the engine and as versioning happens to ensure old features aren't broken on accident.[↩](blogs/week-6/#fnref:675)

**Heuristic**- a technique for solving a problem more quickly, often utilized in optimization problems for computer science. [↩](blogs/week-7/#fnref:3829)

**Object Factory**- a programming pattern where you decouple object creation and destruction with the actual usage of the object. An object factory typically creates objects based on passed parameters, which you would then receive and use. [↩](blogs/week-7/#fnref:28392)

**Typecasting**- also known as type conversion, this is a method of changing one data type to another. It helps ensure that variables are processed correctly by functions, but can also be dangerous with the way they handle the conversion. [↩](blogs/week-7/#fnref:352252)

**Boilerplate Code**-  a section of code that has to be included in many places with little to no alteration. [↩](blogs/week-7/#fnref:3954920)

**Function Templates**- functions definitions that, at compile time, generate individual function definitions for any types used with the template. This can be very useful for cutting out duplicate code, but greatly increases compile time and code size. [↩](blogs/week-7/#fnref:290252)

**BitSquid**-  more modernly known as Autodesk Stingray, is a discontinued game engine from Stockholm, Sweden. End of sale was announced for January 7, 2018, and afterward it became a plugin for Autodesk 3DS Max known as 3DS Max Interactive. [↩](interviews/AmandineCoget-interview/#fnref:284972)

**IMGUI**- stands for immediate mode GUI which is a code-driven GUI system where on each rendering frame the application needs to issue the draw commands of the GUI (the GUI is not stored for multiple frames) [↩](interviews/AmandineCoget-interview/#fnref:1024)

**Scaleform**- a vector graphics rendering engine used to display Adobe Flash-based user interfaces and HUDs for video games. [↩](interviews/AmandineCoget-interview/#fnref:231)

**Retained GUI**-  also known as canvas/scene graph, is where GUI is registered once and is displayed, "retained", on screen until it removes itself from rendering. [↩](interviews/AmandineCoget-interview/#fnref:1025)

**Frostbite**- EA's proprietary game engine used across most of their studios. [↩](interviews/AmandineCoget-interview/#fnref:134)

**Heads-up Display (HUD)**- overlay on the screen that presents important information to the player. [↩](interviews/AmandineCoget-interview/#fnref:135)

**Intellisense**- an intelligent code completion feature in Microsoft Visual Studio that is capable of detailing information about the code and objects that the programmer is working with while coding. [↩](interviews/AmandineCoget-interview/#fnref:83838392)

**Retro Compatibility**-  also known as backwards compatibility, is when a system is setup such that it works with legacy code/input. [↩](interviews/AmandineCoget-interview/#fnref:53)

**Thread-safe code**- only manipulates shared data structures in a manner that ensures that all threads behave properly and fulfill their design specifications without unintended interaction. [↩](interviews/AmandineCoget-interview/#fnref:2384972)

**Std::iterator**- a C++ type that can be used to iterate through collections of elements based on that collection. [↩](interviews/AmandineCoget-interview/#fnref:668322)

**Path Tracing**- a realistic lighting algorithm that simulates light bouncing around a scene. It uses the Monte Carlo method to give a faithful rendition of the global illumination of the scene. [↩](interviews/ArasPranckevicius-interview/#fnref:23421) 

**The Demoscene**- an international computer art subculture focused on producing demos, which are self-contained, sometimes extremely small, audio-visual computer programs. [↩](interviews/ArasPranckevicius-interview/#fnref:9)

**RenderWare**-  a game engine by Criterion Software that launched in 1993 and continued to regularly support games through 2010. It was known for providing an off-the-shelf solution to the difficulties of PS2 graphics programming. [↩](interviews/ArasPranckevicius-interview/#fnref:10)

**Autodesk 3ds Max**- formerly 3D Studio and 3D Studio Max, is a professional 3D computer graphics program for making 3D animations, models, games, and images. [↩](interviews/ArasPranckevicius-interview/#fnref:11)

**FBX**- a proprietary file format owned by Autodesk that is mostly commonly used for 3D model and animation data within the games industry. [↩](interviews/ArasPranckevicius-interview/#fnref:12)

**GlTF(GL Transmission Format)**- a royalty-free file format for 3D scenes and models using the JSON standard. [↩](interviews/ArasPranckevicius-interview/#fnref:13)

**Open Dynamic Engine (ODE)**- a free and open source physics engine written in C/C++ that can do both rigid body dynamics simulation and collision detection. [↩](interviews/ArasPranckevicius-interview/#fnref:14)

**Cocoa**- Apple's native object-oriented API for macOS.  [↩](interviews/ArasPranckevicius-interview/#fnref:1)

**UNIX**- a family of multitasking, multiuser operating systems that derive from the original AT&T Unix, originally developed at Ken Thompson, Dennis Ritchie, and others at Bell Labs. It's main comparable is Microsoft's DOS, which is mono-task and monouser. [↩](interviews/ArasPranckevicius-interview/#fnref:2)