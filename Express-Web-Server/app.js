const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
//   res.send('NodeJS Web Server')
     res.sendFile('/index.html', {root: __dirname});
});
app.get('/about', (req, res) => {
//   res.send('Ini adalah halaman about')
     res.sendFile('/about.html', {root: __dirname});
});
app.get('/contact', (req, res) => {
//   res.send('Ini adalah halaman contact')
     res.sendFile('/contact.html', {root: __dirname});
});

app.get('/product/:id', (req, res) => {
         res.send(`Product ID: ${req.params.id} <br> Category: ${req.query.category}`);
    });

app.use('/', (req, res) => {
    res.status(404);
    res.send('Error 404: Halaman Tidak Ditemukan')
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});