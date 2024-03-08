import express from 'express';

const router = express.Router();

const logger = (req, res, next)=>{
    let now = new Date();
    let timestamp = `${now.toDateString()} at ${now.toLocaleTimeString()}`;
    // console.log(now.toDateString())
    console.log(`req arrived at: ${timestamp}`);
    next();
}

let products = [{_id:1, title:'i phone', price:50000}, {_id:2, title:'iqoo', price:40000}];
// router.use(logger);
router.get('/',logger, (req, res)=>{
    res.send({data:products});
});

router.post('/', (req, res)=>{
    let data = req.body;
    products.push(data);
    res.send({message:'data saved successfully',data:products});
});

export {router};