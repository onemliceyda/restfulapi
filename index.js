const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/restfulapi', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("Veritabanına bağlandı"))
    .catch(hata => console.log("db hatası"))
app.listen(8080, () => {
    console.log("3001 portundan server ayaklandırıldı")
});