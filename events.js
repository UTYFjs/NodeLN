const EventEmitter = require('events'); // класс из модуля 
const emitter = new EventEmitter();

emitter.on('start', () => console.log('Start')); //обработчик события

emitter.emit('start'); // страбатывает событие


emitter.on('start', message => console.log(message));

emitter.emit('start', 'Start message'); // пмередача дополнительного значения в обработчик

emitter.on('start', (first, second) => console.log(`${first} and ${second}`));

emitter.emit('start', 1, 2); // 1 and 2


const handler1 = () => console.log(1); // назначение на одно событие несколько обработчиков
const handler2 = () => console.log(2);

emitter.on('start', handler1);
emitter.on('start', handler2);

emitter.emit('start'); // выводит 1, затем 2

emitter.off('start', handler); // удаляет одно событие обработчик