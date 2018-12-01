# Graphics

The best place for you to get started is the [mesh anim level](https://github.com/Isetta-Team/Isetta-Engine/blob/develop/Isetta/IsettaTestbed/MeshAnimLevel/MeshAnimLevel.cpp).

## Essential API
- `Entity::AddComponent<MeshComponent>("pathToMeshFile")`: the mesh file to be included here has postfix `.scene.xml`, like "Zombie/Zombie.scene.xml"
- `Entity::AddComponent<AnimationComponent>(MeshComponent*)`: add an animation component to an entity
- `AnimationComponent::AddAnimation("pathToAnimationFile", int layer, "startNode", bool additive)`: add an animation to animation component
- `AnimationComponent::TransitToAnimationState(int state, float time)`: transit between animations

## Code Snippets
Adding mesh and animation, and transiting between animations:
``` cpp
Entity* player = Entity::Instantiate("Player");
MeshComponent* playerMesh =
    player->AddComponent<MeshComponent>("Soldier/Soldier.scene.xml");
AnimationComponent* playerAnimationComp =
    player->AddComponent<AnimationComponent>(playerMesh);
playerAnimationComp->AddAnimation("Soldier/Soldier_Idle.anim", 0, "", false);
playerAnimationComp->AddAnimation("Soldier/Soldier.anim", 0, "", false);
player->AddComponent<PlayerController>();

playerAnimationComp->TransitToAnimationState(1, 0.2f);
playerAnimationComp->TransitToAnimationState(0, 0.2f);
```

Adding camera to the scene and setting its properties:
``` cpp
Entity* cameraEntity = Entity::Instantiate("Camera");
auto* cameraComp = cameraEntity->AddComponent<CameraComponent>();
cameraEntity->SetTransform(Math::Vector3{0, 5, 10}, Math::Vector3{-15, 0, 0},
                           Math::Vector3::one);

cameraComp->SetProperty<Property::FOV>(CONFIG_VAL(cameraConfig.fieldOfView));
cameraComp->SetProperty<Property::NEAR_PLANE>(CONFIG_VAL(cameraConfig.nearClippingPlane));
cameraComp->SetProperty<Property::FAR_PLANE>(CONFIG_VAL(cameraConfig.farClippingPlane));
```