const http = require('node:http');
const objectData = require('./data');

const server = http.createServer((req, res) => {
    console.log('request recived');
    res.end(`
            <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <main>
            <h1>${objectData.title}</h1>
            <h2>${objectData.subtitle}</h2>
            <p>${objectData.description}</p>
        </main>
        <footer>
            <p><span>Creado por: ${objectData.creator}</span></p>
            <p>Fecha: ${objectData.date}</p>
        </footer>
    </body>
    </html>`);

});

server.listen(0, () => {
    console.log(`
        server listening on port http://localhost:${server.address().port}
        `);
});
