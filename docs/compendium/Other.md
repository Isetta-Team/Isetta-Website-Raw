# Other Topics

<!--
## Timeline

### Week 0
- []()
 
### Week 1
- []()

### Week 2
- []()

### Week 3
- []()

### Week 4
- []()

### Week 5
- []()

### Week 6
- []()

### Week 7
- []()

### Week 8
- []()

### Week 9
- []()

### Week 10
- []()

### Week 11
- []()

### Week 12
- []()
  
### Week 13
- []()

### Week 14
- []()

## Relevant Interviews

## Postmortem
-->

## Debugging Postmortem
**Debug drawing was our (and very likely will be your) most used feature in the engine.** You can get some utility out of the output log, but seeing information visually in the same space as your actual games and tests makes a world of difference. We didn't anticipate that this would be so heavily used because we figured that our systems would be testable in their own individual ways, but fortunately, one of our programmers decided to do it early on and we've seen great dividends since. Particularly, whenever we're doing any precise or math-oriented feature in the 3D space (i.e. collisions), our debug drawings are usually the only effective form of information.

That being said, **debug drawing is expensive, invasive, and clunky, so be mindful of how you implement it.** Even if you implement it using your rendering engine (which we recommend you do to keep things simple), drawing out a bunch of lines and faces based on individual function calls weighs heavily on the system, so make sure you preprocess your debug code out of your release builds! Similarly, debugging a low-level graphics API can be difficult, especially when you're using a rendering library for your graphics, so try to do your debug drawing features in a sterile project before integrating it all with your own engine's rendering.

**Visual Studio has a lot of useful features, and knowing how to use them can mean the difference of solving a lot of your bugs.** These include the Watch windows (Auto, Local, and general Watch ones), the Call Stack, the Output, the Memory watcher windows, and of course, code and data breakpoints. We won't cover those things here (Google will do them more justice than we can), but if you decide to jump into using Visual Studio or C++ without learning how to use these tools, you will be making a lot of guesswork when trying to fix seemingly strange bugs that in actuality are related to memory alignment, hidden callbacks, or something even worse.

We had the fortune of having four programmers who all knew some of what Visual Studio has to offer, so we would often see a good debugging practice from one of the other programmers and adopt it ourselves. But it's very easy to work on a problem the only way you know how for hours without considering that there may be a better way, so you should make an effort to stop and ask yourself, "is there a better way to find this bug?"

**More things to know:**

*   Unit testing can be avoided, at great risk. For low level APIs like a math library, you _must_ unit test everything because that will permeate throughout your code. For higher level things, you should do partial unit tests for systems that tend to work with other systems in case a bug regresses it, such as your scene hierarchy. Tech demos will yield similar results, but not as stringently.
*   Be excessive with your assert messages. Asserts are pulled out of release builds entirely, so you won't affect your final performance, and they avoid silly errors that shouldn't happen but do all of the time anyways.
*   Know the difference between your errors and your asserts. For us, asserts are bugs that exist in the engine and are caused by the engine (like allocating less than 0 bytes), whereas exceptions are errors that are caused by a user misusing an engine feature.
*   Visual Studio can be really annoying with how it presents error messages, and when you make a DLL of your engine, it will only get worse. Find a robust method of communicating engine errors to your game developers if you want them to be able to know what goes wrong within your engine.