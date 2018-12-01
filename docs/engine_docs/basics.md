# Basics
The Isetta Engine uses an entity-component-system, comparable to Unity's GameObject-MonoBehavior system. 

## Assumptions/Conventions
- Coordinates are right-handed (`Vector3::left = (1, 0, 0)`)
- Matricies are row-column (`Matrix4 mat[ROW][COLUMN]`)
- When using the built-in `MemoryManager`, it does not protect you against yourself (in general the engine does 
not protect a naive user from shooting themselves in the foot)