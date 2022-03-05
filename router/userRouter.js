
const User=require('../models/userModel')
const router=require('express').Router(); ;

router.get('/',(req,res)=>{
    const tumUserlar= User.find({}).then();
    res.json(tumUserlar)
})



router.get('/:id',(req,res)=>{
    res.json({mesaj:"id'si : "+req.params.id + " olan user listelenecek"})
})




router.post('/',(req,res)=>{
    res.json(req.body)
})

//güncelleme işlemleri için
router.patch('/:id',(req,res)=>{
    res.json({
        mesaj:"idsi"+req.params.id+" olan kullanıcının bilgileri "+(req.body)+" bilgileriyle güncellenecek"
    })
})

router.delete('/:id',(req,res)=>{
    res.json({mesaj: "id'si "+req.params.id+ " olan kullanıcı sistemden silinecek "})
})





module.exports=router;