// DOM Elements
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');
const userInput = document.getElementById('user-input');

/**
 * Validates user input and triggers phone number check
 */
const getInput = () => {
  if (!userInput.value) {
    alert('Please provide a phone number');
    return;
  }
  checkNumber(userInput.value);
};

/**
 * Checks if the provided number matches US phone number format
 * @param {string} input - Phone number to validate
 */
const checkNumber = (input) => {
  const regex = /^1?\s?(?:\d{3}|\(\d{3}\))[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/g;
  const isValid = regex.test(userInput.value);
  const message = isValid ? 'Valid US number: ' : 'Invalid US number: ';
  resultsDiv.innerHTML += `<span class="results">${message} ${input}</span>`;
};

// Event Listeners
checkBtn.addEventListener('click', getInput);

clearBtn.addEventListener('click', () => {
  resultsDiv.innerHTML = '';
  userInput.value = '';
});