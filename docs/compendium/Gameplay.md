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

## Postmortem
**Build games as soon and as often as you possibly can.** And if you can't do a "game" yet, then do something that you would be proud of as a starting programmers like a moving cube! We initially thought that we would just focus on engine development with some tech demos here and there, but games ended up being the stars during our development. Games test engine features in their natural environment against correct use cases and, most importantly, with other engine features! **Games will reveal more bugs in your engine than tech demos will.** Don't get us wrong, tech demos will prove whether or not your feature is working correctly, but games evoke a usage of your engine that just happens to break it a lot.

Thankfully, our team had a lot of game engine programmers tell us from the get-go that we should be building games with our engine. We initially thought that they were just being overzealous with game development, but as it turns out, they were just being wiser than us. A good way to look at it is this: _If you want your car to be safe and effective to drive on the road, would you want it to only be driven in the small testing course in the manufacturing building?_

**At least at the start, target your engine at a specific game. Do _not_ try to build a generic engine from the get-go.** When beginning to plan out our engine, we didn't weigh what we wanted to make with it very seriously because, if we're honest, a lot of different genres of games share most of their tech. But again, thanks to the wisdom of professionals, we were taught that _what_ tech is used is different from _how_ that tech is used. Having a target game (or, at the very least, genre) lets you create tests, demos, and other features that coalesce more easily, and it also makes features a lot easier to cull from your engine when you have a deadline.

We started our development with a target game in mind, and it allowed us to refer back to a "ground truth" whenever we were implementing features. That ground truth was rarely where we ended development, though, but because we had that target, we could appropriately determine when we needed to focus on the target game's features and when we could expand upon existing features. This ended in a more feature-full engine than we anticipated having at the beginning, which is pretty contradictory to the action of targeting a single game for development!

**More things to know:**

*   The genre that your engine is targeting isn't that important. It can help you narrow down the systems that you believe your engine needs, but the features will be better dictated by a specific game.
*   Tech demos will effectively reproduce bugs, help you resolve them, and keep you from regressing any features, so leverage that whenever you run into bugs that deserve the investment.
*   Hold onto past tech demo and game code as reference of how you want people to use your engine. Half of the battle of a game engine is its API and learnability, and you've got perfect examples right at your fingertips!
