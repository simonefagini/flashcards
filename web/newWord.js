// random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function initializeWordDisplay() {

  // prevent "spoilers'
  document.documentElement.style.setProperty("--opacity", 1);
  
  // if no words in list, reload list
  if (words.length === 0) {
    loadWords(initializeWordDisplay); // Load words and retry display
    return;
  }

  const randomIndex = getRandomInt(words.length);
  const lang1Word = words[randomIndex][0]; 
  const art = words[randomIndex][1];     
  const lang2Word = words[randomIndex][2];


  document.documentElement.style.setProperty("--tester", `"${lang1Word}"`);
  document.querySelector(".article").textContent = art;
  document.querySelector(".word").textContent = lang2Word;

  setTimeout(() => {
    document.documentElement.style.setProperty("--opacity", 0);
  }, 0);
}

window.onload = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", initializeWordDisplay); // Display new word on click
  });
};
