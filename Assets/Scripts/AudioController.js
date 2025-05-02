// @input Component.AudioComponent audioComponent
// @input Component.ScriptComponent gameManager
// @input Asset.AudioClip[] songLibrary

var audioState = {
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    lyricsTiming: [],
    currentSongIndex: 0
};

function initialize() {
    if (script.audioComponent) {
        script.audioComponent.createEvent("PlaybackFinishedEvent").bind(onPlaybackFinished);
    }
    
    // Load first song if available
    if (script.songLibrary && script.songLibrary.length > 0) {
        setSong(script.songLibrary[0]);
    }
}

function onPlaybackFinished() {
    if (script.gameManager) {
        script.gameManager.onSongFinished();
    }
}

function play() {
    if (script.audioComponent) {
        script.audioComponent.play();
        audioState.isPlaying = true;
    }
}

function pause() {
    if (script.audioComponent) {
        script.audioComponent.pause();
        audioState.isPlaying = false;
    }
}

function stop() {
    if (script.audioComponent) {
        script.audioComponent.stop();
        audioState.isPlaying = false;
        audioState.currentTime = 0;
    }
}

function setSong(songAsset) {
    if (script.audioComponent && songAsset) {
        script.audioComponent.setAudioAsset(songAsset);
        audioState.duration = script.audioComponent.getDuration();
    }
}

function nextSong() {
    if (script.songLibrary && script.songLibrary.length > 0) {
        // Stop current song
        stop();
        
        // Move to next song (with wrap-around)
        audioState.currentSongIndex = (audioState.currentSongIndex + 1) % script.songLibrary.length;
        
        // Set and play new song
        setSong(script.songLibrary[audioState.currentSongIndex]);
        play();
        
        return true;
    }
    return false;
}

function getCurrentTime() {
    if (script.audioComponent) {
        return script.audioComponent.getTime();
    }
    return 0;
}

function setLyricsTiming(timingData) {
    audioState.lyricsTiming = timingData;
}

function getCurrentLyricIndex() {
    var currentTime = getCurrentTime();
    for (var i = 0; i < audioState.lyricsTiming.length; i++) {
        if (currentTime >= audioState.lyricsTiming[i].startTime && 
            currentTime < audioState.lyricsTiming[i].endTime) {
            return i;
        }
    }
    return -1;
}

// Initialize when script is loaded
initialize(); 