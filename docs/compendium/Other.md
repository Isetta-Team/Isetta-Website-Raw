# Other Topics

<!--
## Timeline

### Week 0
- []()
 
### Week 1
- []()

### Week 2
- []()

### Week 3
- []()

### Week 4
- []()

### Week 5
- []()

### Week 6
- []()

### Week 7
- []()

### Week 8
- []()

### Week 9
- []()

### Week 10
- []()

### Week 11
- []()

### Week 12
- []()
  
### Week 13
- []()

### Week 14
- []()

## Relevant Interviews

## Postmortem
-->

## Debugging Postmortem (IN-PROGRESS)
*   Unit testing (disclaimer: didn't _really_ do it)
    *   Full coverage unit test anything that resembles more software development thing compared to game thing, ie when input and visuals aren't a part of the system
    *   Partial unit tests are still really useful to catch silly bugs
    *   Requires commitment to do
        *   It's a way of developing (TDD)
        *   Fundamental developer commitment
    *   Tech demos are similar (not necessarily equivalent) to unit testing features with graphics/input
*   Debug drawing possibly most used feature in engine
    *   Can be inefficient if not part of rendering engine so limit to debug compile
    *   Try to use the rendering engine to do it
        *   Don't use model assets if you can't draw native
    *   Low-level graphics API are hard to debug
        *   You don't know if the thing you are trying to draw is behind the camera, if the camera isn't rendering, if the object is just not being drawn, if the object is being drawn backwards, etc
        *   Spin off separate project to start off (you want to know it works before trying to integrate it with your actual rendering engine)
*   Be excessive with assert messages
*   Exceptions should only be used if you want the user to be able to recover
*   Use exceptions for user errors and asserts for engine errors
    *   If something shouldn't happen in the engine (allocating <= 0 bytes) assert
        *   Asserts are used for bugs in the engine
    *   If user could cause issue, exception so user can see what's wrong (if they catch)
*   Visual studio windows that are useful: watch, autos, locals, call stack, output, and memory watcher
    *   Learn how to use different types of breakpoints
    *   Learn how to use memory window