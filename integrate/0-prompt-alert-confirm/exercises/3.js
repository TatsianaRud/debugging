'use strict';

// fill in the blank to pass the assertion

const interactionValue = alert('asdf');

console.log('interactionValue:', typeof interactionValue, interactionValue);

console.assert(typeof interactionValue === 'undefined', 'interactionValue should be undefined');
