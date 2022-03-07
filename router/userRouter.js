
const User = require('../models/userModel')
const router = require('express').Router();;
const createError = require('http-errors');

router.get('/', async (req, res) => {
    const tumUserlar = await User.find({});
    res.json(tumUserlar)
})



router.get('/:id', (req, res,) => {
    res.json({ mesaj: "id'si : " + req.params.id + " olan user listelenecek" })
})




router.post('/', async (req, res, next) => {

    try {
        const eklenecekUser = new User(req.body);

        const { error, sonuc } = eklenecekUser.joiValidation(req.body);

        if (error) {
            next(error);
            console.log("user kaydedilirken oluşan hata : " + err);
        } else {
            const sonuc = await eklenecekUser.save();
            res.json(sonuc);
        }


    } catch (err) {
        next(err);

    }
})

//güncelleme işlemleri için
router.patch('/:id', async (req, res, next) => {


    delete req.body.createdAt;
    delete req.body.updatedAt;
    delete req.body.password;



    try {
        const sonuc = await User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });
        if (sonuc) {
            return res.json({ sonuc });
        } else {
            return res.status(404).json({ mesaj: "Kullanıcı bulunamadı" })
        }

    } catch (e) {
        next(e);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const silinecekUser = await User.findByIdAndDelete({ _id: req.params.id })

        if (silinecekUser) {
            return res.json({ mesaj: "Kullanıcı silindi" })
        } else {

            //throw new Error('Kullanıcı Bulunamadi) 
            /*return res.status(404).json({
                mesaj:"Kullanıcı bulunamadı",
            })*/
            throw createError(404, 'Kullanıcı Bulunamadı');

        }
    } catch (e) {
        next(e); //middleware kullanımı
    }

})





module.exports = router;