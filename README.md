# flashcards
A quick web app I built to boost my English-German vocabulary.

## Customization

Fork the project to train the language you want to learn, paired with translations from your preferred main language.


```bash
git clone https://github.com/simonefagini/flashcards.git

```

Add your own database in the [dictionaries/german-essential-words.csv](dictionaries/) folder and update the link in the [web/newWord.js](web/newWord.js) file:

```javascript
fetch(
    "https://raw.githubusercontent.com/simonefagini/flashcards/refs/heads/main/dictionaries/german-essential-words.csv"
  )
```


## Upcoming Features

- Flashcards focused on articles (der/die/das)
- Scoring system with challenges
- "Next words" feature based on past mistakes
- Option to adjust the delay of solution animations
- Plurals training
- Bonus feature with antonyms for words (e.g., cheap/expensive, small/big, early/late)




## Compatibility

- Tested on Chrome, Firefox, and Safari for macOS.
- Tested on Safari and Chrome on iOS (iPhone SE and iPhone 14).
- Tested on Chrome for Windows 11.
