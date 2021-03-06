# Scene & Engine Loop

## Timeline

### Week 0
- [Module Manager](../../blogs/week-1/#module-manager): To control the start-up and shut-down sequences with all of our engine's modules, we created a module manager. We also had a lengthy discussion on its design.

### Week 3
- [Engine Loop](../../blogs/week-3/#engine-loop): We discussed the merits of different simulation timings within a game engine loop, and then determined on a "best of both worlds" method for running a variable timestep update (for things like rendering) and a fixed timestep update (for things like networking).
- [Timer](../../blogs/week-3/#timer): We created a clock class to support multiple clocks in-engine and a stopwatch class to record time, which is definitely useful for our engine loop.

### Week 5
- [Module Manager Say Goodbye](../../blogs/week-5/#goodbye-module-manager): We discovered that our module manager was adding more work than it was taking away, and with more systems coming into the mix, it had to go. This also allowed us to refactor some of our engine's update API.
- [Scene Graph: Data-Oriented or Object-Oriented?](../../blogs/week-5/#scene-graph-object-model): Before developing our scene graph, we compared [data-oriented designs](../../blogs/week-5/#its-all-in-the-data) for it against [object-oriented designs](../../blogs/week-5/#to-oop-or-not-to-oop). Our decision? A little bit of both!
- Patch Notes:
    - [Explicit StartUp, Update, ShutDown in the Engine Loop](../../blogs/week-5/#explicit-startup-update-shutdown): We hit our first "systemic" bug with a bad merge shutting down a module twice, and we were able to notice it almost immediately because of our engine loop's design.

### Week 6
- [Level, a.k.a. Our Scene Graph](../../blogs/week-6/#level-scene-graph): Our scene graph was designed to be Level-Entity-Component, which would allow us to reason about our game's object hierarchy more easily than a data-oriented approach. We wanted [loading levels](../../blogs/week-6/#loading-a-level) to be as painless as possible for both us and the game developer, so we decided on a C++ level definition system that utilizes some [templating reflection magic](../../blogs/week-6/#template-black-magic) to register levels to allow loading via user-defined C++ classes.
- [Transform, a.k.a. ...Transform](../../blogs/week-6/#transform): Our transform hierarchy also began to take shape, which needed to support translation, rotation, and scale in a hierarchical (i.e. parented) fashion. [Functionally](../../blogs/week-6/#the-functionality), we needed our transforms to behave just like all other transform in game engines, but we also needed to [optimize our matrix calculations](../../blogs/week-6/#the-dirty-flag) to prevent large, complex scenes from hitting our performance hard. We also decided to [give the hierarchy](../../blogs/week-6/#the-one-who-owns-all-children) over to the `Transform` instead of our `Entity` class, and then we wrapped up our first pass with a [flyby camera implementation](../../blogs/week-6/#the-small-step)!

### Week 8
- [Components Inheriting Components](../../blogs/week-8/#component-registry): Some of our components, such as our `Collider` components, inherit from some base class that makes organization and functionality easier, so we needed to be able to get any of such subclass objects with a single `GetComponent` call. We tried our previous [registration pattern](../../blogs/week-8/#first-try-another-registration-pattern) and [manual template specialization](../../blogs/week-8/#second-try-manual-template-specialization), but the solution came about from using a [dummy template parameter](../../blogs/week-8/#third-try-introducing-dummy-template-parameter) to partially specialize the components, which would allow for a very clean API and a nice inheritance-friendly component system!
- Patch Notes:
    - [Exiting the Engine Loop](../../blogs/week-8/#exiting-the-engine-loop): To escape our engine loop, we hardcoded the Escape key to exit the engine. This upset some of us, which triggered a bigger discussion over the engine's startup and shutdown API. We investigated some options for making `EngineLoop` more usable for the game developer, and we finally created an `Application` static class that would purely be an interface for the user.

### Week 9
- [More Component Features!](../../blogs/week-9/#components): As we built out more of the engine to high-level features, we realized that our component system was still lacking several features. An [`Awake` function was implemented](../../blogs/week-9/#awake-myth) to allow same-frame component initialization, our [component hierarchy was optimized](../../blogs/week-9/#preprocessing-the-component-hierarchy-tree) by preprocessing it to reduce lookup time, and we added a [uniqueness check](../../blogs/week-9/#checking-components-uniqueness) for components that really are unique butterflies.

### Week 10
- Patch Notes:
    - [Initialization Timing with Memory Management](../../blogs/week-10/#initialization-timing-and-memory-management): We began using our memory manager for even static variables, which posed a problem because static initialization happens before our system startup! So we made some decisions to reorganize our systems to properly abide by the initialization sequence.

### Week 11
- [Level Loading](../../blogs/week-11/#level-loading): Loading a level at startup was already a solved problem, but now we needed to load from one level to another. We were prepared to implement this feature, but we found many bugs from assumptions that we were not unloading or reinitializing certain systems upon loading another level.

### Week 12
- Patch Notes:
    - [API Design Improvements in Level, Transform, Entity and Component](../../blogs/week-12/#api-design-improvements): With our game jam approaching, we revisited our API design for our most basic engine classes. This included our `Component`, `Transform`, `Entity`, and `Level` classes along with their creation and access methods, and we ended up doing more than one project refactor over the entire process!
  
### Week 13
- [Static Entities Get Stuck](../../blogs/week-13/#static-entities): Static entities within our game engine have had a trickle of features be built onto them, and at this point, we added static transforms. Unfortunately, this immediately prevented us from moving any static entities from the origin because that's where they get instantiated! So we redefined "static" to mean after the level finishes loading to fix this problem.
- [Revisiting `transform` in `Component` The Class](../../blogs/week-13/#revisiting-transform-in-the-component-class): We originally used static `transform` and `entity` objects for our component initialization, but this felt very gross, so we casted the const-ness out of our variables in order to get the same functionality (which felt gross, but necessary for the time being).

## Relevant Interviews

### Martin Middleton
- [Engines Should Guide Games, Not Direct Them](../../interviews/MartinMiddleton-interview/#engines-should-guide-games-not-direct-them)
- [Custom Entity System in Unity](../../interviews/MartinMiddleton-interview/#custom-entity-system-in-unity)
### Amandine Coget
- [GUI: Immediate vs Retained Modes](../../interviews/AmandineCoget-interview/#gui-immediate-vs-retained-modes)

## Postmortem
**Your transform class will be used everywhere, for better or for worse.** When we began our development, we knew that the scene hierarchy of the engine would be important, but we thought of that more as an architectural and design importance across the whole hierarchy. In reality, how you lay out the data is really what impacts the rest of your development. Our team had many debates about where certain attributes should exist—our transforms, our entities, our components, or elsewhere—and those debates spanned many domains, including API design, data-oriented programming, and pure convenience. There's no silver bullet for this decision, so we ended up choosing what was most convenient for our short timeline: Packing the transform class with most of our necessary scene data. Because we decided on this, we were able to move on quickly and implement very scene-dependent features like collisions early on. The longer you debate about a decision like this, the more refactoring you'll have to do elsewhere.

**Templates are pretty magical, but the sacrifice is real.** We knew coming into the project that templates are quite the issue in the realm of game programming, and we wanted to avoid them whenever possible. The reality, however, is that programming without templates tends to take a lot more time and care unless you are programming monolithic systems, which has its own slew of problems. We ended up using templates throughout our engine by the end of development, and we did genuinely benefit from it: Our development was greatly simplified, and it enabled our levels and components to register themselves into our engine painlessly and without some heavy RTTI system. However, also by the end of development, our engine would take a good 3+ minutes to build a single configuration, and when we were iterating heavily this would burn us pretty badly. Templates also mask exceptions since the code doesn't have much to infer from, and in heavily used systems like components, debugging becomes impossible without prior knowledge.

The best advice we can give is that templates are capable of wondrous things, but after you've seen what they can do, try to replace them with a non-templated version and see how you fair with that. Some teams are able to keep sane build times because they're not just smart about what they do with the code, but also what they put into the code.

**More things to know:**

*   Your scene hierarchy is where most of your matrix math bugs will pop up, and you should be _very_ wary of its robustness until you have at least a few systems that have proven the scene hierarchy to be stable and accurate.
*   The memory layout of your entities and components can boost performance. We originally used pointers for our entity-component architecture, but after switching to a pooled entity system, we saw a 40% increase in performance.
*   Implementing a variable-and-fixed-update engine is not too difficult in theory, but tends to be tricky in practice. Ours has a catch-up mechanism for the fixed update that doesn't prevent frames from being dropped but rather _increases_ the frame drops caused! But this doesn't get to be an issue until you're really pushing the performance of your engine, so don't worry about it at the start.
*   Some component features are not used as much as you might think they will be, and others _shouldn't_ be used as much as you think they should. For instance, we can restrict a component to being unique on an entity in our engine, but that's only specifically necessary for our collision handling system. In all other cases, it slows down performance!