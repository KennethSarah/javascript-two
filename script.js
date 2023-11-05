
function clearAll() {
  const memeContainer = document.querySelector('.meme-content');
  const jokeContainer = document.querySelector('.joke-content');
  const quoteContainer = document.querySelector('.quote-content');
  const riddleContainer = document.querySelector('.riddle-content');


  memeContainer.innerHTML = '';
  jokeContainer.innerHTML = '';
  quoteContainer.innerHTML = '';
  riddleContainer.innerHTML = '';
}


function showMeme() {
  const randomMemeUrl = getRandomData("memes");
  const container = document.querySelector('.meme-content');
  const newImg = document.createElement('img');
  newImg.setAttribute('src', randomMemeUrl);

  const isImg = container.querySelector('img');

  clearAll();
  if (isImg) {
    container.innerHTML = '';
  }

  
  container.appendChild(newImg);
}


function showJoke() {
  const randomJokeText = getRandomData("jokes");
  const containerTwo = document.querySelector('.joke-content');
  const newJoke = document.createElement('p');
  newJoke.textContent = randomJokeText;

  const isJoke = containerTwo.querySelector('p');

  clearAll();
  if (isJoke) {
    containerTwo.innerHTML = '';
  }

  containerTwo.appendChild(newJoke);
}


function showQuote() {
  
  const randomQuote = getRandomData("quotes");
  const quote = document.createElement('p');
  const author = document.createElement('p');

  quote.textContent = randomQuote.quote;
  author.textContent = "-" + randomQuote.author;
  clearAll();

  const containerTwo = document.querySelector('.quote-content')
  containerTwo.appendChild(quote);
  const containerThree = document.querySelector('.quote-content')
  containerThree.appendChild(author);
  
}


function showRiddle() {
  
  const randomRiddle = getRandomData("riddles");
  const { question, answer} = randomRiddle;

  
  const questionElem = document.createElement('p');
  questionElem.textContent = question;

  const answerElem = document.createElement('p');
  answerElem.textContent = "The answer is: " +  answer;
  answerElem.setAttribute('id', 'riddle-answer');
  answerElem.hidden = true;

  const container = document.querySelector('.riddle-content');
  clearAll();
  container.appendChild(questionElem);
  container.appendChild(answerElem);
}


function revealAnswers() {
 const riddleContainer = document.querySelector('.riddle-content');

 const riddle = riddleContainer.querySelector('p');

 const answer = document.querySelector('#riddle-answer')

 if (riddle && answer.hidden) {
  answer.hidden = false;
 } else if (riddle) {
  alert ('The answer is already revealed')
 } else {
  alert('There is no riddle to reveal answer to')
 }
};


function getRandomData(type) {
  return data[type][rn(data[type].length)];
}


const memes = [
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33beb7754bb65211e29b4_cndak3oa0RRN-4-9oB-ygKRmif28P1LOTEmZgTYg44e5hTvE_UpstqF7sNX49hok9HVEXDcbLzPYyr5oEMPujY9DSXNIKHpW_nRSy-SYa0RSsoxu1gq8_vl0dUNk9X40Z7JStApb.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33beb2f9c7146bbb87c68_EU7HwDtmYVtIBtqoPsZv48rJfi7376RW3JINJF_5I9eaeRtW9TsopRsnI-H2M9babZ5WVD3jEQ0hJF-ta66dB-wuB4GovO6srlt8RIt7DsHZvB59fr9PWAik4carf1VP1W4D46Uz.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33bedf678b936ae8bcd64_KgjqJ36CAlpir0e67bsVBGUSjyqwAilFpL7SXcic8QH0UmnXMtQTGrPl-Uhb-Xh4hqNDdWjpiUvldMDEK5WcrvQq65bEfHu1pDah7tCDx5ty09ntCJgFl3jwxFbGNlP-LsZhGAM5.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33bf145999a2dea3f5534_tn-ZHrDula1DCJ0Xf23kkcTcRfdYAfiYUS6bPmkt6L6F0PXh0pxLIRKKJEGHgkL4QjpDrEQWx1YqYb5UOtkakedB3M9L5URk1Zz5zfTfS5OnUzp7d_njiaKQkl2tFuCh4SfwaaPn.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33bf00f8de3388923e46e_pWDSAyLl1anr-yCxObb-b-MUilkQM0K2eER4_gwbN48qaP3NB4ZPl_P5C7CwKEQvC1fsQvHTsWd7yCMLixJ9v8rweKd9pBYGg6AVx67kohYbSpQiVIUz3svyG1s58XeqM7cKnq3x.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33beaf630caf8b8625819_ojVfiY9N9W7SNblUwsMuRdEHfZaK7gTn4I8oA596jsQz0gHhJ0msEceYVq2C5afZ4rDCvhqx1EEedzTz664Vi3aDScXL2jnzV_uuWriJbW-wldzhpJDT-TNOPvgusibLRCqaY5pJ.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33bf4fa7b530b77f3bbe0_6GnQQXGutBkLu762PaVF-Tyy8GptTL8C3B0g-P7s0umrlPwMLAZ0JFRk7KE4BVXXSDp6gAnnMF93ArAuk2TUtLHrXDgOeT-e1wCbtDwKl6vrypEm1pY74tDuC3Oa7WxUlwh3_hU1.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33bf3a2121cc74f72a286_0AEnnZYBAYzmSXzyGaopjvEGKKO1yFqf_zMXqFTAT6vUDfXVPRifI3J8oBjZUl51PnRQqf2tqpjiRt33IKgg4sTiJi2YShGTN5iNUIoYbNj2HXobiQg4-k7yBiNT54EKOGYyZOR2.png",
  "https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33beaa2121c403e729f3e_cFdC0T4-nFznndnWBG6Dx4sbRY_jGLBvCSq6BM_uXkJ_n3nL4pKSC_RPSlnAbDYDw0U_BNjM_mftxXGf0dwoRTp1vB5HWk1TJR6U-69iJLAugpxpnzRgXpxfI4Tr1talrjrJg0AP.png",

];


const jokes = [
  "You are the ; to my statements",
  "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”",
  "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
  "All programmers are playwrights, and all computers are lousy actors.",
  "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.",
  "The generation of random numbers is too important to be left to chance.",
  "Debugging: Removing the needles from the haystack.",
  "“Debugging” is like being the detective in a crime drama where you are also the murderer.",
  "There are two ways to write error-free programs; only the third one works.",
  "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
];


const quotes = [
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    quote:
      "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    author: "Rick Cook",
  },
  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
    author: "John Woods",
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote: "Truth can only be found in one place: the code.",
    author: "Robert C. Martin",
  },
  {
    quote:
      "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
    author: "Larry Niven",
  },
  {
    quote:
      "You've baked a really lovely cake, but then you've used dog shit for frosting.",
    author: "Steve Jobs",
  },
  {
    quote:
      "A language that doesn't affect the way you think about programming is not worth knowing.",
    author: "Alan J. Perlis",
  },
  {
    quote:
      "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay",
  },
  {
    quote:
      "When I wrote this code, only God and I understood what I did. Now only God knows.",
    author: "Anonymous",
  },
  {
    quote:
      "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
    author: "Brian Kernighan",
  },
  {
    quote:
      "No matter which field of work you want to go in, it is of great importance to learn at least one programming language.",
    author: "Ram Ray",
  },
];


const riddles = [
  {
    question:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An echo",
  },
  {
    question:
      "You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ",
    answer: "A Candle",
  },
  {
    question:
      "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ",
    answer: "A Map",
  },
  {
    question:
      "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?",
    answer: 'The letter "R"',
  },
  {
    question:
      "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?",
    answer: "All the people were married",
  },
  {
    question:
      "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?",
    answer: "Heroine",
  },
];


function rn(len) {
  return Math.floor(Math.random() * len);
}

const data = {
    memes,
  jokes,
  quotes,
  riddles,
};