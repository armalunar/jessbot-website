// Create a simple cat meow sound using Web Audio API
export const playMeowSound = () => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create a simple meow-like sound using oscillators
    const oscillator1 = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    // Connect the audio nodes
    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Configure the first oscillator (main meow frequency)
    oscillator1.type = 'sine';
    oscillator1.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator1.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    oscillator1.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.2);
    
    // Configure the second oscillator (harmonic)
    oscillator2.type = 'triangle';
    oscillator2.frequency.setValueAtTime(1200, audioContext.currentTime);
    oscillator2.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1);
    oscillator2.frequency.exponentialRampToValueAtTime(900, audioContext.currentTime + 0.2);
    
    // Configure the gain (volume envelope)
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.05, audioContext.currentTime + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
    
    // Start and stop the oscillators
    oscillator1.start(audioContext.currentTime);
    oscillator2.start(audioContext.currentTime);
    oscillator1.stop(audioContext.currentTime + 0.3);
    oscillator2.stop(audioContext.currentTime + 0.3);
    
  } catch (error) {
    // Fallback: do nothing if Web Audio API is not supported
    console.log('Audio not available');
  }
};