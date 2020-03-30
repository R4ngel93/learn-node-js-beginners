const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('trigger', (a, b) => {
  console.info('Trigger event has occurred');
  console.warn(a + b);
});
eventEmitter.emit('trigger', 10, 5);

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

let pedro = new Person('Pedro');
pedro.on('name', () => console.log('My name is: ' + pedro.name));

pedro.emit('name');
