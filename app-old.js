const http = require('http');

// llamado nodejs
http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Héctor',
        edad: 33,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();

})

.listen(8080)

console.log('Escuchando el puerto 8080');