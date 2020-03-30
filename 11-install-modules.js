const _ = require('lodash');
let example = _.fill([1, 2, 3, 4, 5], 'ñoña', 1, 4);
console.warn(example);