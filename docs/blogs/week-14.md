# The Last Blog.


## Byte-Sized Updates
*   [Documentary](#documentary): Our team producer filmed our journey and process of developing a game engine. We have a short trailer and the full documentary is 10 minutes long.
*   [Game Jam](#game-jam): Held a short game jam with nine successful (non-crashing) games! Videos and downloads of those games below!!
*   [Full-Feature Demo Game](#full-feature-demo-game): Completed our target game, with all the features of the original one showed in week 0 (and a few more)!
*   [Engine Reflection](#engine-reflection): Reflecting on our progress as engine developers and the development of the engine.


As the title states, this is the last blog post for the Isetta Engine project. We have spent the last 15 weeks building a game engine and documenting our decisions through these blogs, and now we have to say goodbye. This has been an arduous journey for us and we are glad to say, we've built a game engine. There are certainly bugs littered throughout the engine, but for us, having a bug free engine was never the intention, it was to learn the engine development process. We feel we have been able to do this, and hope those of you who have had a chance to read our previous weeks feel engine development isn't as scary or mysterious as it was. But before we truly signoff, we have some last bits of updates they may interest you reading along.


## Documentary

As you may have seen on our homepage's timeline, there are updates about a documentary. While the developers on the team were trying to demystify the technical aspect of game engine development, our producer and creative on the team was really pushing to help sell our work to everyone. What we found was that most laypeople don't have an understanding of what a game engine is, and why would they, most of them just care about the games made with them. However, there is a human side to game development that we think is valuable for people to see and understand, which the documentary attempts to portray. The documentary is 10 minutes summarizing our journey from developers to engine programmers. 

For a trailer:

<div class="video-wrapper">

   <iframe width="1280" height="720" src="https://www.youtube.com/embed/RZJ2YMcJ4kg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

</div>

And if you are still interested, the full documentary is right here!

<div class="video-wrapper">

   <iframe width="1280" height="720" src="https://www.youtube.com/embed/c_3fq99Fc0E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

</div>


## Game Jam

As we've been mentioning in our past few weeks blogs, we were planning, and now have, held a game jam. The game jam was never part of the plan for the 15 weeks of development on the engine, particularly because we never bought into the illusion that people would want to use our engine over any other option. However as the weeks progressed we found our discussions including the question of what a developer would think/do/feel/etc about our decisions. We figured if we were talking about the hypothetical developer of our engine so much, why not put our engine to the test. We were also encouraged by our advisers and faculty to figure a way to test the engine. Disclaimer, we aren't saying this is the way to do it necessarily.

From that decisions we spent a few weeks in preparation, which mainly focused on the API design of the engine and trying to test the features we thought the game jam participants (jammers) would use. The days prior to the game jam, we converted our git repo's `README` into a webpage on our website, putting more emphasis into the accuracy, explanation, and readability of the content. And the night prior, we thought it would be a good idea to comment the codebase that would likely most likely be peaked at by the jammers; mainly the scene header files and anything that inherited from component (but not limited to those). We also made the bold (and dumb) choice of doing some refactors of the codebase that same night while we were commenting. How that decision happened was it was about 2-3 AM and we saw that a method name was misleading so correct that, oh that function should be private because its just used internally, this function doesn't seemed to be used, remove it! However, as you can expect doing this when we were tired was a terrible idea; the engine build failed and multiple merge conflicts happened that needed to be solved. _We don't recommend changing your engine a night before any type of release and this extends to "fixing" a bug._ It is hard for us to argue this as well because some of things we actually did perform a bug fix on, but we can't guarantee what was a fix and what just created a different bug. In hindsight, we probably should have created a stable version of the engine a few days prior then just performed bug fixing on that version so we could quickly revert in the case of a problem. But this relies that we had a reliable testing framework and smoke tests to prevent regression, which we didn't.

To give context to our game jam, it was a 6 hour event on Saturday Dec 1st, 2018 where we invited all of our classmates at our program, encouraging a more technical audience. We had over 25 people sign up the weeks prior with a total attendance of 12, of those 12 10 were programmers and 2 were designers. At the beginning of the game jam we had people filtering so we didn't have a true start time or demonstration walkthrough of setting up the engine. We just pointed to our github repo as well as our documentation on our website and set people loose. By doing this we were able to see where people were getting stuck during installation and real-time update our documentation to expand on those specific steps on setup. Overall setup went relatively smooth, because once the jammers had loaded the `EmptyLevel` we knew that the engine and template project were setup properly. Once people's setup of the template project was complete questions exponentially decayed for the rest of the game jam. Some of the early questions we were asked were:



*   Whether our engine had physics? No.
*   Whether our engine had an editor? Out of scope.
*   How much of the graphics does the developer need to be aware of? Not much really.
    *   The question was asking about specific implementations of the graphics, which ended up not being terribly relevant once they started developing.
*   As well as a few API decisions/usages.

Each of the jammers had a different approach to learning about the engine since they had no prior experience with it. We had provided usage documentation through our website, an executable of our tech demo levels (and links to them in the git repo), as well as the engine through github. We didn't give any direction for design or restrictions in what the jammers could use, the engine was their toybox. Our only "constraint"/direction was the theme of the game jam, a game you could play drunk. Our selection of this theme was thinking that this would help keep implementations simple without worrying about too complex mechanics and something the jammers could accomplish in the short time.

![Game Jam](../images/blogs/week-14/gj-process.png)

In the end we had nine successful games, with only two games crashing on loading. Screenshots of those games can be seen below, and video capture can be seen in the [games video below](#engine-reflection). We were pretty stunned with what our jammers were able to accomplish with our engine in such a short period of time! The jammers also helped us find some pretty serious bugs like scaling and rotation order within our transform class were switched (read more about that one and others in [patch notes](#patch-notes)).

![Game Jam](../images/blogs/week-14/gj-games.PNG)

After the game jam completed we showcased all the games and had awards for: jammer's choice (game the jammer's like the most), Isetta's choice (game the team liked the most), best themed (game that matched the theme the best), was that made in Unreal (game that looked the prettiest), and 0st penguin (the game that tried something crazy but didn't fully succeed). In the days following the game jam, we created a survey to get some results about how the jammers felt about the jam and to answer some of our questions. We'll share the responses with you!

![Game Jam](../images/blogs/week-14/gj-instructions.png)

![Game Jam](../images/blogs/week-14/gj-thoughts.png)

![Game Jam](../images/blogs/week-14/gj-ease_of_use.PNG)

![Game Jam](../images/blogs/week-14/gj-difficulties.PNG)

![Game Jam](../images/blogs/week-14/gj-magic_wand.PNG)

We'd highly recommend if you are making an engine to hold a game jam at least once during development (the more times the more usable it will become). It will test the usability, find bugs, and ensure you aren't making assumptions that only you can follow. Our two cautions associated with this are: 1) have sold setup documentation as well as usage documentation, especially if you have sparse comments and 2) be at a semi-stable time of development (you don't want your engine breaking) and establish what features your engine supports and doesn't so your jammers don't think they have the capabilities of Unity/Unreal. If you're engine is only for your game, we'd still recommend hosting one, because at worst you find some bugs and at best you will have some cool examples of how people have used your engine. Our main reason though to hold a game jam though is fun. It was a huge motivation boost (so long as people can actually use it) for us as engine developers to see the cool capabilities that we didn't imagine was possible with our engine!

![Game Jam](../images/blogs/week-14/gj-fun.PNG)

You can download and play some of the games made by our jammers [here](https://drive.google.com/drive/folders/1nCSaYNJWU4axNC9VB5jNHimq9q277sOz?usp=sharing)!!


## Full-Feature Demo Game

After implementing necessary networking features for our final game last week, we finally dove into gameplay programming for the game. As it turned out, our engine was still pretty easy to use and we implemented the gameplay features in 2 days, and spent some more time adding sound and designing the level. As this is the last part of our project and we wanted to get the game running as fast as possible, our gameplay code got really dirty where the `GameManager` is like the almighty god who knows everything (we also used singletons in the game excessively)! 

However, as we went into the polishing phase we started noticing more bugs in our engine. For example, we had a bug where animation blending stops halfway and boxes push other colliders in weird ways during collision solving, etc. We will talk about how those were fixed later.

We also spent some good time tweaking Horde's light settings and ambient map to get the feel we wanted, and here is our final game: _The Last of Isetta_!

<div class="video-wrapper">

   <iframe width="1280" height="720" src="https://www.youtube.com/embed/40KGj2rzqbs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

</div>


## Engine Reflection

So what does it mean to be done with the engine? It certainly doesn't mean it is bug free, stable, or even feature complete. For us, being done just means we don't have anymore time to dedicate to developing it. Then how can we say we are done? Well, because we were able to complete our [feature demo game](#full-feature-demo-game) and we've accomplished what we set out to do, learn engine development.

What we would love to see happen is for the engine to become more stable by external developers issuing fixes. However, the engine being stable isn't an important factor for our project, it's it being a novice engine, our first engine, that is more important. Regardless of the bugs, the engine is still usable to create games, not as complicated as a Unity or Unreal game, but a game that isn't restricted by the toolbox of commercial games.

Finally, we since our goal was to help demystify game engine developments or at least make them more approachable, we have created some additional documentation. You may have already seen our [compendium tab](/compendium/), which threads together the blog posts from each week with the relevant interviews and corresponding postmortem for a specific subsystem of the engine. In these postmortems, we even list what went right and what went wrong (although we ran out of time to fully elaborate on each of them). We want the compendium to be a source that can be easily approachable for others, and we recognize our weekly blogs aren't that. There is also an overall engine postmortem within the compendium pages, which is more akin to a regular postmortem. It covers 3 of the key lessons learned and 3 of the most important things that went right/wrong in-depth. If you plan on developing any type of game engine, not just a twin-stick or one to learn, we think you may be able to get something out of this postmortem.

<div class="video-wrapper">

   <iframe width="1280" height="720" src="https://www.youtube.com/embed/qY91OtionBA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

</div>


## Patch Notes


### Collision Solving was Unsolved

We had a lot of problems left in our collision solving system, but most of them we were willing to ignore (for instance, our capsule-box collisions are horrendous and mostly not usable!). However, there were a few that were total blockers:



*   Boxes were really bad; we made the assumption of uniform scaling for the box colliders, which made us compare distances _from its center_ to determine which face should be pushing the other colliders. Obviously if one dimension of the box is scaled a lot larger than the other, then that dimension is way more likely to push the other collider! So we instead determined the distance by distance _from the faces_. \
![Box Dimensions for Collisions](../images/blogs/week-14/box-dimensions-for-collisions.png)
*   Another problem with box colliders was that, when another colliders would collide with the box's edge, the box would give that collider its center as the reference point to solve the collision with. This would cause spheres to shift up or down whenever it touched a corner because its force vector would point towards the center of the box! This was solved by constricting the box's reference point to the orthogonal plane to the colliding edge that also passes through the sphere's center point—this effectively restrains our collision solve to only push on that plane, which makes it correct. \
![Collisions on Edge](../images/blogs/week-14/collisions-on-edge.png)


### Debug Drawing Can Be Non-Helpful Sometimes

Simple problems thankfully have simple solutions, but when you don't see the simple problems, they can become very nasty and sometimes complex problems. One instance of this was our debug drawing system. Our colliders were drawing their shapes in the incorrect position depending on how the `center` was offset from the actual center of the entity. This wasn't typically an issue, until we began to set up the level for our final game! Thankfully we found this problem thanks to our robust transform class and our nice in-game inspector.


## Coming Soon

Nothing... Well that's not entirely true. We are still working on postmortems for the project and the engine subsystems that we'd like to share with you all. Where our project postmortem is similar to a postmortem from [gamasutra ](http://www.gamasutra.com/features/postmortem/)or GDC, the subsystem postmortems are more about us reflecting on a few of the big lessons we learned as well as listing all of the things we wish we knew before starting that particular subsystem.

There are few more pieces to the project we will be uploading just to wrap things up, however the engine will cease to be developed (well at least by us as a team) and we don't anticipate future blogs to be coming. But this project isn't dead or being left behind, we aren't continuing with it because we don't want it to become how to make your 5th engine; we want it to still be inviting for the prospective engine developers who have yet to build their first. If we continued to iterate on the website, it would be disingenuous to call us novice/naive engine developers for much longer (although we still have a long way to go before joining the ranks of the professionals we interviewed).


## [Resources](/resources.md)

This page may be updated as we move on because it purely a source of external links, helping direct you to where you may want to look or read about a topic. We may find additional links that could be helpful in our other endeavors, that we want people to know about here. The page also has comments, so if you know of good resource for a topic we have listed please feel free to write about it in the comments.