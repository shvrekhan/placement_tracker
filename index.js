//////////// IMPORTING DEPENDENCY /////////////
const express  = require('express');
const app = express();
const port = 3000;
const hbs = require('hbs');

//////////// END IMPORTING DEPENDENCY /////////////

//////////// SETTING MIDDLEWARE ///////////////////
app.set('view engine' , 'hbs');
app.set('views','views');
//////////// SETTING MIDDLEWARE ///////////////////

app.get('/',(req,res)=>{
    res.send('Placement Tracker.');
})

app.listen(port ,(req,res)=>{
    console.log('Server is running on port number '+port);
})