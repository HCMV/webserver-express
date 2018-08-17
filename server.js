const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'HÉcToR mOrAlEs'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

// nodemon server -e js,hbs,html,css // permite indicar a nodemon que este atento a los cambios de esas extensiones //


// localhost:3000/data, se define la entrada en get
// app.get('/data', (req, res) => {
//     res.send('Hola Data');
// });

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});