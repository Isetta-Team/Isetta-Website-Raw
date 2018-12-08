# Wisdom from Working at Three AAA Studios for 15 Years

![headshot](../images/interviews/elan-ruskin.jpg "Elan Ruskin")

Elan Ruskin is a senior engine programmer at Insomniac Games, where he has worked on critically-acclaimed titles including Marvel's Spider-Man and Ratchet & Clank. Prior to his time at Insomniac, Elan worked at Valve, Naughty Dog, and Maxis on many of their flagship titles as a gameplay and engine programmer. When he's not programming, Elan enjoys theater, music, and Star Trek.

## Designer-Driven Tools

The real advantage of data-driven systems is that it's designer-driven; you're decreasing the  iteration time for the designers. It puts the ability to make and see changes into the hands of the person actually making the content, and away from the programmer-compiler loop which requires programmers to develop and compile before any change can take place. The problems with data-driven design are 1) the code has to be a little more complex to support this flexibility and 2) you're loading bulkier content. You can get around that, though, if you use a builder[^1] to pack down the content into something that code can load more efficiently. 

[^1]: A **builder** is a tool used to process assets from their editable forms (files editable by external software) into a more compact, unreadable file to be used by the engine for a game. The file format is typically proprietary and specific to the engine, and engine metadata is stored within the file.

What surprised me about data-driven systems is that it ended up being much less of a problem than I expected. It turns out that you load things relatively infrequently, and if you do end up loading them frequently, you can bake them down. So as much as it would make the me of 20 years ago sad to hear me say it, having things in an open-text format that gets parsed turns out just not to be a performance issue. I'm not saying performance doesn't matter! But that turned out to not be the issue.

The other problem with data-driven design is that people will do weird, unexpected, and strange things with data that you didn't anticipate and will possibly break your systems. That's because the connection between changing the data and something in the game breaking is not quite as obvious as it is with code, where you can set a breakpoint and see exactly what happened. The importance of good error reporting, diagnostics, and designing the authoring tools in a way that prevents people from getting themselves into trouble was not clear to me when I began engine programming.

With tools, the things that you can't anticipate are usually the problem, because the designers and artists are always trying to solve their own problems. They're not out to break the tools or fumble around oafishly; they have specific needs, like "I need this tree to have another tree on top of it so I can turn one of them off and the other one on, because it's winter and we need the leaves to be gone." In this scenario, they might not know that if you have two things in the same place at the same time, it causes a problem. That's something they would have no way to know about until they did it. So really, the way to deal with that is to find a way to prevent people from making the mistake, which would then make the causal connection obvious. Ideally, we should make it impossible to do bad things, but again, that comes back to anticipating things. It's also not a reliable strategy to just go over and yell at people for having done the content wrong or give them a gigantic document that explains how to use your tools. You can't expect people to hold that much content in their heads at once. 

When developing tools for writers, an assumption a lot of people make is that writers are not technical and therefore need easier tools, which is completely untrue. Writers can learn computers as well as anyone else! What I learned from my time at Valve is writers need flexibility; any given line of dialogue goes through many iterations to get it right.

The thing to be cognizant of is that writers are part of a whole pipeline of content that has to get made. The writer's text appears in the game while it's still being prototyped, but even at that time we have to cast the voice actor and record them. Then, we put the voiced lines into the game only to realize the dialogue is clunky. So we have to change the line, go back to the booth, and repeat the process. This puts the writers in the middle of a pipeline that has audio waggling at the other end. The advantage of building a complete suite of tools is you can integrate the whole process of tracking where lines of dialogue are located in the game, as well as who's been cast to play it, and whether or not it's been recorded and localized yet. In Campo Santo's [talk](https://www.youtube.com/watch?v=hTqmk1Zs_1I) on _Firewatch_, they discussed how they integrated the dialogue system with the "recording-tracking" system. Taking that approach saved them a lot of agita.


## Intimate Bond of Engine and Tools

At Insomniac, the engine team and the tools team are the same team. That works well for us because the team is not especially big, and because the engine and the tools are intimately bound. The engine is loading the assets, the builders are cooking the assets into a binary[^2], and the tools are feeding the things to the builders. These are not separate operations; it's all the same lump of data. As teams grow, you'll need to specialize the labor because they are different skills to an extent. I personally don't think there's that much value in separating the engine runtime from the tools in terms of being different teams, unless your studio is gigantic. In that case, you have to for organizational purposes. 

[^2]: **Binary** files are files stored in binary format, a format that is easily computer-readable but not really human readable. These are more compact in size than human readable files.

Along the same lines, it's almost a necessity to version the tools and the engines together. Part of this is the obvious reason that if you change the runtime format and the tools need to export in your format, the engine needs to be able to read it. Again, they're operating on the same data. What's more, anytime you need a new capability the engine, the tools have to support it, so they really move in lockstep.

One of our attempts at improving our tools ecosystem was to use web tools. For the entire rundown of why Insomniac went with web tools and why we stopped using them, you should see [Andreas Frederiksson](https://twitter.com/deplinenoise?lang=en)'s [GDC talk](https://www.gdcvault.com/play/1024465/Insomniac-s-Web-Tools-A). The reason for moving towards web tools was that we thought it would be much more flexible to make a UI in the web, and also that it would be easier to hire people who have a web UI experience than people who have C++ UI experience.

That just turned out not to be the case. We ended up hiring the people that we would hire anyway, and then teaching them JavaScript. What's more, the scaling issues of web tools are enormous. The web is good at doing 100 or 200 of something; it's not so good at doing 30,000 of something. So just performance and memory were gigantic issues, in addition to all the other issues like Chrome continually breaking underneath their feeds, JavaScript is just bad!

On the usability side, we made our new web tools work almost exactly like the old tools, only with less bugs. We tried to keep the interface consistent. The problems that we ran into were that the new tools didn't have all of the features of the old tools to begin with, because we couldn't rebuild everything at once all in one piece. As a result, the team would have to learn how to work around the missing pieces. Because we kept the the workflow the same, it was fine, plus everything got faster and less buggy.

We have also made several attempts at making a tool to track feature regression. We wrote a tool that loads every level of the game, takes a snapshot of the memory, and then unloads it and repeats the process. From there it would just create this whole spreadsheet report that nobody ever looked at, because it was always days out of date. We had another tool that was meant to interrogate a level; it would look at all of its dependencies and the dependencies' dependencies, and recursively try to see  how much memory everything would consume. The problem of that is it's an estimate, because you often don't know how much runtime memory something is going to consume until you've loaded it due to dependencies. People will write code that causes dependent allocations that aren't even in the asset. But trying to detect memory consumption outside of runtime is a bad approach. If you're building an engine now, try really, really hard so you can look at an asset on-disk and know how much memory it's going to take up. Doing that saves you so much agitation. Failing that, write a regression tester, go into the level, and see the footprints. Keeping regression testing working—keeping the whole machinery of it working—is a full-time job. At least in a AAA-size team, somebody has to keep that pipeline going. We just didn't have the manpower to maintain that machinery, and that's why it fell down.


## Allocate, Allocate, Reallocate

Memory allocation is always a problem. I don't just mean that the actual use of memory is a problem—the whole apparatus for allocating memory is only becoming more difficult as costs get bigger and we have more memory to allocate. A few companies that have had fixed memory pools[^4] have gone back to using dynamic memory pools[^5], just because of how much stuff was coming in and out of memory. It was a nightmare to fix it all. I think people are trying to find a way to get back to more static allocations[^6], or at least block allocations fixed in size. When I say that, I mean the size of the individual allocations being fixed as opposed to the whole pool being fixed ahead of time. It's just hard, and that's why no one is doing it. Maybe someone much smarter than me is doing it! At Insomniac, the way we handle memory allocation is we have one allocator[^7] for assets, a different allocator for render memory texture and graphics, a different one for physics, and one more for gameplay components. Each pool has different characteristics, because we're trying to allocate things of different size with different lifetimes. We have different pool allocators for different purposes. Insomniac's allocators are actually not pooled, because the assets are all different sizes. That said, we do use pooled allocators for stuff like physical objects; for example, pedestrians in _Spider-Man_ are coming out of the pool. So in that situation, they are used for things that are all of the same type.

[^4]: **Fixed memory pools** is a data structure for dynamic allocation of fixed block-size memory chunks.

[^5]: **Dynamic memory pools** are pools in which memory sizes are determined during runtime, and are changing per allocation rather than being fixed for all.

[^6]: **Static allocations** is the allocation of memory at compile time, therefore faster than dynamic because the computer doesn't need to switch into kernel mode to grab more memory.

[^7]: An **allocator** is a data structure that encapsulates memory management and doles out memory on request. There are different types of allocators based on the needs (amount and lifetime) of the memory.

Balancing memory usage is an ongoing, iterative process. As you're making your level and you realize you need a few more textures over here, you may have to take some geometric complexity out somewhere else. You might need to put in some more actors, so the textures have to go. It's this continual give-and-take of budgeting. The upshot is that you really need good budget reporting, even more so than being able to decide what your budget is ahead of time. When people put in content, they need to know the weight of the content and they need to know the "pie chart" of where all the memory is going. Otherwise, you have no way to make trade-offs.


## Effectively Using Profiling

The ability to sum together scopes across an entire frame is important. That's because you can have a profile scope that says how long to tick this asset's physics component, so if you're doing a hierarchy then it's gonna appear a thousand times. It's helpful to aggregate that whole thing together and be able to plot the aggregated number. A convenient way of exporting a report from a run of the game is as a spreadsheet that you can then import into Excel. Because then, when I'm making a change, I can run the game before the change and then after the change as control and experimental groups. I can also do a Student T-test[^3] between them; doing statistics becomes more important. Otherwise when you make a change, you don't know if you actually fixed anything. Also, presenting the data from the the profiling part of the profiler is not that hard; it's presenting the data to the people who can act on it that's hard.

[^3]: The **Student T-Test** is a statistic test to determine whether a sample set passes hypothesis, the chance the samples are the same or different. For more information see Elan's [GDC talk](https://www.youtube.com/watch?v=fl9V0U2SGeI).

For a discussion of how I tracked crashes, go see my [GDC talk](https://www.gdcvault.com/play/1014353/Forensic-Debugging-How-to-Autopsy) on Forensic Debugging, where I babble about this concept for about an hour. The short of it is, you start with the call stack, and from there you can just start pulling the thread backwards. Most crashes are due to bad data, so anything you can do to validate the data as it's coming in—before it blows you up—will save you an enormous amount of effort down the line.

Concerning general performance, there's one common mistake that I need to bring up. People who use the function `tolower`: _Stop it. Just stop it_! I've been seeing this used to compare case-insensitive strings a lot, but there is absolutely no need to convert uppercase character to lowercase ones. If you've got a string in your engine, just turn it into a hash to start with. I saw an online multiplayer game spend seven percent of its time just turning uppercase characters into lowercase ones; think about how much money it costs to run that on a dedicated server! It's madness!


## Synchronization of Time

Clocks and timers are inherent to video games. For example, look at the update loop and how many frames the game renders every second. Whether to synchronize the multitude of clocks in the engine warrants depends on the game. Albert Einstein conclusively demonstrated that it is impossible for observers and different reference frames to agree on a common clock. Valve uses a multiplicity of clocks, and essentially when you're making a networked game you always have to. That's because you've got your client's clock, the other client's clock, and you get the server clock. Occasionally you want to decouple the simulation from the animation, so you'll also have the animation clock, which takes faster or ticks less constantly. All of these clocks are working at different rates. 

I don't have a good and complete answer for time synchronization because it depends on the kind of game that you're making, it depends on the way that your animation system works, and it depends on your circumstances. For a game like _Spider-Man_, we actually had to have—for gameplay purposes—multiple clocks, because in a superhero game time slows down and speeds up in dramatic moments. If Spidey smashes through the ceiling, we want to put things in slow-motion, or pause the game when bringing up the weapon wheel. Stuff like that changes how you approach clocks. 


## Engines Can Change, Little by Little

Adding streaming late in the Insomniac engine is a funny story. Insomniac had made an engine for _Resistance_, and that was used later on for _Fuse._ When we designed the engine, we went into it with the mentality that our games were primarily in linear indoor environments. As such, we decided the only thing the engine wouldn't support would be open world streaming[^8]. So of course, we immediately landed the contract for _Sunset Overdrive_[^9]! The point that I would learn from this is that even if you think you haven't designed for something from the ground up, you can get there; you just get there a little bit at a time. The whole open world mechanism in _Sunset Overdrive_ came from the fact that we had airlocks[^10] in _Fuse_ to control progress. So essentially, we just said "Well, what if we have airlocks in nine directions but don't actually have airlocks?" Then you just use that same mechanism a piece at a time.

[^8]: **Open world streaming** refers to the the process of "streaming" (loading) the world/map (sections of the world) into memory while the player moves throughout the world. While the player moves the game decides which section of the map should be loaded into memory, the engine needs to manage memory and framerate during these times of loading.

[^9]:**_Sunset Overdrive_** is a game developed by Insomniac Games for the Xbox One. It is a fast-paced, open world action-adventure, third-person shooter.

[^10]: An **airlock** in games refer to an area in which loading of the next chunk/section of the map is being performed. Within this zone the next and previous sections can both be in memory, or with limited memory only the next is being loaded into memory. In the first case the player can enter both the previous and next zones (once loading completes), however in the latter the player can neither advance or backtrack their game's progress while the loading happens.

It's often not necessary to go back and rebuild something from the beginning. There's always a step you can take in the right direction. The downside is you end up flooded with technical debt when you do that, but you also end up not having to start over.


## Keeping the Team in Sync

When you're working on larger engine teams and want to publicize bugs, there's bug tracking software you can use. Either JIRA or DevTrack are good options; this is a well-solved problem in tech. On the other hand, publicizing features and changes remains a huge issue. The bigger your team gets, the more of a problem that is. Simply saying "we need to communicate better" is a gesture, not an answer.

We do the following things at Insomniac; some of them work and some of them don't. When we make a big usability change and we write a new tool, we will do the presentation on that tool to the people who need to use it. That is somewhat useful in that it's a training scenario, but it tends to go in one ear and out the other. There are also people who you don't realize rely on that tool who won't be part of the discussion. We also write up documentation, but hardly anyone reads it. One helpful thing we do occasionally is record video walkthroughs of how to use the tool. The problem of the video is that it's slow and annoying to watch, but the advantage is that you can follow along with while you're doing it. Think of it like you're cooking and following a recipe. 

As for communicating inside the team, Insomniac has a team of about 25 people, so it's a little bit easier. Our former core team director [Mike Acton](https://twitter.com/mike_acton) had us do something to get us in the right mindset for every weekly department meeting; someone on the team would do a changelist review. They would look through the change history and comment on interesting changes on a changelist of another member on the team. The reason that we do this is so that people get in the habit of looking at the change lists that are going into the repository.

[My advice](https://www.gdcvault.com/play/249/How-to-Go-from-PC) about having those domain experts came from an era where people were going from PC development to console development more than they are now, and that knowledge hadn't really percolated out. You had studios that had really good PC engines and workflows who were just new to consoles. It is ideal if everybody in the team knows how to get a console devkit[^11] set up and working, but it's also not realistic because it's such specific knowledge. In theory, you could write documentation and tutorials and workflows, and that's helpful as far as they go. However, people are always going to have questions that are not answered by the tutorials. As such, it still helps to have somebody who is an expert in the topic. That doesn't need to be their whole job; it just needs to be the person who's really good at doing that thing.

[^11]: A **game development kit** **(devkit)** is hardware different from the commercially available version of the hardware, specialized for development. It will have a way of booting with a development version of the game, and modern developer kits have debugging features for the developers.

Onboarding engineers is a really hard problem no matter where you are. This is actually where some of the advantage of having a domain expert on how to use the devkit comes from, because then you can ask the person for lessons. At Insomniac, we try to address this by assigning a new person to fix something that's broken in an obvious and easily fixed way. By starting with that sort of problem, you start to pull on the thread of all the pieces that you need to work at the company. The bigger your company is, the more training you can afford.


## With Great Power Comes Great Responsibility

Technology is always changing. The amount of power available to consoles and PCs has grown precipitously. PC's seem to have blown up recently, but consoles just keep getting more and more CPU power and memory. People underestimate the importance of RAM because they've been told it affects the amount of art you can get on the screen. Obviously, mobile is a big change—mobile and tablet games are going to be more and more significant over time. AAA isn't so much in that space yet, but a lot of other people are. In terms of revenue, mobile is a huge chunk of the market now, and of course the ubiquitous availability of networking has totally revolutionized the industry. That's because you can always count on the network being filled with people at any given time. This not only applies for multiplayer games, but also for downloadable content, achievements, and all the other good stuff that comes with being connected. 

Engines are going to face a few challenges ahead. One is that consoles are getting bigger and have more memory, and teams are getting bigger as well. That's a deal; the tools have to cope with it and the engine has to deal with loading more heterogeneous assets at once. Mobile, obviously, is gonna be a bigger and bigger thing. The tricky thing with mobile is that tablets are actually catching up now in terms of computing power, but they're not catching up in terms of electrical power. Electricity conservation has become a surprising concern, as well as the different UI that you have with tablets. I think people will start to rely on networks more and more, but I think actually the penetration of networking is pretty slow. This is especially true in large countries like the United States, so it will be a while before people are building stuff around the cloud. The age of cloud rendering is not here yet. VR could be a big deal, or it could not—the jury is still out for that.


<!-- Begin MailChimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<div id="mc_embed_signup" style="margin-top: -20px">
    <form action="https://isetta.us19.list-manage.com/subscribe/post?u=1d83cb806c55e205be26db856&amp;id=860c7d79cf" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
            <h3>Subscribe to our mailing list</h3>
            <p style="margin-bottom: -22px;">Get notifications about the upcoming blogs and interviews!</p>
            <br><br>
            <div class="mc-field-group">
                <label for="mce-EMAIL"> </label>
                <input type="email" placeholder="Email Address..." name="EMAIL" class="required email" id="mce-EMAIL">
            </div>
            <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
            </div>
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input type="text" name="b_1d83cb806c55e205be26db856_860c7d79cf" tabindex="-1" value="">
            </div>
            <div class="clear" id="submit-button">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
            </div>
        </div>
    </form>
</div>
<!--End mc_embed_signup-->