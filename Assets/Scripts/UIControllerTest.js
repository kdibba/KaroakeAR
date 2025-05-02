// @input Component.Text lyricsText
// @input Component.Text songInfoText
// @input Component.Button nextButton
// @input Component.Button toggleEffectsButton
// @input Component.Text statusText

var uiController = script.getSceneObject().getComponent("UIController");

// Test lyrics data
var testLyrics = [
    "This is a test lyric line 1",
    "This is a test lyric line 2",
    "This is a test lyric line 3"
];

var currentLyricIndex = 0;

function initialize() {
    // Set up button events
    if (script.nextButton) {
        script.nextButton.addComponent("ScriptComponent").createEvent("TapEvent").bind(onNextTapped);
    }
    
    if (script.toggleEffectsButton) {
        script.toggleEffectsButton.addComponent("ScriptComponent").createEvent("TapEvent").bind(onToggleEffectsTapped);
    }
    
    // Set initial lyrics
    updateLyrics();
    updateStatusText();
}

function onNextTapped() {
    // Cycle through test lyrics
    currentLyricIndex = (currentLyricIndex + 1) % testLyrics.length;
    updateLyrics();
    updateStatusText();
}

function onToggleEffectsTapped() {
    if (uiController) {
        uiController.toggleEffect("discoBall");
        updateStatusText();
    }
}

function updateLyrics() {
    if (script.lyricsText) {
        script.lyricsText.text = testLyrics[currentLyricIndex];
    }
    
    if (script.songInfoText) {
        script.songInfoText.text = "Test Song " + (currentLyricIndex + 1);
    }
}

function updateStatusText() {
    if (script.statusText && uiController) {
        var status = "UI Status:\n";
        status += "Current Lyric: " + (currentLyricIndex + 1) + "\n";
        status += "Effects Enabled: " + (uiController.effects.discoBall ? "Yes" : "No") + "\n";
        script.statusText.text = status;
    }
}

// Initialize when script is loaded
initialize(); 