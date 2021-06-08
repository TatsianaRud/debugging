const userInput = prompt(
  'Welcome!\n\n' +
    '"play": begin the game\n' +
    '"-h": read the instructions\n' +
    'escape: exit the game'
);

if (userInput === '-h') {
  alert(
    'This is a two player game.\n\n' +
      'Player 1: enters a secret phrase, and then a clue.\n' +
      'Player 2: is shown the clue and must guess the phrase.\n\n' +
      'you can end the game at any point by canceling'
  );
  console.log(userInput);
} else if (userInput === 'play') {
  console.log(userInput);
  let winner = 'no one';

  alert('Player 2: look away! hide your eyes!');
  
  let secretPhrase = '';
  while (secretPhrase === '') {
    secretPhrase = prompt('Player 1: enter a secret phrase');
    console.log(secretPhrase);
  }

  if (secretPhrase === null) {//cancel
    alert('good bye');
    console.log("u pressed canceled");
  } else {
    console.log("u pressed OK")
    let clue = '';
    while (clue === '') {
      clue = prompt('Player 1: enter a clue to help guess your phrase');
      console.log("Here u enter phrase")
      
    }

    if (clue === null) {
      alert('good bye');
    } else {
      alert(
        'Player 1: you entered ...\n\n' +
          '- phrase: "' +
          secretPhrase +
          '"' +
          '\n' +
          '- clue: "' +
          clue +
          '"'
           
      );
      console.log(clue+" "+secretPhrase+" "+"shouws secret word and clue");//???

      alert('now go get Player 2');

      let guess = '';

      while (guess === '') {
        guess = prompt(
          'Player 2, Here is your clue:\n\n' +
            '- "' +
            clue +
            '"\n\n' +
            'what do you think the secret phrase is?'
        );
        console.log('Player 2, Here is your clue:\n\n' +
            '- "' +
            clue +
            '"\n\n' +
            'what do you think the secret phrase is?')
      }

      if (guess === null) {
        alert('good bye');
        console.log("click cancel")
      } else if (guess === secretPhrase) {
        winner = 'Player 2';
        alert('Congrats, you were right!\n\n');
        console.log('Congrats, you were right!\n\n')
      } else {
        winner = 'Player 1';

        const revealTheSecret = confirm(
          'Nope, not correct.\n\n' + 'do you want to know the secret?'
        );

     

        if (revealTheSecret) {
          alert(
            'The secret was:\n\n' +
              '- ' +
              '"' +
              secretPhrase +
              '"' +
              '\n\n' +
              'thanks for playing, see ya'
          );
console.log('The secret was:\n\n' +
              '- ' +
              '"' +
              secretPhrase +
              '"' +
              '\n\n' +
              'thanks for playing, see ya')      
              
                } else {
          alert('better luck next time');
          console.log("better luck next time")
        }
      }
    }
  }
  alert('game over. the winner is: ' + winner);
} else if (userInput === null) {
  alert('good bye');
} else {
  alert('unknown command: "' + userInput + '"');
}
