# Build & Resource Management

## Timeline

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

## Postmortem
