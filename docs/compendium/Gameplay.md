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
- [The Engine Dictates the Game](../../interviews/AdamSerdar-interview/#the-engine-dictates-the-game)
### [Amit Patel & Rob Shillingsburg](../../interviews/AmitRob-advice/)
### [Jason Gregory](../../interviews/JasonGregory-advice/)

## Postmortem (IN-PROGRESS)
*   Start building games as soon as you can
    *   If you can't do a "game", then do something that you would be proud of as a programmer who just started programming; like a moving cube!
    *   Games are naturally built iteratively, so starting small and growing the game with new features will work naturally
*   Make games often
    *   Make an in-depth, feature rich game is good, but that will limit you to the designs and use cases of what you have
    *   Starting a new game allows you to focus in on whatever subsystems you want, new or old
*   Games reveal more bugs than tech demos.
    *   Games imply more subtle, complex, and intentional use cases, which makes bugs easier to spot
    *   Tech demos will effectively reproduce bugs, help you resolve them, and keep you from regressing any features
*   Hold onto past tech demo code as reference code of how you want people to use the engine
    *   Half of the battle of a game engine is getting people to learn how to use the engine, and example usages are effective for learning from
*   At least at the start, target your engine at a specific game. Do _not_ try to build a generic engine from the get-go.
    *   A game engine that targets a genre or game can be adapted for other games
    *   Most features used in games are shared heavily across genres, so you'll won't even be stuck in a particular genre if you change your mind
    *   Having a specific game allows you to (1) cull out any unneeded features, (2) determine what needed features should really be doing, and (3) test your engine features as soon as they're done!
*   The genre isn't that important
    *   If you don't know what game you want to make OR what features you want in your engine can help narrow down
    *   In professional environment game drives engine, genre is then decided near end
    *   In learning environment, features may be chosen first then genre can help narrow what game you'd like to make but really it's the features deciding which game you make
*   Start building games as soon as you can. When you don't think you can, try to get something that you might be proud of when you first started programming, like a cube moving then add input!
*   Building games will produce more engine bugs than any feature demos you might have. Tech demos are great to reproduce and resolve the bugs.
*   Try to keep your past tech demos. These can be used as code snippets of how you would like people to use the engine.
*   Have a game you are building the engine for. Don't set out to build a generic engine.
