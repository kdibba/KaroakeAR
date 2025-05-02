# KaroakeARLens - Multiplayer Karaoke AR Game

Welcome to the KaroakeARLens project! This is a multiplayer augmented reality karaoke game built with Snapchat's Lens Studio. The game features synchronized lyrics, interactive AR effects, and simple controls for a fun, collaborative singing experience.

---

## Project Concept

- **Turn-based AR karaoke:** Players take turns singing, with lyrics and song info displayed in real time.
- **Simple, clean UI:** All controls (play, pause, next) and lyrics are managed through a unified UI layer.
- **Visual AR effects:** Disco ball, spotlight, and other effects respond to gameplay.
- **Designed for maintainability:** The codebase is modular, with each major feature in its own script.

---

## Code Structure

```
KaroakeARLens/
├── Scripts/
│   ├── GameManager.js         # Main game controller (handles game state, song transitions)
│   ├── AudioController.js     # Handles audio playback and song library
│   ├── SyncController.js      # (For multiplayer sync, if enabled)
│   ├── UIController.js        # Manages UI updates, lyrics, and button events
│   ├── GameManagerTest.js     # Test script for GameManager
│   ├── AudioControllerTest.js # Test script for AudioController
│   └── UIControllerTest.js    # Test script for UIController
└── LENSStudioTest.esproj       # Lens Studio project file
```

---

## Main Scripts Overview

- **GameManager.js:** Controls game flow, song transitions, and coordinates between components.
- **AudioController.js:** Manages audio playback, song switching, and timing for lyrics.
- **UIController.js:** Updates lyrics, song info, and handles button events (e.g., next song, toggle effects).
- **SyncController.js:** For multiplayer synchronization.
- **Test Scripts:** Each main component has a test script for isolated testing in Lens Studio.

---

## Getting Started: Setup & Testing

1. **Install Lens Studio** ([Download here](https://lensstudio.snapchat.com/))
2. **Open the Project**
   - Open `LENSStudioTest.esproj` in Lens Studio.
3. **Check the Scene Hierarchy**
   - Ensure you have a `MainCamera` and a `UILAYER` (with a Canvas component).
   - All UI elements (lyrics, song info, buttons) should be children of `UILAYER`.
4. **Import Scripts**
   - All scripts should be in the `Scripts` folder in the Asset Browser.
5. **Attach Scripts**
   - Attach `UIController.js` and the relevant test script (e.g., `UIControllerTest.js`) to `UILAYER`.
   - Link UI elements to script inputs in the Inspector (drag and drop from the Scene panel).
6. **Preview and Test**
   - Use the Preview Lens button to test UI functionality and button interactions.
   - Use the Logger for debugging.

---

## Clean Code & Collaboration Guidelines

- **Naming:** Use clear, descriptive names for all scene objects and script variables.
- **Organization:** Keep all UI elements under `UILAYER` for easy management.
- **Documentation:** Comment new functions and scripts. Update this README with major changes.
- **Testing:** Use the provided test scripts to verify each component before integrating.
- **Version Control:** Commit changes with clear messages. Use feature branches for new features.

---

## Next Steps & Suggestions

- **Integrate and test the full karaoke flow:** Ensure song transitions, lyric updates, and button controls work together.
- **Polish the UI:** Adjust positions, add icons, and improve visual feedback.
- **Expand multiplayer features:** Further develop `SyncController.js` if real-time multiplayer is desired.
- **Add error handling:** Handle edge cases (e.g., no more songs, missing UI elements).
- **Enhance effects:** Add more AR effects or improve existing ones for a richer experience.

---

## For New Developers

- Start by reading through the main scripts in the `Scripts` folder.
- Open the test scenes and experiment with the test scripts to understand how each component works.
- Refer to comments in each script for guidance on usage and expected inputs.
- If you add new features, create a test script and update this README.

---

**Questions or issues?**
- Check the Logger in Lens Studio for errors.
- Review script input assignments in the Inspector.
- Reach out to the previous developer or check commit history for context.

## Features

- **Multiplayer Synchronization**: Real-time sync between multiple players
- **Dynamic Lyrics Display**: Retro-style lyrics board that updates in real-time
- **Interactive Spotlight**: Spotlight effect that follows the current singer
- **Disco Ball**: Dynamic disco ball that brightens based on group energy
- **Music Controls**: Play, pause, and next track controls for all players
- **Visual Effects**: Dynamic AR effects that respond to singing
- **Song Library**: Easy access to popular karaoke tracks
- **Turn-Based Singing**: Smooth transition between singers

## Project Structure

```
KaroakeARLens/
├── Scripts/
│   ├── GameManager.js      # Main game controller
│   ├── AudioController.js  # Audio playback and timing
│   ├── SyncController.js   # Multiplayer synchronization
│   └── UIController.js     # User interface management
└── LENSStudioTest.esproj    # Lens Studio project configuration
```

## Components

### GameManager.js
- Manages overall game state
- Coordinates between different components
- Handles game flow and player turns

### AudioController.js
- Controls music playback
- Manages lyrics timing
- Handles audio synchronization
- Provides song library access

### SyncController.js
- Manages multiplayer synchronization
- Handles player states and turns
- Coordinates between host and clients

### UIController.js
- Manages the game interface
- Displays lyrics and song information
- Controls visual effects and transitions

## Setup Instructions

1. **Prerequisites**
   - Install [Lens Studio](https://lensstudio.snapchat.com/)
   - Create a Snapchat Developer account

2. **Project Setup**
   - Clone this repository
   - Open the project in Lens Studio
   - Import necessary assets (music files, textures, etc.)

3. **Configuration**
   - Set up audio components
   - Configure multiplayer settings
   - Customize UI elements

## Usage

1. **Starting the Game**
   - Launch the lens in Snapchat
   - Connect with other players
   - Select a song to begin

2. **Gameplay**
   - Follow the lyrics as they appear
   - Take turns singing
   - Watch the disco ball and effects respond to the performance
   - Enjoy the synchronized visual effects

3. **Controls**
   - Play/Pause: Control music playback
   - Next: Skip to next song
   - Effects: Toggle different visual effects

## Development

### Adding New Features
1. Create new script files in the `Scripts/` directory
2. Update the main `GameManager.js` to integrate new features
3. Test in Lens Studio before publishing

### Customizing
- Modify UI elements in `UIController.js`
- Adjust sync settings in `SyncController.js`
- Update audio handling in `AudioController.js`
- Add new visual effects

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Built with [Lens Studio](https://lensstudio.snapchat.com/)
- Inspired by the Spectacles-Sample repository
- Special thanks to the Snapchat AR community 
