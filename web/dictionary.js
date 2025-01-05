let words = [];

// load from the CSV
function loadWords(callback) {
  
  fetch(
    "https://raw.githubusercontent.com/simonefagini/flashcards/refs/heads/main/dictionaries/german-essential-words.csv"
  )
    .then((response) => response.text())
    .then((data) => {
      const lines = data.split("\n"); // split by lines
      for (let i = 1; i < lines.length; i++) { // 1 to skip csv header
       
        const row = lines[i].split(",");
        if (row.length === 5) {
          words.push([row[1], row[2], row[3]]);
        }
      }

      if (callback) callback(); // Call the callback function when loading is done
    })
    .catch((err) => console.error("Error loading words:", err));
}
}
