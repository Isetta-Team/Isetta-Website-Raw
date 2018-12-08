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
