# Collisions

## Timeline

### Week 7
- [Intersection Testing](../../blogs/week-7/#collisions): Collisions were needed for a few key cases in our game (bullets hitting enemies, enemies hitting players, players hitting walls), and each of these things can be encapsulated by primitive shapes like spheres, capsules, and boxes. We referenced *[Real-Time Collision Detection](https://realtimecollisiondetection.net/)* to get our collision system started with some of the simpler collision scenarios, like box-sphere and sphere-capsule.
- [How Should Collisions Be Handled?](../../blogs/week-7/#sending-collision-events): Detecting collisions is only half the battle. We considered multiple options for signaling when a collision occurs in our engine, which include callbacks on every collider, callbacks on every component, and a specific component that houses collision handling logic.

### Week 8
- [How We Ended Up Handling Collisions](../../blogs/week-8/#collisions): After weighing our decisions, we went the `CollisionHandler` component route where a single component holds the callbacks and the colliders reference that component. Some messy stuff can happen with that, such as when you move colliders away from their handlers, but we came up with some basic fallbacks for those scenarios.
- [Box-Capsule is the Worst](../../blogs/week-8/#box-capsule-collisions-will-be-the-death-of-us): Most of our intersection testing code worked out after our first pass, but box-capsule collisions continued to best us. We got it working in *most* cases, but didn't have the time to vet it for all cases (and we believe that GJK would be a better alternative for any future attempts at a collisions system).
- [Extra Features](../../blogs/week-8/#raycasting-functionality): Luckily, collider-collider interactions aren't the only thing that collisions systems are useful for, so we spent some time on features like raycasting that would provide us a lot of utility for games and tests in the future.

### Week 9
- [The Dynamic Bounding Volume Tree](../../blogs/week-9/#collisions-dynamic-aabb-tree): When we started the collision system, we discussed a method for speeding up the intersection tests by culling out big groups of colliders with a single test. Well, that's DBVT! Our investment was validated by the results, with an over 4x performance increase!

### Week 11
- [And Now We Solve the Collisions](../../blogs/week-11/#collision-solving): The next step for our collisions system was to keep our colliders from intersecting, a.k.a. collision-solving. We leveraged our existing collision system to start and made a [pretty flaky collision solver](../../blogs/week-11/#aabb-disarray), then we took a closer look at how Unity's collision system behaved and took another swing at it in a [case-by-case fashion](../../blogs/week-11/#a-case-by-case-solution).
  
### Week 13
- [Solving More Correctly](../../blogs/week-13/#collision-solving): Our box collision solving still had some slippery kinks that we worked out by baking the collision solving into the intersection test phase of our algorithm, then we topped it off with a [little nudge in the right direction](../../blogs/week-13/#that-epsilon-spice) to prevent indefinitely prolonged intersections. We also [added "mass"](../../blogs/week-13/#mass-in-a-collision-system) into an engine with no physics so that colliders could seem heavier!

## Relevant Interviews

### Tommy Refenes
- [Using 3rd Party Libraries](../../interviews/TommyRefenes-interview/#using-3rd-party-libraries)

## Postmortem
**Use a physics library. Seriously.** Well, if you want to implement your own physics engine, then maybe you should dig into an existing one and see how they do it, but if you just want physics or collisions in your engine, then for real—_don't implement your own!_

We'll just talk about collisions from here since that's all we created in our own engine. Collisions will be one of the most error-prone systems in your engine because even when your math is correct, you may still be missing edge cases, or your scene hierarchy update is at odds with how your collision system processes its spatial data structure. This is not to mention that how you implement the collisions is up to you, but the ways that you understand better might be a bad choice in the long run. We decided to implement our collisions geometrically which meant we had pretty and fast equations that would determine intersections, but once we got to the oh-so-complex case of a capsule and a box colliding, we found that neatness faded away and we were stuck with a long and very case-based intersection test algorithm.

You might think we're being overly pessimistic by recommending against building your own collision system, but **one of the nice parts of a collision system is that you can easily replace an existing one with your own later down the line.** Most of the features in a collision system are ones that you find in any implementation, so swapping them out doesn't tend to affect other systems unless you made assumptions about specific parts of the collision system, like how collisions are resolved.

**Handling collisions is half the battle.** Our first inclination for the collision system was that we needed to mathematically solve all of our intersection tests and robustly implement that, which is definitely something that we needed to do eventually, but we quickly realized that our collision system meant nothing if we didn't have any collision handling system on top of it. And the collision handling system will be more intertwined with the rest of your engine depending on how you implement it. Ours relies on our scene hierarchy to match collisions to their collision handlers, but you could also just point collisions directly at their handlers and be done with it. Because we chose the more automated fashion, we also had to handle more cases such as when collisions or collision handlers are moved in the hierarchy.

**More things to know:**

*   GJK is the industry standard for a reason. Detecting collisions geometrically tends to break down into case-by-case tests for anything other than spheres, and even then you'll find a lot of bugs and inaccuracies because of the breadth of the code at that point.
*   Raycasting will be a widely-used feature of your collisions system. Obviously colliders are good for things like trigger zones or physics simulations, but any game with the concept of "shooting" or "pointing" will need raycasting for many of its features.
*   Spatial partitioning can be very expensive when used incorrectly. Gathering results from a spatial partition (like for our dynamic bounding volume tree) more than once a frame will impact your performance significantly, so using heuristics to prevent over-calculation and sharing the data with other systems is important to keep things running smoothly.
*   For collision solving, accuracy is more important than performance. In the worst case, you can solve with only one iteration of collision resolution per frame and just let the solution work itself out over multiple frames, whereas if the solution is inaccurate, that will propagate to a totally incorrect behavior.
*   The ordering of intersection testing, the collision resolution, and your collision callbacks matter. In our engine, we use our intersection tests to determine if we even need to perform collision resolution, then we move our colliders to where they should be, _then_ we run the collision callback functions. If the callbacks are run earlier, then any translation they do on entities would be overwritten by the collision resolution!
*   Test different sizes and scales of your shapes along with different rotations. Your code may be built on assumptions of uniform transformations, and it will definitely break as soon as something is not uniformly transformed!