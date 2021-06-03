'use strict';

/* longer than 4

  a user can exit the loop by canceling or entering something longer than 4 characters
  - given the user cancels, the program tells them they canceled
  - given the user input is shorter than or equal to  4 characters, the loop continues
  - given the user input is longer than 4 characters, the loop exits

  test cases:
    null -> 'you canceled' +
    'abcde' -> 'abcde'-
    'javascript' -> 'javascript'
    'you canceled' -> 'you canceled'

  the bug: if u click cancel programm doesn give 'you canceled'
  if you enter more then 4 charact. programm ask to enter more then 4 ch. again

  your fix:
  add alert message after if (input===null)
  in else if statment we add input.leghth

*/

let input = '';

let prompting = true;
while (prompting) {
  let input = prompt(
    'enter something longer than 4 characters, or "cancel" to leave'
  );
  if (input === null) {
    prompting = false;
    alert ('you canceled');
  } else if (input.length > 4) {
    prompting = false;
    alert(input);
  }
}

alert(input);

/* experiments

  name:
    predict:
    actual:
    why:

*/
