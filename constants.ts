export const DEFAULT_FOCUS_MINUTES = 45;
export const DEFAULT_BREAK_MINUTES = 5;

export const LEARNING_TIPS: string[] = [
  "Use the Feynman Technique: try to explain a concept in simple terms, as if teaching it to someone else.",
  "Space out your learning sessions. Spaced repetition is more effective than cramming.",
  "Get enough sleep. Your brain consolidates memories while you rest.",
  "Test yourself frequently. Active recall strengthens memory pathways.",
  "Switch between different subjects to keep your mind engaged and prevent burnout.",
  "Stay hydrated. Dehydration can impair concentration and cognitive function.",
  "Minimize distractions. Put your phone away and use a dedicated study space.",
  "Take regular breaks to rest your mind. The Pomodoro Technique is great for this.",
  "Connect new information to what you already know to build stronger mental models.",
  "Use mnemonic devices like acronyms or rhymes to remember lists and facts.",
  "Teach what you learn. It's one of the most effective ways to solidify your own understanding.",
  "Create a dedicated study playlist with instrumental music to help you focus without being distracted by lyrics.",
  "Break down large tasks into smaller, manageable chunks to avoid feeling overwhelmed.",
  "Review your notes within 24 hours of making them to improve retention.",
  "Don't be afraid to ask questions. Curiosity is the engine of intellectual growth.",
  "Practice mindfulness or meditation for a few minutes before studying to clear your mind.",
];


export const MOTIVATIONAL_MESSAGES: string[] = [
  "Procrastination is the thief of time. Are you going to let it rob you?",
  "The expert in anything was once a beginner. Keep going.",
  "Don't watch the clock; do what it does. Keep going.",
  "Even the greatest were beginners. Don't be afraid to take that first step.",
  "That 'someday' you keep talking about? It's today.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "Is your future self going to thank you for what you're doing right now?",
  "Discipline is just choosing between what you want now and what you want most.",
  "Stop doubting yourself. Work hard and make it happen.",
  "The only thing standing between you and your goal is that story you keep telling yourself that you can't achieve it."
];

// FIX: Add MOCK_LEADERBOARD_DATA to resolve import error.
export const MOCK_LEADERBOARD_DATA: { id: number; name: string; totalMinutes: number }[] = [
    { id: 101, name: 'Rizky S.', totalMinutes: 2430 },
    { id: 102, name: 'Dewi L.', totalMinutes: 2250 },
    { id: 103, name: 'Budi P.', totalMinutes: 2100 },
    { id: 104, name: 'Siti A.', totalMinutes: 1980 },
    { id: 105, name: 'Agus H.', totalMinutes: 1800 },
    { id: 106, name: 'Ani W.', totalMinutes: 1750 },
    { id: 107, name: 'Eko S.', totalMinutes: 1600 },
];
