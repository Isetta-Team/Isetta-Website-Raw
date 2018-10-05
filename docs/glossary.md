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

**Unreal's Blueprint Visual Scripting System**- the node-based scripting in the Unreal Engine used for gameplay scripting. 

**Job Control**- the control of multiple tasks on a computer system that may be "in-flight" at the same time. It requires proper allocation of resources and locked access to prevent deadlocks and failures.

**Cross Product**- the 3D math operation where the input is two vectors and the output is one vector that's perpendicular to both input vectors. However, the direction of the output vector depends on whether the space is defined as left handed or right handed.

**Depth Peeling**- a method of order-independent transparency when rendering 3D geometry. It determines what should be drawn on top by rendering multiple passes of a scene and comparing depths.

**Unified Modeling Language (UML)**- used to visually represent a software system with its actors and roles so that a programmer can better understand and design said system. Sometimes, UML diagrams can end up as a "disaster situation".

**Build Engineer**- the engineer in charge of the infrastructure that builds a software application, as well as testing and troubleshooting code for before the software's release.

**CMake**- a cross-platform, open-source application for managing the build process of software in a compiler-independent way.

**Ninja**- a small build system that is designed to run builds as fast as possible.