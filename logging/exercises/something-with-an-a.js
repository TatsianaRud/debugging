let userInput = prompt('please enter something with an "a" in it');

if (userInput === null || userInput === '') {
  alert('nothing!  why !!! ??? !!!');
  console.log("click cancelled or empty string")
} else {
  if (userInput.includes('a')) {
    console.log("check if a exict"+ userInput.includes('a'))
    alert('"' + userInput + '" is perfect!');
    console.log("PERFECT!!!")
  } else {
    console.log("check if a exict"+ userInput.includes('a'))
    alert('"' + userInput + '" has no "a" in it');
    console.log("NOT  PERFECT!!!")
  }
}
