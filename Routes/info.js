const express = require('express');
const router = express.Router();
const {Data} = require('../Modules/model');

//get api
router.get('/', async (req, res) => {
    try{
        const data = await Data.find();
        return res.send(data);
    }catch(e){
        res.status(500).send(e);
    }
})

// router.post('/', async (req, res) => {
//     const data = new Data(req.body);
//     try{
//         const savedData = await data.save();
//         return res.send(savedData);
//     }catch(e){
//         res.status(500).send(e);
//     }
// })

router.get('/:id',async (req, res) => {
    // const {id} = req.params.id;
    // const data = Data.findById(id).
    const _id = req.params.id;
    const data = await Data.findOne({_id});
    return res.send(data);
    
})



module.exports = router;
