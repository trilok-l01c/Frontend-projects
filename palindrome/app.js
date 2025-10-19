const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const showResult = document.querySelector('#result');
const boolArr = [];

checkBtn.addEventListener("click", printResult);

// to hide result container
showResult.style.display = 'none';

// to get clean input, without non-alphnumeric and uppercased values
function getInput() {
  return textInput.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().trim().split("");
}


// to get bool from charArr
function isPalindrome(x) {
  boolArr.length = 0;

  for (let i = 0; i < x.length / 2; i++)
  {

    if(x[i] === x[x.length - (1 + i)])
    {
      boolArr.push(true);
    }
    else
    {
      boolArr.push(false);
    }
  }
  return boolArr.every(bool => bool === true);
}

function printResult () {

if(textInput.value.trim() === "")
{
  alert("Please input a value");
}
else
{
    const charArr = getInput();
  
  if (isPalindrome(charArr)) 
  {
    showResult.style.display = 'block';
    showResult.innerText = `${textInput.value} is a palindrome`;
    
  }
  else
  {
    showResult.style.display = 'block';
    showResult.innerText = `${textInput.value} is not a palindrome`;
    
  }
}
}
