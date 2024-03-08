import {EventEmitter} from 'events';

export default class item extends EventEmitter{
    constructor(itemname, itemprice){
        super();
        this.itemname = itemname;
        this.itemprice = itemprice;
    }
    get name(){
        return this.itemname;
    }
    get price(){
        return this.itemprice;
    }
    set price(newPrice){
        if(newPrice > this.itemprice){
            let percent = ((newPrice - this.itemprice) * 100 / this.itemprice).toFixed(2);
            this.emit('pricechange', {name:this.itemname, oldprice: this.itemprice, newPrice: newPrice, increase: percent});
        }
        this.itemprice = newPrice;
    }
}
