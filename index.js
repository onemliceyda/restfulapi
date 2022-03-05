const express = require('express');
require('./db/dbConnection');
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}));



app.get('/', (req, res) => {
    res.json({
        'mesaj': 'hoşgeldiniz'
    });
})

app.get('/:id', (req, res) => {
    console.log(req.query.sortBy);
    res.status(200).json({'id':req.params.id})});


app.post('/', (req, res) => {
    res.json(req.body);
})
 

app.listen(3001, () => {
    console.log("3001 portundan server ayaklandırıldı")
});