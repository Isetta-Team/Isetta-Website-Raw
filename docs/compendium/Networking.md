# Networking

## Timeline

### Week 1
- [Investigating Libraries](../../blogs/week-1/#networking): We built and ran Valve's [GameNetworkingSockets](https://github.com/ValveSoftware/GameNetworkingSockets) library, but found it was too messy and half-baked for us to comfortably use, especially regarding documentation. We found [yojimbo](https://github.com/networkprotocol/yojimbo) as an alternative, which seemed cleaner and more prepared for us to use.

### Week 2
- [The Decision](../../blogs/week-2/#the-decision): Based on documentation and apparently feature richness, we chose  [yojimbo](https://github.com/networkprotocol/yojimbo) for our low-level networking library. We extracted the test code from yojimbo's own test project and integrated it into our testbed.

### Week 3
- [Connecting our Computers](../../blogs/week-3/#the-actual-coding-part): We developed a basic client-server model that we (for the time being) assumed would always be on, then cleared it on a single-machine setup. We became thirsty for progress and pushed forward to test a [computer-computer setup](../../blogs/week-3/#game-like-networking), and we got sounds playing across the network!

### Week 5
- [Memory for the Network](../../blogs/week-5/#an-overview-of-the-future): We mapped out some future plans regarding client and server needs, then we transitioned the networking systems onto our own managed memory, which involved some [important high-level decisions](../../blogs/week-5/#mo-players-mo-problems).

### Week 7
- [Messages to Our Future Selves](../../blogs/week-7/#the-way-messages-are-made): With our base network functionality out of the way, we began implementing the system that would support most if not all of our networking functionality: [Remote procedural call messages](../../blogs/week-7/#rpcs).
- [First and Second Versions of Network Messages](../../blogs/week-7/#first-pass-at-rpc-messages): We made some attempts at a robust, convenient message creation system...
- [Network IDs](../../blogs/week-7/#network-identities): ...then we established a system for tracking entities across the network using those messages...
- [Third Version of Network Messages](../../blogs/week-7/#and-a-third-pass-at-rpc-messages): ...and we redid the remote procedural call messages again! This time, we got it to utilize templating and classes instead of gross string identifiers like `"HNDL"`.

### Week 9
- [Transform-ing the Network](../../blogs/week-9/#network-transform): We used our previous RPC message framework to develop our networked transformation synchronization system! After the initial pass, we basically had functional network transforms, so we spent the rest of our time on nice things to have like [interpolation](../../blogs/week-9/#interpolation-or-doing-a-lot-with-a-little) and [optimized network usage](../../blogs/week-9/#fewer-messages-fewer-problems).

### Week 10
- [Missing Features](../../blogs/week-10/#second-game): When developing the second game in our engine, we realized that we were missing some key things like parenting and snapping over the network. So we implemented them!
- Patch Notes:
    - [Making the Network "Local"](../../blogs/week-10/#making-the-network-local): Our `NetworkTransform` class originally performed all of its calculations in world space to keep things uniform, but that meant sending way more synchronization messages than needed when parenting! As a result, we swapped world space out for local space.
  
### Week 13
- [Networked Game Management](../../blogs/week-13/#networked-game-management): Although all of our in-game needs were pretty much covered, we still lacked many out-of-game things, such as connection callbacks and [networked level loading](../../blogs/week-13/#network-load-level).
- [Network Discovery](../../blogs/week-13/#network-discovery): Another big out-of-game feature we were missing was a lobby system! Our previous systems required the player to know the IP of their host, but we implemented a LAN broadcasting system using some basic socket programming.

## Relevant Interviews

### Martin Middleton
- [Technology from Flower to Journey](../../interviews/MartinMiddleton-interview/#technology-from-flower-to-journey)
- [Journey's Peer Networking System](../../interviews/MartinMiddleton-interview/#journeys-peer-networking-system)
### [Amit Patel & Rob Shillingsburg](../../interviews/AmitRob-advice/)
### [Walt Destler](../../interviews/WaltDestler-advice/)

## Postmortem

Short disclaimer: We never dove deeply into game networking for various reasons, so we can't speak much towards advanced network programming or any beyond-basic features like client-side prediction or world state delta encoding; if you're interested in those things, there are some great papers from games like _[TRIBES](https://www.gamedevs.org/uploads/tribes-networking-model.pdf)_ and _[Doom III](http://mrelusive.com/publications/papers/The-DOOM-III-Network-Architecture.pdf)_ that have good information about them. Instead, what we can write about is how one would even start doing network programming for games, especially as someone who hasn't done any network programming before.

**First, just because you're doing network programming for a game does _not_ mean that you have to use the TRIBES Engine networking model**—especially if you're not even making a first-person shooter! We mistakenly believed that we needed to encode the world state and intelligently map out all of our entities as serializable objects when we were starting our networking features, largely due to _[Multiplayer Game Programming](https://www.amazon.com/Multiplayer-Game-Programming-Architecting-Networked/dp/0134034309)_ by Glazer and Madhav (which is a great introduction to network programming by the way!). We didn't know what all of that meant, or even what the data was supposed to look like, but we believed that we needed to create a robust, effective, and optimized network model for our engine, so you can imagine what we looked like when we were trying to design an architecture for something we had no idea about!

Fortunately, one of our programmers had some higher level networking experience and wisely suggested that we start small: All we need are network messages. We were building on top of [yojimbo](https://github.com/networkprotocol/yojimbo) so we avoided having to program below the [session layer](https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjsqbHVlY7fAhUpm-AKHYAoAmAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.webopedia.com%2Fquick_ref%2FOSI_Layers.asp&psig=AOvVaw0PbqIRCa1wZCbipGfQJr9M&ust=1544287569911397), and we were able to implement some rudimentary network messages very quickly. The moment we got messages going across the network, we were ecstatic! This was the cornerstone of anything that we would need for game networking, and we managed to make it happen!

We only added one more advanced feature to our network repertoire beyond network messages because we never really needed anything else. Fundamentally, all you need in a networked game is a signal that will tell other computers to run some code, which is what those messages can do. By getting over this bump in the road, we were able to move onto doing networked spawning, networked object transforms, and more, and we didn't waste much of our time trying to over engineer the networking simply because we didn't understand it better.

**The networking features of a game engine _cannot_ be predicted.** Even if you're targeting a specific genre with that engine (like twin-stick shooters or something weird like that), you'll be adding in features that you think games will need and not the ones they actually need. We spent time on things that we thought would be important, such as optimizing our network transforms to take up less bandwidth, and it turned out that we were missing much more important features, like an API for parenting objects across the network. The former wasn't important because in the end, our networking was never able to extend beyond a LAN setup, whereas the latter was needed for the immediately next game that we made after finishing our network manager API. But we believed that optimizations would be really important because that's stressed a lot by network programmers who are far more experienced than anyone on our team.

We talk about this elsewhere, but what's important when developing any game engine system (networking included) is to _actually make games when you're doing that_. A game engine in isolation would yield networked tech demos, and tech demos test what you already know you have. What's more is that making games also tests the real use cases of the games; as it turns out, a LAN doesn't really need packet optimization, but it does need gameplay quality of life features regarding networking like snapping objects into position. Knowing that requires stepping up and making something real with the system, not just setting up test suites.

**More things to know:**

*   Every new feature that you get working over a network will be an exciting moment, and [you should celebrate it with as much of your team as possible](https://www.youtube.com/watch?v=LT3XdIKP_08).
*   Building your networking system on top of a 3rd party library will get you most of the way there, especially if you don't have great needs from your networking.
*   Our network message system is flexible and effective, but it requires a _lot_ of duplicated code, which makes it a hassle to set up for new functionalities over the network.
*   Know your end goal before designing your network system architecture. LAN networking should prioritize different things than long-distance networking, like responsiveness over packet reduction.