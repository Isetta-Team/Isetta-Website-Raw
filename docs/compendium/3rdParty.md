# 3rd Party

## Timeline

### Week 1
- [Rendering: Ogre vs Horde3D](../../blogs/week-1/#rendering): We narrowed down to two choices, [Ogre](https://www.ogre3d.org/) and [Horde3D](http://horde3d.org/). While Ogre is powerful and well-known, we decided on Horde3D due to the ease of building it and its lightweight design. Then we made a demo to prove we could!
- [Audio: OpenAL Soft vs FMOD](../../blogs/week-1/#audio): For audio, our two choices were [OpenAL Soft](https://github.com/kcat/openal-soft) and [FMOD](https://www.fmod.com/). We tried out OpenAL Soft due to it being open source, but we were confused with it even three hours after working at it. On the other hand, FMOD was a breeze to use and had ample documentation. So we jumped right into it and implemented our audio engine using FMOD!
- [Networking: GameNetworkingSockets vs yojimbo](../../blogs/week-1/#networking): See the [Networking Compendium](../Networking/#week-1) for more details!
- [String ID](../blogs/engine-architecture.md#core): String hashing is a very helpful utility that allows strings to use less memory and serve better as keys for other values, so we found an [open-source string ID library](https://github.com/TheAllenChou/string-id) to bring in.

### Week 2
- [Making our Rendering API](../../blogs/week-2/#graphics): After settling on Horde3D, we wrapped it up inside our engine as `RenderModule`, and [for windows](../../blogs/week-2/#the-window-module), we wrapped GLFW as `WindowModule`. Our initial module design was a bust, but we learned to keep things flat and managed in one place early on.

### Week 3
- [Input Implementation](../../blogs/week-3/#input-module): We implemented our `InputModule` by wrapping the basic `GLFW` functionality with a couple of our own interfaces, namely a polling method and a callback registration method.

### Week 5
- [Ooey GUI](../../blogs/week-5/#gui): As it turns out, Horde3D has no GUI solutions, so we looked into [ImGui](https://github.com/ocornut/imgui) and [Qt](https://www.qt.io/). ImGui had a more lenient usage policy, and we could tell it was in very active development, so we went ahead with that.
    - [ImGui Stands for Something?](../../blogs/week-5/#guimodule): After choosing a library, we needed to decide on how developers would use our GUI system. We took advice from [Amandine Coget](../../interviews/AmandineCoget-interview/#gui-immediate-vs-retained-modes) and [Walt Destler](../../interviews/WaltDestler-advice/) and went with a immediate mode GUI implementation, then quickly realized how important making a game is for proving which GUI features you actually need!
- [Horde3D Turns Out to Be a Pain](../../blogs/week-5/#more-on-horde3d): We discovered that "lightweight" sometimes means "missing features" when Horde3D revealed that it [does not expose its texture loading functionality](../../blogs/week-5/#gui-and-textures) (needed by our GUI system), attempts to [load some resources during runtime](../../blogs/week-5/#loading-nested-resources), and [won't let us control its memory](../../blogs/week-5/#loading-nested-resources).

### Week 10
- [We Expose Textures!](../../blogs/week-10/#graphics): We complained about textures five weeks ago, and we felt that had dealt with Horde3D's oppressive control of the textures for long enough, so we whipped up our own OpenGL texture loader and hooked that in!
- Patch Notes:
    - [Modifying Input with Modifier Keys](../../blogs/week-10/#modifying-input-with-modifier-keys): We originally didn't have modifier keys like Shift and Ctrl implemented with our input system, but when we started to add debug features, we quickly realized the necessity of specialized key combinations for input.

### Week 11
- [Font Frenzy](../../blogs/week-11/#gui): Up until now, our text was always tiny and boring, so we decided to replace it with some better font. As it turns out, we didn't have enough font functionality in our engine! We reworked most of font implementation and ended up with some pretty results.

### Week 12
- [How Can Audio Be 3D If Our Ears Are 2D?](../../blogs/week-12/#audio): Audio is often left until the end on game projects, and the Isetta Engine is no different! We found that our audio system wasn't quite enough, so we implemented spatialized audio and reworked the rest of our module to be more effective and usable.

## Relevant Interviews

### Jeff Preshing
- [Creating Your First Engine](../../interviews/JeffPreshing-interview/#creating-your-first-engine)
- [Systems Integration](../../interviews/JeffPreshing-interview/#systems-integration)
### Martin Middleton
- [The Spectrum of Engine Development](../../interviews/MartinMiddleton-interview/#the-spectrum-of-engine-development)
### Amandine Coget
- [GUI: Immediate vs Retained Modes](../../interviews/AmandineCoget-interview/#gui-immediate-vs-retained-modes)
### Tommy Refenes
- [Using 3rd Party Libraries](../../interviews/TommyRefenes-interview/#using-3rd-party-libraries)
### Adam Serdar
- [Integrated Libraries into an Engine](../../interviews/AdamSerdar-interview/#integrating-libraries-into-an-engine)

## Postmortem
**Research the libraries you'd consider using, then have a night's sleep before choosing to use one.** Or even better, take some time to use the library (_not_ integrate it) in a separate test environment! Many of the libraries that we used for our engine were paired with some test projects, so we were able to go in and rummage around for a while before we made the leap and brought them into the engine. In doing so, we got to see (1) what are the most commonly used parts of the library, (2) what are the quirky or strange parts of the library, and (3) how comprehensive is the documentation. This stage was great for us to scour the internet for forums or documentation pages related to what we wanted out of the library, and if we struggled to find what we needed, then it was a good sign that the library might not be right for us. However, even after doing all of this, **don't feel like you're stuck with a library that you've chosen just because you've spent some time with it.** Long-term usage of a library will reveal much more of the negatives than short-term usage will. In our case, we first tried using the [GameNetworkingSockets](https://github.com/ValveSoftware/GameNetworkingSockets/) library for our networking solution, and we thought that it mostly had what we wanted after we ran the test project. Later, we discovered a lot of commented-out code and grew much more suspicious of missing functionality that we might need, so we jumped ship over to [yojimbo](https://github.com/networkprotocol/yojimbo/). We can't say for sure whether GameNetworkingSockets would have been a poor choice, but yojimbo has turned out nicely for our engine, so we certainly didn't lose anything by being cautious like this!

**Create an abstraction layer for your game developers—don't just expose the library.** Most libraries that you use will _not_ follow the same semantics, conventions, and guidelines as your own engine's API, and keeping that consistent is important for the usability of the engine. This will still be useful even if you have to do it for over 100 functions; in our case for Dear, Imgui, we had to abstract out quite a few functions and classes just to keep them within our own style. The result was a seamless GUI API from a 3rd party library that we brought into our engine! Without that, we likely would have had a much harder time utilizing our engine's GUI functionality since its API conventions would differ from the rest of the engine's API.

Your first abstraction will look a lot like the library that you're abstracting, which is okay; it doesn't need to look different until you bring in another library for that system as well. This is another good reason to create an abstraction layer: You can much more easily pull out your previous 3rd party library without affecting the games that are using that module. You won't be able to change the return values or function signatures, of course, but you can change anything about the implementation and the game developer should hardly be able to tell the difference!

**More things to know:**

*   Integrating multiple rendering libraries isn't pleasant, but it may be necessary depending on what you use. The best steps you can follow would be to get each library working separately then slowly integrate one into another in small, testable chunks.
*   Your engine doesn't need all of the features a library provides, so don't try to expose everything that you **think** is necessary; only expose things that you see as immediately being needed for the engine. We made this mistake with our GUI library, and regretted the time wasted on it. Another key benefit of an abstraction layer above your library would be that you can more easily expose more functionality when you find that you need it.
*   Our opinions on the libraries that we used:
    *   _Dear, Imgui_: **Recommended**. Dear, Imgui is a robust and consistently-improving library for immediate mode GUI rendering. The only negatives we found in using it were that we needed to provide the textures for it to render and Horde3D was not providing them, and it required access to our windows, which was another Horde3D annoyance.
    *   _Horde3D_: **Not recommended**. Horde3D is definitely a lightweight rendering engine, but that was more of a hindrance than a help to us. We wanted something that would be quick to integrate into the engine, but we made the mistake of overlooking missing features until it was too late. The asset pipeline of Horde is also messy and slow, which got very annoying when we were developing games later in the project timeline.
    *   _yojimbo_: **Recommended**. yojimbo does pretty much what it says it does: Real-time networking messages and client-server communications. We had to inject a lot of our own functionality, like connection callbacks and an abstracted method of declaring message types, but the base functionality was all there and good for us to build off of.
    *   _FMOD_: **Recommended**. FMOD delivers simple audio functionality to a game engine, which is precisely what we needed. It possibly doesn't have the advanced functionality of its competitors, and controlling its memory accesses requires heavy modification, but we were able to get it running and integrated in record time, which means it's good in our book.
    *   _Brofiler_: **No opinion**. Brofiler was sufficient for us to profile out our systems and even specific functions within the engine, but we had to make a fork of the repository to fix some things in it before we could even use a functional build. If we spent more time on this aspect of development, we may have formed a good opinion of the tool, but we didn't, so we haven't!