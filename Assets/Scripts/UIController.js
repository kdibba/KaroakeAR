// @input Component.Text lyricsText
// @input Component.Text songInfoText
// @input Component.ScriptComponent gameManager
// @input Component.ScriptComponent syncController
// @input Component.ScriptComponent effectsController
// @input Component.Button nextButton

var uiState = {
    currentLyric: "",
    currentSong: null,
    isVisible: true,
    effects: {
        discoBall: true,
        spotlight: true,
        visualEffects: true
    }
};

function initialize() {
    // Set up UI event listeners
    script.createEvent("UpdateEvent").bind(onUpdate);
    
    // Initialize UI elements
    if (script.lyricsText) {
        script.lyricsText.text = "";
    }
    
    if (script.songInfoText) {
        script.songInfoText.text = "";
    }

    // Set up next button
    if (script.nextButton) {
        script.nextButton.addComponent("ScriptComponent").createEvent("TapEvent").bind(onNextButtonTapped);
    }
}

function onNextButtonTapped() {
    if (script.gameManager) {
        script.gameManager.nextSong();
    }
}

function onUpdate() {
    updateLyricsDisplay();
    updateSongInfoDisplay();
}

function updateLyricsDisplay() {
    if (script.lyricsText && uiState.currentLyric) {
        script.lyricsText.text = uiState.currentLyric;
    }
}

function updateSongInfoDisplay() {
    if (script.songInfoText && uiState.currentSong) {
        var songInfo = "Now Playing: " + uiState.currentSong.title + "\n";
        songInfo += "Current Singer: " + (uiState.currentSinger || "None");
        script.songInfoText.text = songInfo;
    }
}

function setCurrentLyric(lyric) {
    uiState.currentLyric = lyric;
}

function setCurrentSong(song) {
    uiState.currentSong = song;
}

function setCurrentSinger(singer) {
    uiState.currentSinger = singer;
}

function showUI() {
    uiState.isVisible = true;
    // Implement UI visibility logic
}

function hideUI() {
    uiState.isVisible = false;
    // Implement UI visibility logic
}

function toggleEffect(effectName) {
    if (uiState.effects.hasOwnProperty(effectName)) {
        uiState.effects[effectName] = !uiState.effects[effectName];
        if (script.effectsController) {
            script.effectsController.toggleEffect(effectName);
        }
    }
}

// Initialize when script is loaded
initialize(); 