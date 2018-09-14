## Walt Destler

_Walt is an independent game/entertainment programmer and designer currently working in the San Francisco Bay area. He was a programmer and designer on [WAY](https://waltdestler.com/way.html), the IGF 2012 Best Student Game Winner, and is now independently working on his new game [Cosmoteer](https://waltdestler.com/cosmoteer.html)._

We approached Walt because he also went to the ETC for graduate school. He was working on a side project to build a game engine for more than three years and is now making a game with his own engine. We did a Skype call with him.


**Advice:**


*   Engine design
    *   When making your game, deliberately separate engine code from game code. Draw a clear wall between them right from the start and make design decisions to facilitate that.
    *   Build a game to prove that your engine works.
    *   Try to make engine code robust and reusable.
*   Experience
    *   Walt's first engine originated from the game he was making in college, and he kept the engine code to be used for future games. He found he was adding features to the engine frequently when making his second game.
    *   He started with Unity when making his current game, and later switched to his own engine for the following reasons:
        *   Limitations of Unity's sprite animation system
        *   Hard to determine which functions get called before others (back when Script Execution Order setting was unavailable in Unity)
        *   2D physics capability was limited, so he was forced to use only 2 dimensions of the 3D physics engine which was more complicated and expensive
*   Components
    *   Two games and one game engine are huge amounts of work, meaning we will need to decide which components to implement and which to import:
        *   Custom engines don't necessarily have a ton of tools, like a level editor or a UI editor
        *   You can still use graphics API to draw UI for developer yourself
        *   There a handful of 3rd party libraries that simplify development, like Iron Python for scripting and Farseer for physics (if physics is less interested and physX is too much)
    *   Networks for strategy games are easier to implement
        *   UDP should be used for latency-sensitive games like FPS and action games, but a layer needs to be built on top of UDP for reliability
        *   TCP is fine for things like strategy games
    *   Physics(collisions) are more useful for engines than netcode, but can still lead to glaring omissions.
    *   It's hard to graft physics component onto an existing game engine, but easier to graft networking.