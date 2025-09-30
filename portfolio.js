const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('index');
});

app.listen(7000,() =>{
    console.log("This system is running in 7000");
});
