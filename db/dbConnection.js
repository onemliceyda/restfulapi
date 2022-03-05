const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restfulapi', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("Veritabanına bağlandı"))
    .catch(hata => console.log("db hatası: " + hata))

