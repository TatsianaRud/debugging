let input = prompt('enter the word "yes", upper or lower case');

let reaction = '';
if (input === null) {
  reaction = ':(';
console.log(reaction+"sad in if statment");
console.log(input);
}

 else if (input.toLowerCase() === 'yes') {
  reaction = input + '!';
  console.log(reaction+"yes reaction");
  console.log(input);;
} else {
  reaction = 'baaaaad: ' + input;
  console.log(reaction+" any reaction");
  console.log(input);;
}

alert(reaction);
console.log(reaction+" reaction like in alert");
