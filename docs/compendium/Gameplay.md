# Gameplay

## Timeline

### Week 0
- [Our Example Game](../../blogs/week-0/#building-with-an-example-game): Some advice that we received from many game engine developers was to target our engine at a *specific* game, so we designed and implemented a game in the Unreal engine that we could try to build in our own engine as our goal.

### Week 7
- [Our First Game](../../blogs/week-7/#first-game): Seven weeks after starting, we finally developed a game with our engine in an entirely different Visual Studio project than our game engine's! We discovered a lot about how to use a DLL, the importance of header files, and the asset pipeline of our engine and Horde3D. But most importantly, we found many bugs, including several on our `Entity` and `Transform` classes.

### Week 9
- [Event Messaging System](../../blogs/week-9/#event-messaging-system): We developed an event messaging system for the sake of communicating between systems in a much more decoupled and flexible fashion. We implemented a [generic method of attaching to events](../../blogs/week-9/#storing-all-event-data) via `string`s for names and `EventParam`s for parameters, and we also differentiated [queued and immediate callbacks](../../blogs/week-9/#queued-callbacks-vs-immediate-callbacks) for more precise control between our systems.

### Week 10
- [Our Second Game](../../blogs/week-10/#second-game): Our first game was a simple twin stick shooter, so we wanted our second game to be a departure from that. We wanted to leverage our networking features including `NetworkTransform` along with some UI elements. Again, we found that developing a game in the engine reveals all of the bugs—especially fundamental ones!

### Week 11
- [AI Pathfinding](../../blogs/week-11/#ai-pathfinding): Although AI isn't necessarily part of game engines, we wanted to implement it as a high-level piece of the engine to be generally usable by games. For twin stick shooters specifically, we [weighed our options between A* and vector field](../../blogs/week-11/#a-versus-vector-field) implementations and eventually landed on using [vector flow fields](../../blogs/week-11/#building-the-vector-field) with [steering behaviors](../../blogs/week-11/#integrating-steering-behaviors) in the end.
- [Oh, Right, the Example Game](../../blogs/week-11/#full-featured-game-demo): We finally began development for the target demo game of our engine by building up our menu system and in-game UI.
  
### Week 13
- [Hitscan](../../blogs/week-13/#hitscan): To get the most out of both our engine and our demo game, we [decided to use hitscan](../../blogs/week-13/#why-hitscan) for our gunplay implementation. We mostly [leveraged our existing collision system](../../blogs/week-13/#why-hitscan) and thought carefully about the [data flow through our game](../../blogs/week-13/#being-mindful-of-the-data). [The results](../../blogs/week-13/#the-results) proved our investment was worthwhile!
- [Our Third Non-Demo Game](../../blogs/week-13/#the-knight-game): Keeping with tradition, we developed a game that was not our target demo game in order to test out a conglomerate of our engine's features. This time, we pushed our collisions system to the maximum which, as you can probably guess, revealed lots of bugs with it!

## Relevant Interviews
### Tommy Refenes
- ["Garbage Physics"](../../interviews/TommyRefenes-interview/#garbage-physics)
### Adam Serdar
- ["The Engine Dictates the Game"](../../interviews/AdamSerdar-interview/#the-engine-dictates-the-game)
### [Amit Patel & Rob Shillingsburg](../../interviews/AmitRob-advice/)
### [Jason Gregory](../../interviews/JasonGregory-advice/)

## Postmortem
