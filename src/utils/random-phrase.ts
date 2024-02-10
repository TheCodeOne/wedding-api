const phrases = [
  'Almost there, keep it up! 🚀',
  'A for effort! 😄',
  "You're on the right track! 🛤️",
  'Good effort, better luck next time! 🍀',
  'Nice attempt, high-five! 🙌',
  'Well played, but not quite! 🎮',
  'Almost nailed it! 🔨',
  "You're getting warmer! 🔥",
  'A valiant effort, my friend! ⚔️',
  'Great hustle, try again! 💪',
  'So close, yet so far! 🌟',
  "You're in the ballpark! ⚾",
  'Nice shot, aim a bit higher! 🎯',
  'Good try, keep the momentum! 🚴‍♂️',
  "You're inching closer! 📏",
];

export const getRandomPhrase = () => {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
};
