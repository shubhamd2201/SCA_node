import {EventEmitter} from "events";

const emitter = new EventEmitter();
emitter.on('update', (secondstarted)=>{
    console.log(`this app started since ${secondstarted} sec ago`);
});

let i = 1;
// setInterval(()=>{

//     emitter.emit('update', i);
//     i++

// }, 1000);