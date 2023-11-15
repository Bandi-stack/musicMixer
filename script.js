// List of songs or song URLs
const songs = [
    'm1.mp3',
    'm2.mp3',
    'm3.mp3',
  'm4.mp3',
  'm5.mp3',
  'm6.mp3',
  'm7.mp3',
  'm8.mp3',
    // Add more songs here
  ];
  
  // Get references to HTML elements
  const playButton = document.getElementById('playButton');
  const audioPlayer = document.getElementById('audioPlayer');
  const audioPlayer1 = document.getElementById('audioPlayer1');
  // Function to play a random song
  function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
  const randomIndex1 = Math.floor(Math.random() * songs.length);
  
    const randomSong = songs[randomIndex];
  const randomSong1 = songs[randomIndex1];
  
    audioPlayer.src = randomSong;
  audioPlayer1.src = randomSong1;
  
    audioPlayer.play();
  audioPlayer1.play();
  }
  
  // Add a click event listener to the play button
  playButton.addEventListener('click', playRandomSong);
  
  