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
- [And Now We Solve the Collisions](../../blogs/week-11/#collision-solving): The next step for our collisions system was to keep our colliders from intersecting, a.k.a. collision-solving. We leveraged our existing collision system to start and made a [pretty flaky collision solver](../../blogs/week-11/#aabb-disarray), then we took a closer look at how Unity's collision system behaved and took another swing at it in a [case-by-case fasion](../../blogs/week-11/#a-case-by-case-solution).
  
### Week 13
- [Solving More Correctly](../../blogs/week-13/#collision-solving): Our box collision solving still had some slippery kinks that we worked out by baking the collision solving into the intersection test phase of our algorithm, then we topped it off with a [little nudge in the right direction](../../blogs/week-13/#that-epsilon-spice) to prevent indefinitely prolonged intersections. We also [added "mass"](../../blogs/week-13/#mass-in-a-collision-system) into an engine with no physics so that colliders could seem heavier!

## Relevant Interviews

### Tommy Refenes
- [Using 3rd Party Libraries](../../interviews/TommyRefenes-interview/#using-3rd-party-libraries)

## Postmortem
