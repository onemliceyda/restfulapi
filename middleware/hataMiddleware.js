const hataYakalayici = (err, req, res, next) => {
   
        if(err.name==="CastError"){
           res.json({
               mesaj:" Geçerli bir id veriniz.",
           })
        }else{
            res.json({
                mesaj:err.message,
            })
        }
    
  
};

module.exports = hataYakalayici;