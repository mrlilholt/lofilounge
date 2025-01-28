const audioPlayer = document.getElementById('lofi-player');
const playlist = document.getElementById('playlist');
const tracks = playlist.getElementsByTagName('li');

// Play the first track by default
audioPlayer.src = tracks[0].dataset.src;
audioPlayer.play();

// Handle track clicks
for (let track of tracks) {
  track.addEventListener('click', () => {
    audioPlayer.src = track.dataset.src;
    audioPlayer.play();
  });
}

// Auto-play next track when one ends
audioPlayer.addEventListener('ended', () => {
  const currentIndex = [...tracks].findIndex(track => track.dataset.src === audioPlayer.src);
  const nextIndex = (currentIndex + 1) % tracks.length;
  audioPlayer.src = tracks[nextIndex].dataset.src;
  audioPlayer.play();
});
