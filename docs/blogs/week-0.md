<!----- Conversion time: 3.659 seconds.


Using this Markdown file:

1. Cut and paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* GD2md-html version 1.0β11
* Wed Aug 29 2018 19:14:36 GMT-0700 (PDT)
* Source doc: https://docs.google.com/open?id=1p6djHOckDcCe1eoLuXgdDPANq_xhKoMTioKqmWB9Qp8
----->



## Introduction



*   Mission statement
*   Explanation of what the project is
    *   What it isn't (a walkthrough/tutorial)
        *   What level of knowledge already? (is this the place to do it)
    *   How many revisions to this point of what the project is
    *   Basic overview of being engine focus more on the blog/interview deliverables I think
*   Explanation of the ETC (give context on what the semester will look like)
*   Introduce us? (to an extent yes)
*   Demographic

The Isetta Engine project is a student-driven project about demystifying game engine development and providing a roadmap and relevant knowledge for novice developers. To do so, [our team](../team.md) will make a game engine by ourselves starting from a rendering framework, and document the process, pitfalls, and advice for our audience with periodic blogs. Besides that, we will conduct interviews with experienced professionals to augment our novice perspective. We believe the novice perspective from our blogs and expert perspective from the interviews will nicely come together and form a complete document to help people get started. 

The reason we think more work needs to be done in this field is that too many game engine developers wait until the completion of the engine, typically years, to talk about the development which typically loses the minutia of the actual daily struggles. There are others who document the development which has been going on for years, which makes it a daunting task for newcomers to join. 

Although the project is aimed at helping novice developers, this is not to be used as a sole source of learning engine development. Being new engine developers ourselves, we can't guarantee how we develop the engine will be correct, which is why interviews will help the project remain grounded. This means others learning can use what we've done as a guide and not necessarily the ground truth. The blogs won't be a walkthrough/tutorial/step-by-step instructions on how to develop an engine. We are learning as we do and suggest you do the same. 

	

This project is being done as a student-pitched project at the [Entertainment Technology Center](https://www.etc.cmu.edu/) (ETC). The ETC is an interdisciplinary master's degree program at Carnegie Mellon where students' main focus is working on a project each semester during a 3-month time period. The semester's work will be presented to faculty and peers throughout the semester with feedback and critique being presented to help aid in the project development. The project idea has gone through multiple iterations to 



1.  simplify the engine to be feasible within 3 months and
1.  deliver content that would be useful and, hopefully, enjoyable to consume

As of writing this, we've learned that creating content that will satisfy both is difficult and time-consuming, so we will be focusing on writing these milestone type blogs as well as posting various types of content to test which is most effective. The short project duration also forces us to think clearly about our scope and be lean on the features we include before starting. 


## Target Audience


## Research



*   Consulting faculty/professionals/other students
    *   What is reasonable/managing scope
    *   What will be challenging/undoable
    *   Methodology
    *   The balance between documentation and engine
*   What we learned from talking to professionals already
*   Why not use an existing game engine (why is this project even useful)
    *   Panda/Unity/Unreal

	Being an ETC project means that the project needed to pass through a pitch process of consulting faculty at the school as well as other students. This allowed us to receive feedback about what could be considered a reasonable/manageable scope and where we might hit challenges for a general project. For this project to be a valid ETC project as well as accomplish the mission statement of developing and documenting, there is a fine balance between documentation and development. This is a restriction because of time as well as skill. Having only 3 months we can't develop an engine as well as tutorials or syllabus for others to use, however we can document our thoughts and process that we are making. Also talking to other developers who develop content like blogs and tutorials full-time, we learned that developing consumable and valuable content is difficult requiring time and skill that we don't necessarily have.

During our pitch process, we got the chance to talk to numerous professional and get extremely helpful advice from them. All these advice and suggestions helped us shape our project to what it is know and provided invaluable knowledge on how to start a game engine. Thus, we encourage you to approach professionals and get advice if feasible. Here are the people we talked to during the pitch process and advice from them.

***


### Amit Patel & Rob Shillingsburgh

_Amit is maintain a super helpful website called [Red Blob Games](https://www.redblobgames.com/) where he explains math and computer science topics in an accessible and playful way. Rob Shillingsburgh earned his Ph.D. from Princeton University and was an early employee of Google. He later co-founded Wild Shadow Studios (maker of 2012 IGF finalist [Realm of the Mad God](http://realmofthemadgod.com/)) and Jetbolt Games._

We approached Amit because he has extensive experience producing excellent blog posts on game dev related topics (again, they are really GREAT!). We were able to meet up during GDC 2017 and Rob joined the meeting with him.

**Advice (_not_ verbatim):**



*   On getting started
    *   Get something on the screen as soon as possible. Make something as simple as a blank screen, or a triangle. Then you can start off from there. It's a great way to keep you motivated. Also, always have something that runs.
    *   Try to make a toy game in 2 weeks, you will figure out what problems you might encounter when making the engine. It's a great way for you to know your "unknown unknowns"
    *   Keep everything as simple as possible
    *   List out your features as a tree and do Breadth-First implementation on them
    *   It's hard to plan everything upfront. If you do, keep them adaptive
*   On networking
    *   Different games need different netcode. For example, RTS genre has very different requirements on networking than FPS genre. 
*   General
    *   Most game engines come from actual games. People only make them when they find that a lot of things are common among different games and make them by pulling those parts out and reuse them. So, maybe consider making multiple games throughout your semester.

(Our meeting notes)



*   hello world like example
    *   blank screen > triangle
    *   ogre/openAL
*   what info on server/client
    *   traverse lib, serialize struct (not for oo)
    *   protocol buffers, serialization std
*   things common to many games
    *   spend more time
*   specific project experience
*   easier to w/ working project for future templates that run
*   canonical game to support
    *   choose 1 (maybe make 3)
*   different games need different netcode
*   make left 4 dead --> simplest form
    *   realm clone
*   an example to test
*   starting w/ a game then into engine
    *   toy game 1st 2 weeks
        *   figure out the problems
*   Get something working quick, and get something always working
*   List a tree of features and do BFS
*   can't plan upfront, adaptable/reactive
*   iterative approach
*   follow their process not your process
    *   write mid/end game
*   Keep notes while doing stuff and write last. Cause if somethings changes and you already wrote the docs, the costing of changing will be high
*   waiting 4 months wasn't long enough for documentation
    *   let it settle down
*   write a number of games and how things change will help others develop games
*   all possible games can support
*   start w/ something that runs
    *   start w/ game
        *   well documented sample game
    *   demo cool features


### Walt Destler

_Walt is an independent game/entertainment programmer and designer currently working in the San Francisco Bay area. He was a programmer on [Way](https://waltdestler.com/way.html), the IGF 2012 Best Student Game Winner, and is now independently working on his new game [Cosmoteer](https://waltdestler.com/cosmoteer.html)_

We approached Walt because he also went to the ETC for graduate school. He was working on a side project to build a game engine for more than three years and is now making a game with his own engine. We did a Skype call with him.

 

**Advices:**



*   Engine design
    *   When making your game, deliberately separate engine code from game code, draw a clear wall between them right from the start and make design decisions to facilitate that.
    *   Build a game to prove that your engine works
    *   Try to make engine code robust and reusable
*   Experience
    *   Walt's first engine originated from the game he was making in college, and he kept the engine code to be used for future games. He found out that he was adding features to the engine frequently when making his 2nd game
    *   He started with Unity when making his current game and later switched to his own engine for the following reasons
        *   Limitations of Unity's sprite animation system
        *   Hard to determine which functions get called before others (back when Script Execution Order setting was unavailable in Unity)
        *   2D physics capability is limited
*   Components
    *   Two games and one game engine are huge amounts of work, we need to decide which to implement and which to import
        *   Custom engines don't necessarily have a ton of tools, like a level editor or a UI editor
        *   You can still use graphics API to draw UI for developer yourself
        *   There a handful of 3rd party libraries that simplify the development, like Iron Python for scripting and Farseer for physics (if physics is less interested and physX is too much)
    *   Networks for strategy games are easier to implement
        *   Use UDP instead TCP but need to build a layer on top of UDP
    *   Physics(collisions) are more useful for engines (than netcode)
        *   Even it can bring in more glaring omission
    *   It hard to graft physics component onto an existing game engine, while grafting networking can be easier

(Our meeting notes)



*   engine around longer than game
*   kept game agnostic code separate
*   build game to prove engine
    *   good design/performance validated w/ game
*   2 games + engine = lot of work
*   side project for 3-4 yrs (not full time)
    *   estimated months if full time
*   process deliberatiley making decision of game + engine code
    *   trying to make code generic to go in engine
    *   from beginning draw wall between game + engine
*   very frequent additions to engine during 2nd game
*   trying to make code robust + reusable
    *   more generic + reusable
*   perspective of 2nd game
    *   prototype in Unity
    *   switched b/c of issues/limitations of Unity
    *   animate in vertex shader (sprite) limitation of amount of data to pass
    *   need more control from unity
*   engine doesn't have a ton of tools
    *   no need for level editor
    *   love for a UI editor (not worth time)
    *   easy ways to build inspector
        *   developer editor UIs
*   everything written in same language
*   handful of 3rd party libraries
    *   wrapper around DirectX (C#)
    *   libs to handle image loading/compression
    *   iron python
    *   lib for metrics
    *   farseer - physics engine
        *   less interested in physics
        *   didn't need any physX prior
        *   may write his own down the line
*   strategy game networking is easier
    *   action TCP not ok (UDP)
    *   layer ontop of UDP
*   think physics is more useful in engine
    *   more glaring omission
*   harder to graft physics onto, networking easier

Jason Gregory

_What made you interested in game engine programming?_



*   had gotten into games, started doing part time teaching at USC. had does teaching in general from jobs, and a friend had started a course in game programming and Jason did some guest lectures. Eventually one of the department heads asked for a next steps course, and Jason suggested a engine subsystems course. Students asked for his notes, and he converted them into a book.
*   He saw a lot of commonalities kept arising in game engines he worked with

_What is non-engineering skill have you found most useful in your work?_



*   Interdisciplinary communication skills (which he developed from being a teacher); taking a complicated idea and explaining it in the POV of the others.
*   To some degree, having some aesthetic sense helps as well
*   When I worked at Midway, they broke some rules by having him voice act
*   MUSICIAN (Saxophone, piano, flute)

_How does working with designers play into the design of your systems?_



*   Almost all subsystems have influence from other domains. I see my job as a game programmer as providing tools for other disciplines to express themselves. Understanding their needs and what their workflow is like and how we can improve upon it.
*   There's a definite collaboration with designers in gameplay programming

_How much of job is workflow analysis?_



*   Currently working on UI system, and a lot of the job is working with the design team to figure that out for a complex multiplayer game. Day to day, it's often deciding which way to go: A or B. Oftentimes they'll come over and bring up a concern or difficulty, and the design of the software will be altered.

_What is the best way to start in the area of engine development/how did you begin in this?_



*   It's tricky because one of the reasons I wrote this book is due to the fact that there are not many starting resources. It's such a massive topic that you really just need to take it step by step. The way I learned it was just be experience--the best way to learn is to just get a job and do it.
*   If you're interested in a particular topic, there are quite a bit of resources online. But experience will prove out the theory of what you read. 

_How much of your job would you say is knowing high-level concepts like animation techniques or data structures versus being familiar with your platform at a low-level?_



*   The way I look at it is that any piece of software is built on layers, and the lower you get in the stack the more important the hardware is. Most of the Naughty Dog engine would work on any console, because the concepts are still the same. The differences happen on things like single-threading -> multi-threading conversion.
*   It really depends on what level you're working on. We have a rule against prematurely optimizing or overoptimizing. We encourage people working on high-level gameplay systems to just slap something together and getting it on the screen.
*   When you do have to solve one of those problems, it's very interesting and you want to write a blogpost or GDC talk about it, but the truth is that you just do good structured C++ most of the time.

_What are your thoughts on crunch in the game industry?_



*   A lot of times people crunch from passion, but when that morphs into people crunching because management has done a really poor job of planning or there's a culture of planning poorly and crunching by need, that's when it gets toxic. At EA there have been lawsuits on this stuff. At Naughty Dog we do crunch, but we're trying to improve our structure to prepare for this and adjust the workload based on changes.
*   Any great work of art or technology will always have the feeling of using all available time to get it done. The key is to develop a process where you can plan well enough that you're not playing catch-up too much.

_What would you like to see more of in the industry? (Skills, tech, awareness, diversity, types of games)_



*   At Naughty Dog, we're a bit constrained in game design due to the cinematic experience of our games, but I'm excited about indie studios that are pushing the limits of innovative game design. I.e. Mirror's Edge = First person runner. Inside is another good example as an interesting take on the genre.
*   In Naughty Dog's way, we're innovating in the way of cinematic story and characters that are comparable to a movie or novel.
*   Some of the most well-remembered parts of Naughty Dog games are the touching moments. That's another thing that's very interesting to me. How do marry strong gameplay with good story?
*   It's also exciting to see more diversity in the industry!
*   Hopefully we'll get away from a lot of the toxic nature.

_[explain the pitch] Do you have any advice for structuring our first engine?_



*   I actually struggled with this for project work that I wanted my students to do with my course.
*   I like the idea of integrating pre-existing things into a game engine to build it, because the act of making a game engine is about getting many different discrete systems to work together.
*   Focus on a very simple core. Keep it as simple as you can! It's more important that you get something that's a bare minimum that will function. Something that shows "it works!"
*   Maybe use a pre-existing game design and build the engine around that. Maybe even develop a demo that works in your engine.
*   Be prepared that by the end of it, you're gonna have something that's not close at all to anything big!
*   One thing you could do is to take an older game engine like Quake and replace subsystems on it.

_Networking vs Physics_



*   Whichever your team is more excited about! Choose what you find more interesting!
*   In terms of absolute need, it depends on the game you're making.
*   There's probably less resources on networking.
*   You could in theory use PhysX or ODE. Multiplayer and physics don't usually mesh well anyways, so keeping physics

Oliver Franzke

_What made you pick game engine programming?_



*   worked in graphics in research and a bit in the animation industry. challenging technical problems are what drives me; it's something very complex, working within the constraints of the hardware. in doing tools, its trying to make the content creator's lives easier. a lot of my work was talking to artists about workflow and solving their technical problems in that area

_What is non-engineering skill have you found most useful in your work?_



*   being able to put your own view and judgments aside to understand what the problem is. oftentimes the programmer doesn't consider that point of view, and it ends with a product that makes nobody happy.
*   i have to credit my short time in the animation industry. as opposed to games, in animation, programmers are not the most important people.

_Stereotype of introverted programmers_



*   there is some truth to that, and it would be good if people have a bit more formal education about communication skills. it's hard to express how important it is, but i do agree.

_How much of your job would you say is knowing high-level concepts like animation techniques or data structures versus being familiar with your platform at a low-level?_



*   both are very important. the ratio between the two probably varies project to project, especially when you work from scratch. With Broken Age, we needed to consider the high level concepts first before we got to the low level implementations.
*   in games, things like UML didn't make much sense.
*   low level is still important because at the end of the day, you need to get all of your work implemented on the hardware. For instance, the PS3.
*   You need to be careful about not micro-optimizing all the way down because it's not always important.

_How do you keep up on modern techniques or new technology alongside?_



*   there's always GDC. after a new generation of consoles, there's a bunch of new stuff to be learned that people share in the industry. EX: PS4 Pro with 4K. i also try to stay up to date with SIGGRAPH. at Double Fine, we have channels for sharing knowledge and keeping each other up to date. playing games every once in a while always helps!
*   if I compare myself now compared to university, i have much less availability for keeping up.
*   the game industry is not an easy place to work because of crunch, salaries, and i know of a lot of people who leave the games industry at some point.

_Handling crunch_



*   Psychonauts and Brutal Legend didn't have much crunch. I don't think I've done actual crunch crunch where I stay late for weeks since LucasArts. my personal choice is to prioritize family, and if i was forced to do it, i would probably leave the industry.
*   i think a lot of companies are throwing away a lot of talent that they could leverage
*   producers didn't exist back when i started in 1999, but we also didn't have huge games like Destiny. it's a bit of a shame now though, because if the heirarchy gets deep then you lose the personal feeling of working on the game
*   coming out of university, it's pretty common to want to work for AAA companies. my general advice is to try working at these companies just to see them. I'm suspicious of students who "don't want to be part of a big machine" and try to be indie straight out of university.

_What would you like to see more of in the industry? (Skills, tech, awareness, diversity, types of games)_



*   with Double Fine we're already at an advantage, but diversity is something that the industry could use. non-diverse groups (20-something white dudes) can lead to something but not usually what you want. I want to see an improvement in leadership in general, specifically leadership education. a lot of people just get pushed into these roles without being told what to do, and it leads to crunch and bad results.
*   from my experience, hard skills can be practiced as hobbies, but soft skills like leadership really need an environment for growth

_How do you handle programming an engine for such varying platforms as phones and PCs for a single game? (Oliver Franzke)_



*   to be fair, we didn't start from scratch. we didn't use our previous engines; we went with an open source engine called Moai--it was already ported to Android and iOS. The first thing was taking all of the amateur pieces and turning them professional, and trying to get older platforms like the Vita running. because of the Kickstarter we knew from day 1 that this was geared towards varying platforms, and in previous projects we had faced the can of worms of facing that later in the project.
*   sometimes after you ship a game, you realize it would be good for other platforms and you need to rework your assets

_Split between programming and art support_



*   i would always prioritize content creation issues, and fortunately everyone was in the same room so I could overhear some issue and I could right away jump in on the conversation to solve the technical issues

_Engine programming often ignores the content creation_



*   a lot of what i've learned of how to handle content creation has happened from the game industry. the part that makes the most difference the quality of the game is the content creation side, because our limitations are starting to disappear. 

_[explain the pitch] Do you have any advice for structuring our first engine?_



*   i don't believe in generic game engines anymore; usually, there's a focus for the engine like 1st or 3rd person shooters. So pick something to aim at.
*   Unless its something that you want to make a commercial project, don't focus on abstractions. it'll make it cumbersome to get to the data you really need
*   read a lot! Game Engine Architecture
*   adding a network to any game or game technology will multiply the complexity of said technology and edge cases that you'll find in games. maybe you can design the technology with networking in mind, but leaving the implementation for later.
*   if you're doing physics AND networking, do absolutely the bare minimum for everything else! just doing physics and networking is a super complicated problem; networking and physics live on opposite sides of the spectrum, with one being prediction-based and the other being time/physically-based.
*   technical skills to know for engine development: multi-threading/concurrency. make parallel programming your second nature with every problem you think about--how you structure your data, when the problem is done, everything. also really get your linear algebra down, cuz you have to do it at all times.
*   use hobby projects to get these technical skills down by focusing on the context of these particular skills

***


### Why not another engine?

Using an existing game engine like [Unity](https://unity3d.com/), [Unreal](https://www.unrealengine.com/en-US/what-is-unreal-engine-4) or [Panda3D](https://www.panda3d.org/) is always a handy option to make a game. These well-established engines have a strong collection of tools and APIs so that developers can focus on making the game, not the wheels. However, there is the limitation of not having full control over all systems in the engine as well as not knowing how the engine is processing the game logic and assets. Using these engines obstruficates the complex systems of an engine, so although you may have an understanding of how a physics or graphics engine works, each engine operates differently and optimizes for different constraints. 

*In terms of learning about game engines and how to develop one, these established engines aren't a good source. Panda3D, originally developed by Disney and expanded by past ETC projects, has an old, unmaintained codebase with limited community involvement and it is not using the industry standard language (C++). Unity and Unreal are both too massive and too leading-edge to be a engine learning material for novices. In addition, Unity's source code for the engine isn't publicly available so you technically can't learn from it. The huge codebase (probably maintained by commercial companies) sets a high threshold for any beginner to get started.


## Roadmap



*   What this engine is aspiring to be
    *   Why is it the way it is
    *   Show previous architecture iterations (have a more refined one after reading engine book)
*   Game to prove the engine
    *   Why the game is necessary
    *   What the game isn't (isn't meant to be fun, suppose to be derivative)
    *   What is the game (like what the actual game will be)
        *   Video of Blops Dops?
*   Libraries that we plan to use for the engine
*   Tentative schedule of the project (Roadmap!)

The Isetta engine will support the most primitive form of networked multiplayer twin-stick shooter game. Networked multiplayer was selected to be apart of the engine because it offers significant design and development challenge on every level of the project, and will be something that can differentiate this engine from others being developed. The engine was also decided to be created in 3D for 2 reasons, most AAA engines are 3D games and 3D has more math and problem solving for us as developers to learn and grow from.

The twin-stick shooter genre was decided upon with these 2 constraints after multiple iterations of thinking of the components required to build other game types as well as how that genre would utilize multiplayer. Twin-stick shooters effectively can have little to no physics, which is different from collisions (this will be explained in [week 1 blog](week-1.md)), the information passed between networked sessions is relatively minimal as well as not too strict on latency, and at the basic form can have simplistic gameplay that doesn't need a world editor or too much design. To reiterate what Walt Dessler said, each game and more particularly each genre requires vastly different netcode solutions (This is also one of the reasons why we prefer netcode over physics since it can greatly narrow down the genre option). For example, a multiplayer shooter, specifically PvP shooters, require small amounts of information to be passed (bullet and player locations, etc.) from server to client but with relatively low latency possibly even with client-side prediction [^1] as well as the additional requirement of lobby/matchmaking of usually more than 2 players; whereas, a strategy game, specifically turn-based ones, require large amounts to be passed (all units, decisions, resources, etc.) to all users without too much concern for latency or prediction.

[^1]: John Carmack: _"I am now allowing the client to guess at the results of the users movement until the authoritative response from the server comes through. This is a biiiig architectural change. The client now needs to know about solidity of objects, friction, gravity, etc. I am sad to see the elegant client-as-terminal setup go away, but I am practical above idealistic."_ For more, see: [Gaffer on games: What Every Programmer Needs To Know About Game Networking](https://gafferongames.com/post/what_every_programmer_needs_to_know_about_game_networking/)

The other piece of advice which seemed to reocurring from professionals and our faculty alike was developing a game in conjunction with the engine. There are many reasons to develop a game alongside the engine, the strongest may be the ability to prove and demonstrate the engine you developed works as expected. The game can also test features to show immediate edge cases of the engine. Another nicety of developing an engine is that it can stop feature creep, when you keep expanding certain features that won't be utilized. With the perspective of the game when designing/developing a feature can be quickly axed from or decided that it is required. What the game built from this engine won't be is something original or necessarily fun, but that's not to same a fun, original game can't be created from this engine. The idea of our sample game is to be derivative so features of a basic twin-stick shooter will be included in the engine rather than only specific features on our niche experience.

As stated the game is a simple twin-stick shooter, reminiscent of a game you would create when first learning game development. It is a simpler derivative of the [Call of Duty Black Ops: Dead Ops Arcade mode](https://www.youtube.com/watch?time_continue=166&v=LSnAmsJGTwY), however without much of the juicy gameplay Call of Duty is known for. We developed a version of the game in Unity that will be replicating, as seen below, which will be used to compare the functionality to our game engine. We will be able to create scenarios in the Unity version of the game to replicate in the Isetta engine version of the game. Having a version of the game already built stops us from having to be concerned with the logic or design of the actual game, so we can focus on the engine doing exactly what the game currently does. It also allows us to pull the assets from the Unity version of the game directly to the Isetta engine without having to worry about a bad asset, if it worked in Unity it should work in Isetta because this is our minimal viable product (MVP).

<iframe width="560" height="315" src="https://www.youtube.com/embed/j7kMT83ViXo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


## Reading



*   What is our recommended reading
    *   Can't just say read the books we did, should have sections for them to skim/read
    *   Any useful articles
    *   Why we believe these readings useful

We did some readings throughout the summer so there are some recommended materials based on our understanding.


### Books:



*   [Game Engine Architecture](https://www.amazon.com/Engine-Architecture-Third-Jason-Gregory/dp/1138035459): This is the definitive game engine book from Jason Gregory who works at Naughty Dog. This book shows readers the big picture of what a game engine is and has a complete discussion about each of the major components. Most of us read the second edition of this book while the third edition has come out July 2018. To have a brief idea of a game engine itself, Chapter 5, 7, 14, 15 are recommended.
*   [Game Programming Patterns](http://gameprogrammingpatterns.com/): Design patterns are general and reusable solutions to common problems in software engineering. Game developing shares some concepts with that field but has its own problems. This book is an easy-to-read book which not only goes over the classic design patterns but also introduces game-specific design patterns. In our opinion, the most important patterns to know are:
    *   [Observer](http://gameprogrammingpatterns.com/observer.html) pattern is a great way to decouple different systems
    *   [State](http://gameprogrammingpatterns.com/state.html) pattern is extensively used for controlling NPCs, animations, etc
    *   [Game loop](http://gameprogrammingpatterns.com/game-loop.html) is the heart of almost every game engine
    *   [Data locality](http://gameprogrammingpatterns.com/data-locality.html) is one of the fundamentals of data-oriented design
    *   [Object pool](http://gameprogrammingpatterns.com/object-pool.html) is a ubiquitous solution for memory management
*   [A Tour of C++](https://www.amazon.com/Tour-2nd-Depth-Bjarne-Stroustrup/dp/0134997832): Modern C++ is always hard to follow even for experienced programmers. This book is a thin handbook from Bjarne Stroustrup designed for developers who have programmed before, and gives an overview of modern C++ (C++17).
*   [Effective C++ Series](https://www.aristeia.com/books.html): This series of books gives a huge bunch of best practices covering almost everything in C++ development. It can greatly improve the code quality.


### Blogs:



*   [Handmade Hero](https://handmadehero.org/): Handmade Hero is an ongoing project to create a complete, professional-quality game accompanied by videos that explain every single line of its source code.
*   [Gaffer On Games](https://gafferongames.com/): 
*   [Red Blob Games](https://www.redblobgames.com):
*   [How to Write Your Own C++ Game Engine](http://preshing.com/20171218/how-to-write-your-own-cpp-game-engine/)


### Videos:



*   [CppCon 2014: Mike Acton "Data-Oriented Design and C++"](https://www.youtube.com/watch?v=rX0ItVEVjHc): 


## Coming Soon/Next Week



*   Coding coding coding
*   Interviews interviews interviews (unless we don't want to mention them?)
*   Engine architecture
    *   What our proposed is

<!-- GD2md-html version 1.0β11 -->
