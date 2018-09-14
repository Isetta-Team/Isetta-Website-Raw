_Jason is a USC lecturer on game and game engine development and author of the ubiquitous _Game Engine Architecture_ book. He is also a lead programmer at Naughty Dog, where he has worked on the _Uncharted_ series and _The Last of Us_, and he is currently working on _The Last of Us Part II.

We approached Jason because of his experience with not only game engine development but also in teaching game engine development at the University of Southern California. His years spent in the industry also provides a good standpoint to discuss the iterations game engine development has gone through. We did a Skype audio call with him.

### Advice (_not_ verbatim):


*   Engine Design
*   Almost all engine subsystems have influence from other disciplines like artists and designers. Jason sees his job as as providing tools for other disciplines, such as artists and designers, to express themselves. Understanding their needs, what their workflow is like, and how he can improve upon it.
*   A lot of the job is working with the design team to figure out the designs for a complex multiplayer game. Day to day, it's often deciding which way to go when solving a problem: Solution A or Solution B. Oftentimes the artists and designers will come over and bring up a concern or difficulty, and the design of the software will be altered.
*   High-level vs Low-level
*   Any piece of software is built on layers, and the lower you get in the stack the more important the hardware is. The upper layers of the Naughty Dog engine would work on any console because the concepts are still the same. The differences happen on things like single-threading to multi-threading conversion, interfacing with GPU or other specialized services, etc.
*   How we approach optimization can really depend what level you're working on. The Naughty Dog team has a rule against prematurely optimizing or over-optimizing; developers working on high-level gameplay systems are encouraged to just slap something together and get it on the screen. Then they iterate with the designers or artists a ton until the system works really well.
*   When you do have to solve a low-level problem, it's very interesting and sometimes involves assembly language programming. You may want to write a blogpost about solving one of these problems, but the truth is that you just do good, structured C++ most of the time.
*   Structuring Your First Engine
    *   It's not bad to integrate pre-existing things into a game engine in order to build it, because the act of making a game engine is about getting many distinct systems to work together.
    *   Focus on a very simple core. Keep it as simple as you can! It's more important that you get something that's bare minimum but will function. Something that shows, "it works!" Then build on this core, adding more features and iterating on functionality until you have a fully-fleshed out system. 
    *   Maybe use a pre-existing game design and build the engine around that. You should even develop a demo that works in your engine.
    *   Be prepared that by the end of it, you're gonna have something that's not close at all to anything big!
    *   One thing you could do is to take an older game engine like Quake and replace subsystems on it.
*   Choosing Subsystems (Networking vs Physics)
*   Choose whatever your team is more excited about! It's all about what you find more interesting!
*   In terms of absolute need, it depends on the game you're making.
*   There's probably less available learning resources on networking compared to physics.
*   You could, in theory, use PhysX or ODE. Multiplayer and physics don't usually mesh well anyway, so keeping physics would mean removing the networked multiplayer.