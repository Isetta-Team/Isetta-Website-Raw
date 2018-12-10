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

### Jeff Preshing
- [System Integration](../../interviews/JeffPreshing-interview/#systems-integration)
### Aras Pranckevičius
- [From Graphics to Plumbing](../../interviews/ArasPranckevicius-interview/#from-graphics-to-plumbing)
### Casey Muratori
- [Builds: Keep 'em Simple](../../interviews/CaseyMuratori-interview/#builds-keep-em-simple)

## Postmortem (IN-PROGRESS)
*   Asset pipeline needs to be defined and easy
    *   Horde3D made this a mess for us
        *   Processing was difficult because of certain file types
        *   Create small tools to make it easy for your user but better than a tool would be to automate it
    *   Some defined things are necessary, like having a defined "Resource" folder
        *   You may want this to be something that is just a constant (not changeable by user)
*   Use configuration files, start them early
    *   Creating a configuration system not defined in code helped with iteration
    *   Could be used for other systems to change things at runtime
*   Optimizing the build pipeline not only saves time, but it also keeps things clear among teammates
    *   Builds can be flagged as broken as soon as they break with automated building
    *   Making gradual updates to the build doesn't require a big time investment from any developers
    *   Be careful about the local repository you're building into with an automated git submission! If you're using that computer to work, you can accidentally wipe your work
*   Changing the structure of your files mid-project should be avoided if possible
    *   Refactors of the project can cause immediate productivity issues as well as lasting issues (version control can really get thrown for a loop after a refactor)
    *   Assumptions made by certain systems may be forgotten about, and tracking those errors down will likely be difficult
*   Debug, Release, Release Editor configurations should be tested regularly together
    *   Bugs across configurations always happen more often than you'd hope
    *   Also, distinguishing how build macros are used (e.g. EDITOR) is important for making the engine's behavior understandable for all of your developers
*   Test your build pipeline on a clean computer
    *   Includes setup steps, this will ensure you don't have any assumptions of your computer
