const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const output = document.getElementById("output");
const romanArr = [];
const arabicToRomanArr = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

// Check input function
function checkInput() {
  const inputVal = parseInt(numberInput.value); // Parse the input value
  if (isNaN(inputVal)) {
    output.innerText = "Please enter a valid number";
  } else if (inputVal > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else if (inputVal < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else {
    arabicToRoman(inputVal);
  }
}

// Arabic to Roman conversion function
function arabicToRoman(input) {
  romanArr.length = 0; // Clear previous results
  arabicToRomanArr.forEach(arr => {
    while (input >= arr[0]) {
      input -= arr[0]; // Subtract value
      romanArr.push(arr[1]); // Add numeral to the array
    }
  });
  output.innerText = romanArr.join(""); // Display result
}

// Event listener for the button
convertBtn.addEventListener("click", checkInput);
