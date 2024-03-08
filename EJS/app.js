 import express from 'express';
 import morgan from 'morgan';
 let app = express();

 let logger  = morgan("user visit on :method method and page => :url");

app.set('view-engine', "ejs");
app.use(express.static('public'));

 app.get('/',logger, (req, res)=>{
    res.render('pages/index.ejs', {name:"shubham"});
 });
 app.get('/about',logger, (req, res)=>{
   res.render('pages/about.ejs');
});
app.get('/contact',logger, (req, res)=>{
   res.render('pages/contact.ejs');
});

 let server = app.listen(8080,()=>{
    console.log(`server started at port ${server.address().port}`);
 });