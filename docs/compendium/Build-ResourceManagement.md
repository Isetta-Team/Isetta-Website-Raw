# Build & Resource Management

## Timeline

### Week 2
- [Engine Config](../../blogs/week-2/#engine-config): By [analyzing our needs](../../blogs/week-2/#requirements) and [referencing established engines](../../blogs/week-2/#comparison-with-other-engines), we designed and implemented a surprisingly easy to use configuration system.

### Week 5
- [Loading Nested Resources with Horde3D](../../blogs/week-5/#loading-nested-resources): Many of the Horde3D resources that we use have resources nested within them like materials and geometry. Horde3D would mark these down but not load them when asked to, so we poked our way in to get a better handle on whether resources were unloaded or not.

### Week 6
- [DLLifying the Engine](../../blogs/week-6/#dll): Eventually our engine will need to be a black box, as is the way of game engines. We started this journey by building our engine into a Dynamic Linked Library to be used by a separate project, and after marking all of our code with the correct intrinsics, we created a separate testbed project and made our first official external project!

### Week 11
- [Asset Processing Tool](../../blogs/week-11/#asset-processing-tool): With more game development happening than ever, processing our game assets was becoming more and more annoying. To remedy this, we built an asset processing tool to process our COLLADA (.dae) files all in one simple software package.

### Week 12
- [Exporting the Engine](../../blogs/week-12/#build): Now that we set up our whole DLL build configuration and we were developing several games, we needed a way to get all of the files together conveniently. So we created a tool for exporting our header files along with our build and resource files into one packaged location, which could then be passed along to any project using the engine.
  
### Week 13
- [Building a Build Pipeline](../../blogs/week-13/#build-system): Our previous build tools were all functioning well and good, but we found that building the engine was taking more of our time with every day. We already had a build pipeline for our website set up in Jenkins, so we drafted a couple of build scripts to be used with our header exporter from Week 12 and gave them a test drive. ...After many more test drives, we nailed down the last details and had a smart, effective build pipeline on our hands!

## Relevant Interviews

### Jeet Shroff and Florian Strauss
- [Keep Compile Times Small, Link Times Smaller](../../interviews/JeetShroff-FlorianStrauss-interview/#keep-compile-times-small-link-times-smaller)
### Jeff Preshing
- [System Integration](../../interviews/JeffPreshing-interview/#systems-integration)
### Aras Pranckevičius
- [From Graphics to Plumbing](../../interviews/ArasPranckevicius-interview/#from-graphics-to-plumbing)
### Casey Muratori
- [Builds: Keep 'em Simple](../../interviews/CaseyMuratori-interview/#builds-keep-em-simple)

## Postmortem
**Optimizing the build pipeline not only saves time, but it also keeps things clear among teammates.** We've heard varying advice from professionals on how engine builds should be managed, but from our own experience, we can definitely say that it's a topic worth putting serious investment into. The first reason is obviously build times, which can balloon to greatly annoying proportions if you liberally use C++ features like templates and have lots of separated files and dense headers. The second, less known reason is work friction. When we started developing the engine, we could make builds quickly and cleanly almost always because there was nothing in it and no systems touched each other, but over time, our systems began to intermingle, then we began to organize our Visual Studio files into different project structures, then we began using a DLL for actual game development. Next thing you know, our developers are frustrated with having to wait almost an hour just to iterate on one system within our testbed project simply because that's the way things are set up!

So optimizing your build process can mean a lot more than just saving time on the build. In the latter half of the project, we set up an automated process on a shared team machine that would regularly build the engine and push that to a remote repository, and this gave us two swanky benefits: We could make gradual changes to the engine and eventually those would propagate out to others naturally, and we would know as soon as the engine breaks without having to build it ourselves and be greeted by a nasty error message. Spending more time on our build pipeline became more rewarding during the project because of how much it influenced our development time, so it's definitely something to be watching and improving from the start.

**The asset pipeline of your engine needs to be clearly defined and easy for the game developer.** Our asset pipeline was unfortunately mostly determined by Horde3D, our graphics library, which made things a mess for us to manage. Processing our resources was difficult because we needed to use particular file types, so we bit the bullet and invested time in some small tools that automated a lot of that process for us. By the end of the project, we were able to mostly ignore the asset pipeline thanks to this, but for future projects we'll definitely consider automating this pipeline from the beginning.

**More things to know:**

*   Some predefined things are necessary, like a "Resources" folder. To make everything modular also makes your engine brittle, and the last thing that you want your probably bug-ridden engine to be is more brittle.
*   Use configuration files, and start them from early on. We noticed very early in our development that we were hardcoding some dangerous configurations, and by implementing this system early, we also established good practices for exposing our engines variables to the game developer.
*   Changing the structure of your files mid-project should be avoided if possible. Refactors of the project can cause immediate productivity issues as well as lasting issues through the remainder of the project, like version control messiness.
*   _Debug_, _Release_, and _ReleaseWithDebugFeatures_ configurations should be tested regularly together. Bugs across configurations happen more often than you'd hope, especially when using 3rd party libraries.
*   Test your build pipeline on a clean computer, including the setup steps. This will ensure that you don't have any assumptions about making the build from your own computer.