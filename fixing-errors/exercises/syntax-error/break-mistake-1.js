'use strict';

/*
  environment:Firefox

  name:Uncaught SyntaxError
  message:: unlabeled break must be inside loop or switch

  callstack:
  about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56

  life cycle:creation phase error

  the mistake: break inside for statement not permitted

  the fix(es): delet break;
*/

const userName = 'wingdoz';

if (userName.length > 3) {
  console.log(userName);

 
}
