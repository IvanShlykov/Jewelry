const router = require('express').Router()
const {Location} = require('../../db/models');

router.get('/',async (req,res)=>{
    const location = await Location.findAll()
    res.json({location})
    })
    
    module.exports = router;
