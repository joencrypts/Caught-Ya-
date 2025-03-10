// Redirect to social media handle
function redirectToSocial() {
  window.location.href = 'https://www.instagram.com/yourhandle'; // Replace with your social media link
}

// Start audio on user interaction (to bypass autoplay restrictions)
document.addEventListener('click', () => {
  const audio = document.getElementById('background-audio');
  
  // Play audio only if it's paused
  if (audio.paused) {
    audio
      .play()
      .then(() => console.log('Audio started successfully'))
      .catch(error => console.error('Audio play failed:', error));
  }
  
  // Optional: Automatically restart audio when it ends (should work with loop attribute)
  audio.addEventListener('ended', () => {
    audio.play();
  });
}, { once: true }); // Ensures it triggers only once
