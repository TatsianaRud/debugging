'use strict';

/*
  environment:Firefox

  name:Uncaught SyntaxError: 
  message:'' string literal contains an unescaped line break

  callstack:
   injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289

  life cycle:creation phase error:

  the mistake:string cant be devided in 2 lines

  the fix(es):set a string on line
*/

const a = 'this is two lines';
