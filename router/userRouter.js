const { json } = require('express/lib/response');

const router=require('express').Router(); ;

router.get('/',(req,res)=>{
    res.json({mesaj:"Tüm userlar listelenecek"})
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
        mesaj:"idsi"+req.params.id+" olan kullanıcının bilgileri "+JSON.stringify(req.body)+" bilgileriyle güncellenecek"
    })
})

router.delete('/:id',(req,res)=>{
    res.json({mesaj: "id'si "+req.params.id+ " olan kullanıcı sistemden silinecek "})
})





module.exports=router;