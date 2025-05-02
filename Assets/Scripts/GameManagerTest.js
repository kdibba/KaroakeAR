// @input Component.ScriptComponent audioController
// @input Component.ScriptComponent uiController
// @input Component.Button startButton
// @input Component.Button pauseButton
// @input Component.Button nextSingerButton
// @input Component.Text statusText

var gameManager = script.getSceneObject().getComponent("GameManager");

function initialize() {
    // Set up button events
    if (script.startButton) {
        script.startButton.addComponent("ScriptComponent").createEvent("TapEvent").bind(onStartTapped);
    }
    
    if (script.pauseButton) {
        script.pauseButton.addComponent("ScriptComponent").createEvent("TapEvent").bind(onPauseTapped);
    }
    
    if (script.nextSingerButton) {
        script.nextSingerButton.addComponent("ScriptComponent").createEvent("TapEvent").bind(onNextSingerTapped);
    }
    
    // Update status text
    updateStatusText();
}

function onStartTapped() {
    if (gameManager) {
        gameManager.startGame({
            title: "Test Song",
            duration: 180
        });
        updateStatusText();
    }
}

function onPauseTapped() {
    if (gameManager) {
        gameManager.pauseGame();
        updateStatusText();
    }
}

function onNextSingerTapped() {
    if (gameManager) {
        gameManager.switchSinger();
        updateStatusText();
    }
}

function updateStatusText() {
    if (script.statusText && gameManager) {
        var status = "Game Status:\n";
        status += "Playing: " + (gameManager.isPlaying ? "Yes" : "No") + "\n";
        status += "Current Song: " + (gameManager.currentSong ? gameManager.currentSong.title : "None") + "\n";
        status += "Current Singer: " + (gameManager.currentSinger || "None") + "\n";
        script.statusText.text = status;
    }
}

// Initialize when script is loaded
initialize(); 