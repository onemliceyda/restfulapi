const hataYakalayici = (err, req, res, next) => {

    console.log(err);

    if (err.code === 11000) {
        return res.json(
            {
                mesaj: Object.keys(err.keyValue) + " için girdiğiniz " + Object.values(err.keyValue) + " daha önceden veri tabanınnda bulunduğundan eklenemez ya da güncellenemez,unique olmalıdır",
                hataKodu: 400
            }
        )
    }

    if (err.code === 66) {
        return res.json({
            mesaj: "Değiştirilemez bir alanı değiştirmeye çalıştınız.",
            hataKodu: 400,
        })
    }

    res.status(err.statusCode || 500);
    res.json({
        hataKodu: err.statusCode || 500,
        mesaj: err.message
    });


};

module.exports = hataYakalayici;