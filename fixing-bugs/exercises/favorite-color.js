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

  --- experiments ---

  1. FAILING:
    TRY:
    PREDICT:
    IT DID:
    EXPLAIN:

  --- lessons learned ---


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
