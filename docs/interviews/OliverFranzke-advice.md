_Oliver is a senior programmer at Double Fine Productions, where he has worked on many of their remastered classics like_ Grim Fandango Remastered _and_ Day of the Tentacle Remastered. _He was at the engineering helm of the new IP_ Broken Age _as lead programmer, where he participated across all of its engine's development._

We approached Oliver because of his presence as an engineer in the indie side of the industry, where he has spoken frequently about his experience and work as not only a programmer but also a leader. Seeing him in the documentary _Double Fine Adventure!_ gave us a good understanding of some of his work prior to having our conversation. We did a Skype video call with him.

### Advice (_not_ verbatim):

*   High-level vs Low-level
    *   Both are very important. The ratio between the two probably varies project to project, especially when you work from scratch. With _Broken Age_, the programmers needed to consider the high level concepts first before we got to the low level implementations.
    *   In games, things like UML don't make much sense.
    *   Low-level is still important because, at the end of the day, you need to get all of your work implemented on the hardware. For instance, the PS3.
    *   You need to be careful about not micro-optimizing all the way down because it's not always important.
*   Multi-platform Development
    *   Double Fine Productions didn't use their previous engines; they went with an open source engine called Moai--it was already ported to Android and iOS. The first task was taking all of the amateur pieces and turning them professional, and trying to get older platforms like the Vita running. Because of the Kickstarter, the developers knew from day one that this was geared towards varying platforms, and in previous projects, they had faced that can of worms later in the project.
    *   Sometimes after you ship a game, you realize it would be good for other platforms and you need to rework your assets.
*   Art Support vs. Programming Support
    *   Oliver prioritizes content creation issues; fortunately, at Double Fine, everyone was in the same room, so he could overhear some issue and immediately jump in on the conversation to solve the technical issues.
*   Structuring Your First Engine
    *   "I don't believe in generic game engines anymore;" usually, there's a focus for the engine like 1st or 3rd person shooters. So pick something to aim at.
    *   Unless it's something that you want to make a commercial project, don't focus on abstractions. It'll make it cumbersome to get to the data you really need.
    *   Read a lot! Look for books on game engine architecture.
*   Choosing Subsystems (Networking vs Physics)
    *   Adding a network to any game or game technology will multiply the complexity of said technology and edge cases that you'll find in games. Maybe you can design the technology with networking in mind, but leave the implementation for later.
    *   If you're doing physics AND networking, do absolutely the bare minimum for everything else! Just doing physics and networking is a super complicated problem; networking and physics live on opposite sides of the spectrum, with one being prediction-based and the other being time/physically-based.
*   Technical Skills
    *   Technical skills to know for engine development: Multithreading/concurrency. Make parallel programming your second nature with every problem you think about--how you structure your data, when the problem is done- everything. Also, really get your linear algebra down because you have to do it at all times.
    *   Use hobby projects to get these technical skills down by focusing on the context of these particular skills.