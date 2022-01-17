# The Best Driver Understands What is under the Hood

_Florian Strauss worked at Blue Tongue Entertainment for 11.5 years. There he worked on two proprietary engines ranging on hardware from the Nintendo Gamecube through the PS3. Florian moved to America in 2012 and began working for Santa Monica Studio on the God of War franchise, and has been there ever since serving as an engine programmer and engine director. He plays a bit of music, studied Brazilian jiu jitsu for over six years, and is a cocktail connoisseur._

_Jeet Shroff first worked on device drivers at AMD, then began working in games in 2004 at Electronic Arts in Vancouver, where he worked on the Core Technology team. While at EA he worked on a proprietary animation engine that was later called ANT. Over the next 12 years, Jeet worked on FIFA, the Dunia engine for Ubisoft’s Far Cry series, and the Apex engine for Avalanche Studios’ Just Cause series. His contributions largely focused on animation, AI and other gameplay systems. He moved to Santa Monica Studio in 2016 and has served as a gameplay engineer and gameplay director during the past three years._

(The following is a paraphrased conversation we had with Florian Strauss and Jeet Shroff.)


## How To Get Better Starting Off

From their first experiences working on game engines, Jeet and Florian suggested that you don’t expect such large or complex codebases when working on a game engine, especially over 10 years ago when Unity and Unreal weren’t as accessible as they are now. But regardless of the engine that you’re working on, the fundamentals are what matter; engines change, projects change, technology will advance, and having strong fundamentals will prepare you for that. 3D math is something that holds a lot of people back, but learning it and getting it down is what really helps with engine programming. Learning the hardware is important, too; back in the day, some programmers would take responsibility for a whole platform because they knew how the hardware functioned. A lot of what you need to learn is like skateboarding, you have to learn _how_ to learn—otherwise how do you know what you did is right?

To learn this stuff best, you should work with better people who have more experience. Things are a little different now because there are many more resources available, but when Jeet and Florian were learning, the best ways to learn were to talk and work with professionals who had done these things. If that doesn’t work for you, then digging into a problem by putting down a breakpoint and walking through it is the next best thing. Getting into those problems is where you learn.

## AI Baked Into The Engine

AI architectures generally don’t have to live within the engine library, but they do use a wide range of things from the engine, ranging from serialization to object models. What AI architecture you’ll support, though, is based around the type of game that you want to make. For AI, you look at how deterministic, reusable, data-oriented, and long-term you want it to be. You could go with planners, decision trees[^1], etc. And you also have to model the AI with whatever fidelity you’re looking for—how abstract you want it to be. Some smaller projects tie together all of the AI and decision-making, but Santa Monica Studio tries to avoid doing that so that so they aren’t coupling their systems or architectures. That way, there’s no need to worry about touching the logical states or animation systems if the team rips out the AI architecture.

[^1]: A **decision tree** uses a graph/tree data structure to map decisions and their possible outcomes.

It helps to think of an engine as the fundamental layers that you need to operate with to make that game happen. You need to figure out everything that you need to do with some gameobject, then determine the other systems on top of those like physics. It’s less likely for you to rip out something that’s part of your fundamental layers that way. You can also then use things like your AI architecture in other engines if it’s really separated.

## AI in Games and in Engines

The current big focus on machine learning in games is pattern-matching. Which is also why the newest hotness is motion-matching. People are spending time on machine learning because game developers now have massive amounts of data—gigabytes and gigabytes—and you’d rather have some machine system look at a pattern of what an attack is and annotate everything for you.

Game AI might not be changed all that much with the new developments in machine learning, though. Jeet’s team on _FIFA _had an AI system that would take in what skill moves a player was using and learn how to recognize that and counter it with other skills. But the games industry still hasn’t found what the correct balance is between AI and design. Balancing also becomes a lot harder when a game needs repetition and mastery. The industry hasn’t really found what the uncanny valley[^2] of AI is yet. 

[^2]: The **uncanny valley** effect is when non-human audio/visual simulations attempt to closely mimic humans that isn’t perfectly realistic or convincing, causing an unsettling feeling.

The presentation side of AI is where it becomes really useful, like making things look alive and relatable by having them look in the correct direction dynamically or other things that add more character. In _Half-Life_, when a character can’t path-find[^3] correctly, the character just states it out loud to the player. That’s something you could call a “behavioral solve.” Instead of doing complex AI to solve these problems, you can do things that are more fun and predictable. That’s another balance to explore for the future of AI. Dialogue is an area that could potentially be improved by machine learning. Dialogue and conversations could be expressed through this kind of system; imagine if the player makes some choice, and the game looks to some cloud database to figure out how to respond.

[^3]: **Pathfinding** is an application which routes a computer actor between points/to a point, avoiding obstacles and using a heuristic to determine the path to take.

## Do What You Need, Not the Things You Don’t

The animation system ANT was built for, and by, the _FIFA_ team, so it was originally not meant to be shared. A lot of the gameplay logic was coupled into it. EA began to realize that _NHL_ and other games could use the animation system, so the _FIFA _team began extracting the game logic from the animation technology for ANT and making it more shareable, and that began to be used more and more by the Frostbite engine.

Along those same lines, engines warrant the type of games that you make. All sports games could benefit from shared technology, but for Santa Monica Studio, who are specific about the types of games they are trying to make and the types of hardware they are trying to target, it’s better not to try unifying it all under one umbrella. All engines typically go down that path; you have limited people and limited time, so you pick and choose the things that you really need. Nobody criticizes an engine for not having something that a game made on it doesn’t use, after all!

## Sharing vs Specializing Engines

Santa Monica Studio tries to focus on a very specialized set of technology that tries to solve a very specific set of problems, especially since the team has a core game and a specific hardware to hit. Every 1st party studio at Sony has their own specialized engines, so if you want to squeeze every bit of power out of the hardware, that seems to be the best approach. But all engines play animations and load textures and so forth, so the differentiation between engines becomes more gameplay-specific, like high-quality animation solving and RPG inventory management. If Santa Monica took another engine and used that instead, the low-level implementation of the engine may be even better than what they had, but the gameplay-level implementation will be worse because it was optimized for another project and another team. Using a shared engine across many studios and specializing an engine for every individual studio can both work, but the difference comes from the workflow and content creation that the engine enables. Engines are necessarily vastly different under the hood, but the workflows that they expose will be different. Some engines will allow you to live edit, others will store large assets efficiently. Those are the reasons why you should pick some engine over the other. With games at the size that they are, engine advantages and disadvantages come from the workflows that they expose.

## Target Platform

Writing engine code has gotten more directed over time, especially because the hardware is a lot more homogenized nowadays. The abstraction layer for the hardware has gotten a lot lower, which has made it easier to work with the hardware; now you just abstract things at a mental model level. Programming for multiple platforms is just easier nowadays. That being said, Santa Monica Studio targets everything they do at PlayStation hardware. Imagine all of the overhead of dealing with job systems and using the right chips and everything. All of that goes away. The team just tries to maximize the use of the CPU and GPU now. Thanks to targeting specific hardware, they can take advantage of knowing exactly how the hardware is working. Even cutting out a few cycles in shader code can be worthwhile in certain scenes.

## Keep Compile Times Small, Link Times Smaller

Keeping your compile time low can depend on the project. Sometimes, the compiler’s methodology can suck! Santa Monica Studio used to use GCC[^4] which has historically sucked at compile times; compilers have gotten much better than they used to be, though. One of the things that Santa Monica tries to avoid as a team is templates; compilers tend to really struggle with those. Just keep things simple; the more things are separated, the better off you are. Modern C++ has plenty of things to dislike, but it’s just much easier for a compiler to compile something if it’s more C-like. Anything like templates or lambdas are much harder for the compiler.

For a big team setting, distributed systems[^5] like build farms[^6] have also made compile times much better. It also makes the link times more important, since you do a lot of small iteration, linking is what affects productivity at that point.

[^4]: **GNU Compiler Collection (GCC)** is a compiler system that supports a number of programming languages, including C++.

[^5]: A **distributed system** is a system where the tasks are split between multiple coordinated, communicating networked computers whose actions aim to complete a common goal.

[^6]: A **build farm** is a cluster/group of servers whose job is to compiler programs remotely, typically used in cross-platform development, testing, and speeding the compilation process.

## Scoping for Multipurpose

In keeping an engine from becoming overgeneralized, Jeet and Florian suggest scoping things more appropriately when you know it’s something that’s going to be expanded upon. If you think of it like a programming model, it’d be more like aggregation than inheritance. You can structure the features as different components that you can take or leave. Game engines are becoming more modular. Look at the Unity store! That store model makes sense, but it’s also easier for maintaining your code. If anything touches the code too much, it’s really difficult to replace, refactor, or add to in the future.

## Understand a Problem At a Time

The TOSHI engine Florian worked on while at Blue Tongue was originally aimed at Gamecube, Xbox, PS2, and PC, and there was another engine under Blue Tongue for Xbox 360 and PS3. Moving from those custom engines that Florian had built up from the beginning to the Santa Monica engine, an engine that was already built by another team, was actually not that bad. You don’t need to know what’s under the hood for the whole engine to get started; understanding what things are and how they connect allows you to figure things out on a problem-by-problem basis and learn what’s under the hood over time. Understanding the high level concepts and using a “divide and conquer” technique is a pretty good philosophy.

## The Problems That Matter To Your Studio

Jeet and Florian assessed that it’s hard to predict anything in the games industry, but custom engines aren’t going away. AAA studios will always need them. In Florian’s words, "If you want to be a racecar driver, you can’t just be a good driver—you need to understand anything under the hood." It’s definitely beneficial if you want to push something to the limit, too. It makes financial and business sense for a small or mid-sized studio to solve more game-facing problems than engine problems, but as a Sony studio, one of Santa Monica’s core tenants is to push the hardware, which makes them customize the gameplay experience to use that hardware. And other studios will probably follow that concept, whether they need a good open world system or a good terrain and destruction system. The need to be different is really important. There’s a lot of content saturation in the games industry, and the technology you use can drive the differences that you feel on the sticks.

_Interview conducted November 2, 2018._