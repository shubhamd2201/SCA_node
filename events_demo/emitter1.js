// const item = require('./item');
import item from "./item.js";
const itemObj = new item('petrol', 75);


itemObj.on('pricechange', (obj)=>{
    console.log(`${obj.name} price incresed by ${obj.increase} %`);
    console.log(`details \n old price: ${obj.oldprice} \n new price: ${obj.newPrice}`);

});


itemObj.price = 100;
console.log(`Final price: ${itemObj.itemprice}`);
