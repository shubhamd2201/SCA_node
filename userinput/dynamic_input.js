const setup = require('prompt-sync');

const prompt = setup({sigint:true});

let username = prompt('what is your name ?');

console.log(`hello ${username}`);