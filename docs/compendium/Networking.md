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