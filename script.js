var currentAudioPlayer;

function playAudio(index) {
    var audioPlayer = document.getElementById("audioPlayer" + (index + 1));

    if (currentAudioPlayer && !currentAudioPlayer.paused) {
        currentAudioPlayer.pause();
        currentAudioPlayer.currentTime = 0;
    }

    audioPlayer.play();
    currentAudioPlayer = audioPlayer;
}
