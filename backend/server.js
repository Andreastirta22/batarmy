const express = require('express');
const app = express();
const port = 3000; // atau port yang Anda pilih

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Selamat datang di Admin Dashboard');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}/`);
});

const adminRoutes = require('./adminRoutes');

app.use('/admin', adminRoutes);

app.use(express.static('public'));


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/adminDashboard', { useNewUrlParser: true, useUnifiedTopology: true });
