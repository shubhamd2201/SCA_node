import {EventEmitter} from 'events';
const emitter = new EventEmitter();

let callbackEmitter = ()=>{
    console.log(' i am fired');
    }
emitter.on('newuser',callbackEmitter);

emitter.emit('newuser');
// emitter.removeListener('newuser',callbackEmitter );
emitter.emit('newuser');

// removeAllListeners only take 1 arg this is event for all emitter 
emitter.removeAllListeners('newuser');
emitter.emit('newuser');
