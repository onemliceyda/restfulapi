const express = require('express');
require('./db/dbConnection');
const hataMiddleware=require('./middleware/hataMiddleware')
//ROUTERS
const userRouter=require('./router/userRouter')

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use('/api/users',userRouter) //hata burada karşılandı
 //mddleware oluşturduğumuz için use deriz.tüm isteklerin başına app koyaruz


app.get('/', (req, res) => {
    res.json({'mesaj': 'hoşgeldiniz'});
})

//next denilince ulaşacak middleware
app.use(hataMiddleware) 

app.listen(3001, () => {
    console.log("3001 portundan server ayaklandırıldı")
});