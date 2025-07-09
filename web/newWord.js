let words = [];

// load from CSV
function loadWords(callback) {
  fetch(
    "https://raw.githubusercontent.com/simonefagini/flashcards/refs/heads/main/dictionaries/custom_vocabulary.csv"
  )
    .then((response) => response.text())
    .then((data) => {
      const lines = data.split("\n");
      for (let i = 1; i < lines.length; i++) { // 1 to get rid of 
        const row = lines[i].split(",");
        if (row.length === 5) {
          words.push([row[1], row[2], row[3]]);
        }
      }
      if (callback) callback();
    });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function initializeWordDisplay() {

  // prevent "spoilers"
  document.documentElement.style.setProperty("--opacity", 1);
  
  // If no words in list, load csv
  if (words.length === 0) {
    loadWords(initializeWordDisplay);
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

// Add click event listener to all elements with the class 'card'
window.onload = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", initializeWordDisplay);
  });
};
