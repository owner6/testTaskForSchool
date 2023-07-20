const findFirstUniqueLetters = (text) => {
  const words = text.split(/\s+/)
  const uniqueLetters = [];

  for (const word of words) {
    const letterCounts = {};

    for (const letter of word) {
      letterCounts[letter] = (letterCounts[letter] || 0) + 1;
    }

    for (const letter of word) {
      if (letterCounts[letter] === 1) {
        uniqueLetters.push(letter);
        break;
      }
    }
  }

  return uniqueLetters.join('');
}

let myForm = document.querySelector('form');
let myInput = document.querySelector('#myInput');
let resultContainer = document.querySelector('#resultContainer');

myForm.addEventListener('submit', function(event) {
  event.preventDefault();

  let text = myInput.value;

  console.log(text);

  const result = findFirstUniqueLetters(text.replace(/[^a-zA-Z\s]/g, ''));

  resultContainer.textContent = result;
});