# Tools

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

## Postmortem (IN-PROGRESS)
*   If you think a tool would be useful, develop a MVP, put it in front of the users, get feedback, fix those, and then wait a few weeks to see if the tool is actually providing value before pouring endless hours into something that won't be used.
*   Engine development is tied with tool development, you will end up making tools for your engine to help debugging. Recognize it is a tool, design it accordingly.