# Collisions

The [collisions level](https://github.com/Isetta-Team/Isetta-Engine/blob/develop/Isetta/IsettaTestbed/CollisionsLevel/CollisionsLevel.cpp) is the best place for you to get started.

Collisions are detected by our three collision components: `BoxCollider`, `SphereCollider`, and `CapsuleCollider`. All colliders that are not set as triggers are also prevented from intersecting from one another. To attach any functions to a collider for when other colliders enter, stay, or exit from it, you can use the `CollisionHandler` component.

Collision handlers work as a tree structure, so any colliders that exist directly under an entity with a `CollisionHandler` component (that is, there are no other entities with `CollisionHandler` components between it and the collider entity) will fire a function registered to that `CollisionHandler`.

## Essential API
- `Collisions::Raycast(ray, rayHit, maxDistance)`: fire a ray defined by `ray` up to the distance of `maxDistance` and see if it hits anything from the return value, then use `rayHit` to get info about the collision
- `Entity::AddComponent<CollisionHandler>()`: add a collision handler to an entity
- `CollisionHandler::RegisterOnEnter(function<Collider*>)`: Registers a given function (lambda or not) to the collision handler to be called when any of the colliders under the handler that are not covered by other handlers are entered by another collider.
- `CollisionHandler::RegisterOnStay(function<Collider*>)`
- `CollisionHandler::RegisterOnExit(function<Collider*>)`

## Code Snippets
Creating a box collider and attaching a callback to be called when another collider enters it:
``` cpp
Entity* entity = Entity::Instantiate("box-collider");
entity->SetTransform(Math::Vector3{0, 1, 0}, Math::Vector3{0, 0, 0});

// Create a box collider
BoxCollider* bCol = entity->AddComponent<BoxCollider>();
bCol->isTrigger = true;

// CollisionHandler has callbacks of Enter/Stay/Exit
CollisionHandler* handler = entity->AddComponent<CollisionHandler>();

// CollisionHandler registering OnEnter callback
handler->RegisterOnEnter([](Collider* const col) {
    LOG("we have collided with " + col->entity->GetName());
});
```