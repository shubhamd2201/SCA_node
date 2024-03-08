let args = process.argv;

if(args.length < 4){
    console.log('please pass atlaest two number');
    process.exit();
}
let sum = 0;
for(let i = 2; i < args.length; i++){
    
    sum = sum + Number(args[i]);
}

console.log(`sum is ${sum}`);
console.log(`avarage is ${sum/(args.length - 2)}`);




































