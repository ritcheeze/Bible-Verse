const button = document.getElementById("verse-btn");
const verseDisplay = document.getElementById("bible-verse");

let bibleData = {};

fetch("verses.json")
  .then((res) => res.json())
  .then((data) => {
    bibleData = data;
  })
  .catch((err) => {
    verseDisplay.innerText = "Error loading Bible data.";
    console.error(err);
  });

button.addEventListener("click", () => {
  if (Object.keys(bibleData).length === 0) {
    verseDisplay.innerText = "Loading verses...";
    return;
  }

  const books = Object.keys(bibleData);
  const randomBook = books[Math.floor(Math.random() * books.length)];

  const chapters = Object.keys(bibleData[randomBook]);
  const randomChapter = chapters[Math.floor(Math.random() * chapters.length)];

  const verses = Object.keys(bibleData[randomBook][randomChapter]);
  const randomVerse = verses[Math.floor(Math.random() * verses.length)];

  const verseText = bibleData[randomBook][randomChapter][randomVerse];
  const reference = `${randomBook} ${randomChapter}:${randomVerse}`;

  verseDisplay.innerText = `"${verseText}" — ${reference}`;
});
