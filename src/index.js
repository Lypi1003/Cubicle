const { request } = require('express');
const express = require('express');
const hbs = require('express-handlebars');

const app = express();
app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views','./src/views');

app.use('/static',express.static('public'));

app.get('/', (req,res)=>{
    res.render('index')
});


app.listen(5000,()=> console.log('App is listening on port 5000...'));