import { EventEmitter } from 'events';
const emitter = new EventEmitter();

emitter.on('newUser', (user) => {
    console.log(`A new user registered by the name:${user.name}`);
});
emitter.emit('newUser',{name:'shubham', id:101});

