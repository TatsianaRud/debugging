'use strict';

/*
  environment:

  name:
  message:

  callstack:

  life cycle:

  the mistake:

  the fix(es):
);
*/
const addedTowNumbers = 3 + 4;//7

const addTowNumbers = (x = 0, y = 0) => {
  return x + y;
};
const seven = addTowNumbers(3, 4);

console.assert(seven === addedTowNumbers);

// const addTowNumbers=(x = 0, y = 0)=> {
//   return x + y;
// };
// let a = addTowNumbers(3,4);
// const seven =(3+4);
// console.assert(seven === a);