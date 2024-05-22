const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const app = express()
const port = 3000

// Gunakan ejs
app.set('view engine', 'ejs');

// Third-Party Middleware
app.use(expressLayouts);
app.use(morgan('dev'));

// Built in Middleware
app.use(express.static('public'));

// Aplication Level Middleware
app.use((req, res, next) => {
     console.log('Time: ', Date.now());
     next();
})

app.get('/', (req, res) => {

     const mahasiswa = [
          {
               nama: 'Reyvaldi Zakaria',
               email: 'rey@gmail.com',
          },
          {
               nama: 'Saka Nur Alief',
               email: 'saka@gmail.com',
          },
          {
               nama: 'Deri Afandi',
               email: 'deri@gmail.com',
          },
     ];
     res.render('index', {
          nama: 'Reyvaldi Zakaria',
          title: 'Halaman Home',
          layout: 'layouts/main-layouts.ejs',
          mahasiswa,
     });
});
app.get('/about', (req, res) => {
     res.render('about', {
          title: 'Halaman About',
          layout: 'layouts/main-layouts.ejs',
     });
});
app.get('/contact', (req, res) => {
     res.render('contact', {
          title: 'Halaman Contact',
          layout: 'layouts/main-layouts.ejs',
     });
});

app.get('/product/:id', (req, res) => {
         res.send(`Product ID: ${req.params.id} <br> Category: ${req.query.category}`);
    });

app.use((req, res) => {
    res.status(404);
    res.send('Error 404: Halaman Tidak Ditemukan')
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});