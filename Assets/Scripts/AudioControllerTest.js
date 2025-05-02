// @input Component.AudioComponent audioComponent
// @input Component.Button playButton
// @input Component.Button pauseButton
// @input Component.Button nextButton
// @input Component.Text statusText

var audioController = script.getSceneObject().getComponent("AudioController");

function initialize() {
    // Set up button events
    if (script.playButton) {
        script.playButton.addComponent("ScriptComponent").createEvent("TapEvent").bind(onPlayTapped);
    }
    
    if (script.pauseButton) {
        script.pauseButton.addComponent("ScriptComponent").createEvent("TapEvent").bind(onPauseTapped);
    }
    
    if (script.nextButton) {
        script.nextButton.addComponent("ScriptComponent").createEvent("TapEvent").bind(onNextTapped);
    }
    
    // Update status text
    updateStatusText();
}

function onPlayTapped() {
    if (audioController) {
        audioController.play();
        updateStatusText();
    }
}

function onPauseTapped() {
    if (audioController) {
        audioController.pause();
        updateStatusText();
    }
}

function onNextTapped() {
    if (audioController) {
        audioController.nextSong();
        updateStatusText();
    }
}

function updateStatusText() {
    if (script.statusText && audioController) {
        var status = "Audio Status:\n";
        status += "Playing: " + (audioController.isPlaying ? "Yes" : "No") + "\n";
        status += "Current Song: " + (audioController.currentSongIndex + 1) + "\n";
        script.statusText.text = status;
    }
}

// Initialize when script is loaded
initialize(); 