# FAQ

Here is a collection of questions we have often received from our faculty and followers of our project:

## About the Project

### Why "Isetta"?
In our engine name brainstorming process, one idea we kept coming back to was the "Urkel Engine", based off Steve Urkel, the loveable loser from Family Matters. We thought his catchphrase ["Did I do that?"](https://www.youtube.com/watch?v=xz3ZOoYSMuw) matched our pratfalls that would likely happen throughout the semester. Unfortunately, nobody outside our team liked the name. We then remembered that on the show, Urkel had a tiny rickety car called an Isetta, the image of which was perfect for our engine.

### What is the point of this project?
The Isetta Engine is meant to provide an in-depth look at engine creation for newcomers who want to build their own engine but are not sure what that entails. 

### Will this be paid for or free or open source?
Open source all the way! We want as many others to benefit from our experience as possible. 

### Is there a single aspect of engine development that you will be focusing on? 
Our goal is to show everything required to build a game engine, so our plan is to keep all of it simple and rudimentary rather than emphasize one particular part. 

### How is this different from other series like Handmade Hero or reading *Game Engine Architecture*
During our interview with [Casey Muratori](https://www.youtube.com/embed/9-h6TPkQ6ko?rel=0), he talked about how good engine programming should be approached like a boundary value problem with the shooting method, with the sides of the boundary being (1) high-level architecture and (2) the real-world, actual solution. So to build the right engine for your needs, you need to improve a bit upon the architecture, then improve a bit on your actual solution, ad infinitum. We're not collaborating with Casey, or other resources, beyond interviewing and reading, but we think this analogy explains the relationship of their work with ours: the professionals are taking their experience as game engine programmers and working down (trying to reach new engine programmers), and we're building our first engine and are working up (trying to take new engine programmers along with us).

## About the Engine

### What platforms are you targeting?
Our plan is to keep the release to *64-Bit Windows* systems. Because of our tight 3-month deadline, we do not think a multiplatform release would be within scope. 

### What language are you using and why?
We are using purely C++ for the engine, and possibly python/lua as the scripting language. And the main reason why we chose C++ is that it's the 3A game industry standard language.

### Are you building everything from scratch?
Not everything. Some parts of the engine we will be building from scratch and others we will be importing from 3rd parties. You can see our [architecture](blogs/engine-architecture.md) for a full overview. 

### Are you going to build an abstraction layer on top of the low level APIs?
Yes, that's what the modules are for.

### What does the Horde3D engine provide?
Horde3D is what we will be using for our rendering engine. It does not handle input and GUI. We are using [GLFW](http://www.glfw.org/) for input and [imgui](https://github.com/ocornut/imgui) for GUI.

### Is your architecture the best/ideal architecture?
No, probably not. We are novices so any decision we make may be right, may be wrong. We will probably know better at the end of the journey. We think going through the process of developing an engine, even if the architecture isn't the best, is worthwhile and worth following.

### Will this be the definitive Twin-Stick Shooter engine?
Nope, definitely not. We don't expect others to use this engine to develop any game (we probably wouldn't). It will be a janky engine, that will run a game, and we will learn a lot from.

### Is your engine multithreaded?
No, definitely not. Even though we understand that parrallism is the future of game engines and Unity is recently pushing the ECS system to utilize the computational power of multi-core CPUs, we are afraid that we won't make a decent multithreaded game engine in 3 months. We are only including multithreaded for making something similar to Unity's Coroutines and in our file system using Windows' API. However, if you are following along and don't have such harsh time constraints, we encourage you to make your engine multi-threaded, and most of our decision & thought process will still be applicable.


