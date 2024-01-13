/*
Project : this app will play music according to your mood 
Author : Md. Abib Ahmed Dipto 
contact : abibdipto@gmail.com
copyright : sultan@2024.com
*/

const refresh = document.querySelector("#refresh");
const enter = document.querySelector("#enter");

const moods = {
  happy: "happy",
  sad: "sad",
  angry: "angry",
  love: "love",
  attitude: "attitude",
  frustated: "frustated",
  exhausted: "exhausted",
  boring: "boring",
  lonely: "lonley",
};
const quotesByMood = {
  happy: [
    {
      text: "The sun always shines above the clouds.",
      author: "Paul F. Davis",
    },
    { text: "Happiness is not by chance, but by choice.", author: "Jim Rohn" },
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      text: "Every day may not be good, but there's something good in every day.",
      author: null,
    },
    {
      text: "Happiness is a direction, not a place.",
      author: "Sydney J. Harris",
    },
    {
      text: "Do more things that make you forget to check your phone.",
      author: null,
    },
    {
      text: "Smile, it is the key that fits the lock of everybody's heart.",
      author: "Anthony J. D'Angelo",
    },
    { text: "The only joy in the world is to begin.", author: "Cesare Pavese" },
    {
      text: "Happiness is an inside job. Don't assign anyone else that much power over your life.",
      author: "Mandy Hale",
    },
    {
      text: "Life is short, and it's up to you to make it sweet.",
      author: "Sarah Louise Delany",
    },
  ],
  sad: [
    {
      text: "The saddest thing about love is that not only the love cannot last forever, but even the heartbreak is soon forgotten.",
      author: "William Faulkner",
    },
    {
      text: "Behind every sweet smile, there is a bitter sadness that no one can ever see and feel.",
      author: "Tupac Shakur",
    },
    {
      text: "It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.",
      author: "Chuck Palahniuk",
    },
    {
      text: "The walls we build around us to keep out the sadness also keep out the joy.",
      author: "Jim Rohn",
    },
    {
      text: "It's sad when someone you know becomes someone you knew.",
      author: "Henry Rollins",
    },
    {
      text: "The greatest pain that comes from love is loving someone you can never have.",
      author: "Unknown",
    },
    {
      text: "Sometimes, you have to smile to hide your fears and laugh to hide your tears.",
      author: "Unknown",
    },
    {
      text: "I always like walking in the rain, so no one can see me crying.",
      author: "Charlie Chaplin",
    },
    {
      text: "The word 'happy' would lose its meaning if it were not balanced by sadness.",
      author: "Carl Jung",
    },
    {
      text: "The saddest thing is to be a minute to someone when you've made them your eternity.",
      author: "Sanober Khan",
    },
  ],
  love: [
    {
      text: "Love is not just looking at each other, it's looking in the same direction.",
      author: "Antoine de Saint-Exupéry",
    },
    {
      text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      author: "Dr. Seuss",
    },
    {
      text: "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
      author: "Helen Keller",
    },
    {
      text: "Love is composed of a single soul inhabiting two bodies.",
      author: "Aristotle",
    },
    {
      text: "To love and be loved is to feel the sun from both sides.",
      author: "David Viscott",
    },
  ],
  angry: [
    {
      text: "Speak when you are angry, and you will make the best speech you will ever regret.",
      author: "Ambrose Bierce",
    },
    {
      text: "Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.",
      author: "Mark Twain",
    },
    {
      text: "For every minute you are angry, you lose sixty seconds of happiness.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "Anger is never without a reason, but seldom with a good one.",
      author: "Benjamin Franklin",
    },
    {
      text: "When anger rises, think of the consequences.",
      author: "Confucius",
    },
  ],
  attitude: [
    {
      text: "Your attitude, not your aptitude, will determine your altitude.",
      author: "Zig Ziglar",
    },
    {
      text: "It is your attitude, more than your aptitude, that will determine your altitude.",
      author: "William James",
    },
    {
      text: "The only disability in life is a bad attitude.",
      author: "Scott Hamilton",
    },
    {
      text: "Excellence is not a skill, it's an attitude.",
      author: "Ralph Marston",
    },
    {
      text: "Your attitude is like a price tag, it shows how valuable you are.",
      author: null,
    },
  ],
  frustated: [
    {
      text: "It's not the load that breaks you down, it's the way you carry it.",
      author: "Lou Holtz",
    },
    {
      text: "I am frustrated by your lack of progress. Progress faster or I will have to find another way to motivate you.",
      author: "Anonymous",
    },
    {
      text: "Don't let the silly little dramas of each day get you down. For you are here to do great things.",
      author: "Mark Twain",
    },
    {
      text: "Life is tough, my darling, but so are you.",
      author: "Stephanie Bennett-Henry",
    },
    {
      text: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
      author: "Vince Lombardi",
    },
  ],
  exhausted: [
    {
      text: "Rest when you're weary. Refresh and renew yourself, your body, your mind, your spirit. Then get back to work.",
      author: "Ralph Marston",
    },
    {
      text: "Sometimes the most productive thing you can do is rest.",
      author: "Mark Black",
    },
    {
      text: "Your mental health is more important than your career. Take care of yourself.",
      author: "Anonymous",
    },
    {
      text: "It's okay not to be okay as long as you are not giving up.",
      author: null,
    },
    {
      text: "Never get so busy making a living that you forget to make a life.",
      author: "Dolly Parton",
    },
  ],
  boring: [
    {
      text: "The only boring people are boring people.",
      author: "Barbara Hulanicki",
    },
    {
      text: "If you're bored with life – you don't get up every morning with a burning desire to do things – you don't have enough goals.",
      author: "Lou Holtz",
    },
    {
      text: "Boredom is the feeling that everything is a waste of time; serenity, that nothing is.",
      author: "Thomas Szasz",
    },
    {
      text: "Boredom is the root of all evil – the despairing refusal to be oneself.",
      author: "Søren Kierkegaard",
    },
    {
      text: "If you are bored with life, if you don’t get up every morning with a burning desire to do things – you don’t have enough goals.",
      author: "Lou Holtz",
    },
  ],
  lonely: [
    {
      text: "The eternal quest of the human being is to shatter his loneliness.",
      author: "Norman Cousins",
    },
    {
      text: "The greatest thing in the world is to know how to belong to oneself.",
      author: "Michel de Montaigne",
    },
    {
      text: "Loneliness and the feeling of being unwanted is the most terrible poverty.",
      author: "Mother Teresa",
    },
    {
      text: "Loneliness is the poverty of self; solitude is the richness of self.",
      author: "May Sarton",
    },
    {
      text: "Loneliness is and always has been the central and inevitable experience of every man.",
      author: "Thomas Wolfe",
    },
  ],
};

function getRandomQuoteByMood(mood) {
  const quotes = quotesByMood[mood];
  if (!quotes || quotes.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

let randomQuotes = function createFunction() {
  const input = document.querySelector("#input");
  let newInputValue = input.value.toLowerCase();
  let h2 = document.createElement("h2");
  let output = document.querySelector("#output");
  let p = document.createElement("p");

  if (
    newInputValue != "" &&
    newInputValue.length >= 3 &&
    Object.values(moods).includes(newInputValue)
  ) {
    if (newInputValue == moods.happy) {
      const randomHappyQuote = getRandomQuoteByMood("happy");
      h2.innerHTML = `" ${randomHappyQuote.text} "`;
      p.innerHTML = `Quote by - ${randomHappyQuote.author}`;
      output.appendChild(h2);
      output.appendChild(p);
    } else if (newInputValue == moods.sad) {
      const randomSadQuote = getRandomQuoteByMood("sad");
      h2.innerHTML = `" ${randomSadQuote.text} "`;
      p.innerHTML = `Quote by - ${randomSadQuote.author}`;
      output.appendChild(h2);
      output.appendChild(p);
    } else if (newInputValue == moods.frustated) {
      const randomFrustratedQuote = getRandomQuoteByMood("frustated");
      h2.innerHTML = `" ${randomFrustratedQuote.text} "`;
      p.innerHTML = `Quote by - ${randomFrustratedQuote.author}`;
      output.appendChild(h2);
      output.appendChild(p);
    } else if (newInputValue == moods.exhausted) {
      const randomExhaustedQuote = getRandomQuoteByMood("exhausted");
      h2.innerHTML = `" ${randomExhaustedQuote.text} "`;
      p.innerHTML = `Quote by - ${randomExhaustedQuote.author}`;
      output.appendChild(h2);
      output.appendChild(p);
    } else if (newInputValue == moods.love) {
      const randomLoveQuote = getRandomQuoteByMood("love");
      h2.innerHTML = `" ${randomLoveQuote.text} "`;
      p.innerHTML = `Quote by - ${randomLoveQuote.author}`;
      output.appendChild(h2);
      output.appendChild(p);
    } else if (newInputValue == moods.lonely) {
      const randomLonelyQuote = getRandomQuoteByMood("lonely");
      h2.innerHTML = `" ${randomLonelyQuote.text} "`;
      p.innerHTML = `Quote by - ${randomLonelyQuote.author}`;
      output.appendChild(h2);
      output.appendChild(p);
    } else if (newInputValue == moods.boring) {
      const randomBoringQuote = getRandomQuoteByMood("boring");
      h2.innerHTML = `" ${randomBoringQuote.text} "`;
      p.innerHTML = `Quote by - ${randomBoringQuote.author}`;
      output.appendChild(h2);
      output.appendChild(p);
    } else if (newInputValue == moods.attitude) {
      const randomAttitudeQuote = getRandomQuoteByMood("attitude");
      h2.innerHTML = `" ${randomAttitudeQuote.text} "`;
      p.innerHTML = `Quote by - ${randomAttitudeQuote.author}`;
      output.appendChild(h2);
      output.appendChild(p);
    } else if (newInputValue == moods.angry) {
      const randomAngryQuote = getRandomQuoteByMood("angry");
      h2.innerHTML = `" ${randomAngryQuote.text} "`;
      p.innerHTML = `Quote by - ${randomAngryQuote.author}`;
      output.appendChild(h2);
      output.appendChild(p);
    }
  } else {
    alert("please enter something valid ");
  }
};
enter.addEventListener("click", () => {
  randomQuotes();
});

refresh.addEventListener("click", () => {
  location.reload();
});
