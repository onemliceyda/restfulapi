const express = require('express');
require('./db/dbConnection');

//ROUTERS
const userRouter=require('./router/userRouter')

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use('/api/users',userRouter) //mddleware oluşturduğumuz için use deriz.tüm isteklerin başına apş koyaruz


app.get('/', (req, res) => {
    res.json({'mesaj': 'hoşgeldiniz'});
})




app.listen(3001, () => {
    console.log("3001 portundan server ayaklandırıldı")
});