// Redirect to social media handle
function redirectToSocial() {
  window.location.href = 'https://www.instagram.com/yourhandle'; // Replace with your social media link
}

// Start audio on user interaction (to bypass autoplay restrictions)
document.addEventListener('click', () => {
  const audio = document.getElementById('background-audio');
  if (audio.paused) {
    audio.play().catch(error => console.error('Audio play failed:', error));
  }
}, { once: true }); // Only trigger once
