const express=require("express");
const router=express.Router();
const event = require("../model/eventModel");
const bodyParser=require("body-parser");


router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.put("/v1/events/:id", async (req, res)=> {

    try{
    const data = await event.findByIdAndUpdate({_id:req.params.id},req.body);
    const updateData = await event.findOne({_id:req.params.id});
    res.status(200).json({
        message:"success",
        updateData
    })
    }catch(e){
        res.status(500).json({
            error: e.error
        })
    }
})

module.exports=router;