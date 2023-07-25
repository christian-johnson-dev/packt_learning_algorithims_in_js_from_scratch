//? Create a function harmlessRansomNote with two parameters:
//?   See if the words in noteText are present in magazineText

const harmlessRansomNote = (noteText, magazineText) => {
  const noteArray = noteText.split(" ");
  const magazineArray = magazineText.split(" ");
  let magazineObj = {};

  magazineArray.forEach((word) => {
    if (!magazineObj[word]) {
      magazineObj[word] = 0;
    }
    magazineObj[word]++;
  });

  let noteIsPossible = true;
  noteArray.forEach((word) => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    } else noteIsPossible = false;
  });
  return noteIsPossible;
};

harmlessRansomNote("Show me the money", "Show me the money darling");
