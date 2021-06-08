let userInput = prompt('please enter something with an "a" in it');

let reaction;
if (userInput === null || userInput === '') {
<<<<<<< HEAD
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
=======
  reaction = 'nothing!  why !!! ??? !!!';
} else {
  if (userInput.includes('a')) {
    reaction = '"' + userInput + '" is perfect!';
  } else {
    reaction = '"' + userInput + '" has no "a" in it';
>>>>>>> ea3d5d82ef9a083702075663856b74f3fd38296c
  }
}

alert(reaction);
