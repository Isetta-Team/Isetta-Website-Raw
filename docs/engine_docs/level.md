# Level

Levels in Isetta are comparable to scenes in Unity. 

## Creating Levels
To create a level, add the following `.h` and `.cpp` file.

`LEVEL_NAME.h`
```cpp
#pragma once
#include <Scene/IsettaLevel.h>
#include <Scene/Level.h>

DEFINE_LEVEL(LEVEL_NAME)
void Load() override;
void OnUnload() override;
DEFINE_LEVEL_END
```

`LEVEL_NAME.cpp`
```cpp
#include "LEVEL_NAME.h"

// IsettaCore not necessarily needed, holds a number of useful header files
#include <Core/IsettaCore.h>
#include <Graphics/CameraComponent.h>

using namespace Isetta;

void LEVEL_NAME::Load() {
    // Level NEEDS a camera
    Entity* cameraEntity = Entity::Instantiate("Camera");
    cameraEntity->AddComponent<CameraComponent>();
    cameraEntity->SetTransform(Math::Vector3{0, 5, 10}, Math::Vector3{-15, 0, 0},
                             Math::Vector3::one);
}

void LEVEL_NAME::OnUnload() {
    // Anything you might need to do on the level unloading
    // Entity's will be destructed/destroyed on actual level unload
}
```

- To load the file you just added as start up level, go to your `user.cfg` and set `start_level` to `LEVEL_NAME`.

## Essential API
- `LevelManager::Instance().LoadLevel("levelName")`: programmatically load levels
- `LevelManager::Instance().loadedLevel`: get information about current level

## Example Levels
|	Level Name			|	Level Description																|
|		:-:				|			:-:																		|
|	[`AILevel`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/AILevel)			|	Level showing how navigation module works in the engine and how to use the particle system  |	
|	[`AudioLevel`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/AudioLevel)		|	Level with 2D and 3D audio looping and one shot 								|
|	[`BVHLevel`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/BVHLevel)			|	Level testing our dynamic AABB tree												|	
|	[`CollisionsLevel`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/CollisionsLevel)	|	Level testing our collision intersections										|
|   [`CollisionSolverLevel`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/CollisionSolverLevel)	|	Level testing our collision solving system							|  
|	[`DebugLevel`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/DebugLevel)		|	Level demoing our debug drawing capabilities									|	
|	[`EditorLevel`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/EditorLevel)		|	Level showing the editor components: inspector, heirarchy, and console and level loading menu  |
|	[`EmptyLevel`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/EmptyLevel)		|	Empty level to be used as a starting point for user created levels				|
|	[`EventLevel`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/EventLevel)		|	Level demoing our event messaging system with sender and listener components	|
|	[`ExampleLevel`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/ExampleLevel)			|	Level with an animating model and example component								|
|	[`GUILevel`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/GUILevel)			|	Level demoing some of our GUI capabilities										|
|	[`InputLevel`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/InputLevel)		|	Level demoing some of the input capabilities 									|
|	[`LevelLoadingLevel`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/LevelLoadingLevel)		|	Level showing a menu to browse levels and load specific level 										|
|	[`MeshAnimLevel`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/MeshAnimLevel)		|	Level with a mesh that is being animated 										|
|	[`NetworkLevel`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/NetworkLevel)		|	Level demoing some of our networking capabilities. The `default_server_ip` in config should be set to your LAN IP for this level to work. |
|	[`PrimitiveLevel`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/PrimitiveLevel)	|	Level displaying all the types of primitive objects 							|	
|	[`SkeletonLevel`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/SkeletonLevel)		|	Level displaying a mesh and entities used to follow the skeleton 				|	
|						|																					|					|
|	[`Halves`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/Halves)			|	First demo twin-stick shooter game we created! Only support gamepads			| 
|	[`KnightGame`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/KnightGame)		|	Game with a knight and a sword, can you take down the most training dummies?	|
|	[`Week10MiniGame`](https://github.com/Isetta-Team/Isetta-Engine/tree/master/Isetta/IsettaTestbed/Week10MiniGame)	|	First demo game with networking. Fool your enemy with your sword young man!		|