'use strict';

/*
  environment:Firefox

  name:Uncaught SyntaxError
  message: missing variable name

  callstack:
   about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289

  life cycle:creation phase

  the mistake:using declaring const variable not need,after for u cant write assign operator

  the fix(es):delete const ,delete assign operator
*/

  for(let i = 0; i < 5; i++) {
  console.log(i);
}
