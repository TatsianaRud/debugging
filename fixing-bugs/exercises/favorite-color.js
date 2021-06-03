'use strict';

/* favorite color

  a user must input something
  - given they cancel, the loop continues
  - given they input an empty string, the loop continues
  - all other input is allowed

  test cases:
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  the bug:
  in if u click cancel or empty string - programm finished
  if u enter anything its not shows value of input

  your fix:
  &&->changed to ||,break_->continue
  added else condition and break after;
*/

let message = 'you entered "';

while (true) {
  const input = prompt('enter something');

  if (input === null || input.length === 0) {
    message = input + '"';
    continue;
  }
  else{
    message = message +input;
    break;
  }
}

alert(message);

/* experiments

  name:
    predict:
    actual:
    why:

*/
