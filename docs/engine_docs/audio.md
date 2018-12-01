# Audio

Our audio system is similar to Unity's - we also have an `AudioSource` component and a `AudioClip` class that hold actual clips.

The [audio level](https://github.com/Isetta-Team/Isetta-Engine/blob/develop/Isetta/IsettaTestbed/AudioLevel/AudioLevel.cpp) is the best place for you to get started.

## Essential API
- `AudioClip` class is responsible for loading in audio files and show be passed to `AudioSource` component to be played
	- `AudioClip::Load("filePath", "soundName")`: Load audio file as `AudioClip`, returns `AudioClip*`. Path is relative to "Resources"
	- `AudioClip::Find("soundName")`: Find already loaded audio file, returns `AudioClip*`
- `AudioSource` component is responsible for playing sound and managing its properties
	- `AudioSource::AudioSource(AudioClip* clip)`: construct an `AudioSource` component by passing in an `AudioClip*`
	- `AudioSource::SetAudioClip(AudioClip* clip)`: Set the audio clip to be played on an audio source
	- `AudioSource::Play()`, `AudioSource::Pause()`, `AudioSource::SetVolume(float volume)`
	- `AudioSource::SetProperty(Property prop, bool value)`: Set properties like 3D, loop, and mute
- `AudioLisenter` component should be added to your camera or another appropriate entity to enable 3D sound. There should only be 1 `AudioListener` in the level

## Code snippets
**Play a 3D sound::**
``` cpp
Entity* cameraEntity = Entity::Instantiate("Camera");
cameraEntity->AddComponent<CameraComponent>();
cameraEntity->AddComponent<AudioListener>();

Entity* audio3D = Entity::Instantiate("3DAudio");
audio3D->transform->SetWorldPos(Math::Vector3{0, 0, 0});
// AudioClip::Load loads the audio in the filepath under resource_path
// AudioSource constructor parameters:
// 0b001 - properties of AudioSource 0b=binary then from left to right:
// IS_MUTE, IS_LOOP, IS_3D
// This AudioSource is NOT muted, NOT looping, but IS 3D
AudioSource* src3D = audio3D->AddComponent<AudioSource>(
    0b001, AudioClip::Load("Sound/zombie-hit.wav"));
// AudioPlay component which plays AudioSource on KeyCode press
audio3D->AddComponent<AudioPlay>(KeyCode::NUM3, src3D);
```

**Play a 2D sound:**
``` cpp
Entity* audio2D = Entity::Instantiate("2DAudio");
AudioClip* clip = AudioClip::Load("Sound/sample_sound.mp3");
AudioSource* src2D = audio2D->AddComponent<AudioSource>();
src2D->SetProperty(AudioSource::Property::IS_3D, false);
src2D->SetProperty(AudioSource::Property::LOOP, true);
src2D->SetAudioClip(clip);
src2D->SetVolume(0.5f);
audio2D->AddComponent<AudioPlay>(KeyCode::NUM2, src2D);
```

