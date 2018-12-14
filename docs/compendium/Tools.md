# Tools

## Timeline

### Week 1
- [Profiler](../../blogs/week-1/#profiler): We imported [Brofiler](http://brofiler.com/), an open-source C++ game profiler, for our profiling needs in our engine, and we forked the repo in preparation of some needed changed.

### Week 6
- [Debug Drawing](../../blogs/week-6/#debug-drawing): We implemented a debug drawing system [in OpenGL](../../blogs/week-6/#foray-into-opengl), which required us to dip deeply into our 3D math knowledge early on. Getting it working was frustrating due to dealing with Horde3D at the same time, but it almost immediately paid dividends by [revealing some early bugs in our engine](../../blogs/week-6/#model-asset-pipeline).

### Week 7
- Patch Notes:
    - [Kind of an Editor](../../blogs/week-7/#editor): We leveraged our GUI system to make an in-game "editor" to see basic transform, hierarchy, and component information.

### Week 9
- [In-Game Console](../../blogs/week-9/#console): Along with our `Logger`, config variable, and editor systems, we decided that we wanted a Console that would allow us to change configuration variables at runtime. We did a lot of GUI and backend systems coding to make not just an in-game console, but one with autocomplete!

### Week 10
- [Editor Becomes a Component](../../blogs/week-10/#editor-component): With the advent of our levels and components, we realized we should probably package our "editor" as a nice optional system for the developer to choose to use. Upon looking into this further, we realized that our original editor code was embedded into our core system code! So we pulled everything out into an `EditorComponent` to keep things convenient and modular.

### Week 11
- [Asset Processing Tool](../../blogs/week-11/#asset-processing-tool): With more games being developed, we found ourselves annoyed with the asset processing pipeline of Horde3D, so we built an asset processing tool to process our COLLADA (.dae) files more efficiently and conveniently.

### Week 12
- [Config Editor Tool](../../blogs/week-12/#config-editor-tool): As we were developing, we found ourselves tweaking our config files more often, but we wouldn't know what variables to tweak. So we developed a tool to help ourselves and other developers modify our configuration files without having to know a priori the exact properties that we want to modify.

## Relevant Interviews

### Elan Ruskin
- [Designer-Driven Tools](../../interviews/ElanRuskin-interview/#designer-driven-tools)
- [Intimate Bond of Engine and Tools](../../interviews/ElanRuskin-interview/#intimate-bond-of-engine-and-tools)
- [Effectively Using Profiling](../../interviews/ElanRuskin-interview/#effectively-using-profiling)
### Shanee Nishry
- [Editing with a Level Editor](../../interviews/ShaneeNishry-interview/#editing-with-a-level-editor)
### Jeff Preshing
- [Low-level Debugging](../../interviews/JeffPreshing-interview/#low-level-debugging)
- [Profiling](../../interviews/JeffPreshing-interview/#profiling)
- [How Profiling Can Differ](../../interviews/JeffPreshing-interview/#how-profiling-can-differ)
### Martin Middleton
- [Versioning & Deploying Tools](../../interviews/MartinMiddleton-interview/#versioning-deploying-tools)
### Aras Pranckevičius
- [Reflecting on Windows Unity Editor and Graphics Abstraction](../../interviews/ArasPranckevicius-interview/#reflecting-on-windows-unity-editor-and-graphics-abstraction)
### Amandine Coget
- [Thinking about Usability](../../interviews/AmandineCoget-interview/#thinking-about-usability)
### Tommy Refenes
- [Customizing toward Flash](../../interviews/TommyRefenes-interview/#customizing-toward-flash)
- [Tools for Your Teammates](../../interviews/TommyRefenes-interview/#tools-for-your-teammates)

## Postmortem
**If you think a tool will be useful, develop a minimum viable product and get that in front of your users before anything else.** Seeing the real-world usage of a tool is the only true way to test if a tool will be effective or not, and that requires getting something made and in the hands of users for a decent amount of time. We were unable to predict which of our own tools would be the most used during our development timeline, but by the end, we were able to clearly tell that our asset processing tool and our engine exporting tool were used more than anything else. The other tools that we made fell somewhere between unused and somewhat used, and as far as the engine is concerned, we probably didn't need to develop the ones that were left unused.

**Engine development is tied with tool development because tools will facilitate how you build your engine.** Tools are what's used to debug the engine. You might call it something else, but the applications and software that you make for the purpose of easing or improving engine development are the same as any tools that you'd make for game development.

**Recognize the things that you make as part of your engine development that aren't engine systems or features as tools, and design them accordingly.** Tools have users who intend to get something specific out of them, so if you think about what that is for a given tool _before_ you develop it, then you can be a lot more efficient about making the tool.

**More things to know:**

*   Build an entity inspector and a scene-graph hierarchy view so that you can see all of the entities in your game, their transformations, and hopefully any other information on them as well (such as components). It doesn't need to be fancy, and it will really help with debugging throughout your engine's development and even into game development.
*   A profiler won't be useful to an engine early on, and it's not usually very hard to integrate. In some initial fraction of an engine's development, the developers will be focusing on correctness over performance, and it won't be difficult to see if someone has caused performance issues with fundamental mistakes. Later down the line, you can opt to use the profiler to see the smaller performance hits accumulate and what needs your attention.
*   An in-game console is nice to have, but isn't very necessary in this day and age. We created one mostly out of interest, and we found that none of us really used it after it was initially developed.
*   Asset processing should be easy and seamless. If possible, create an automatic asset cooker that will prepare any game or engine assets. If it's not possible, then create a tool that is simple to use and doesn't force the user to edit any specific file manually. A lot of assets flow in and out of an engine/game, and reducing friction there will not just save time but will also reduce frustration among developers.
*   Debug drawing will probably be the most used feature by the developers of the engine. Having in-engine visuals is a much stronger indicator that something is wrong than error messages. The debug drawing doesn't need to be very performant either because it can be removed using preprocessing for any release builds.