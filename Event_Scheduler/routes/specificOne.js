const express=require("express");
const router=express.Router();
const event = require("../model/eventModel");
const bodyParser=require("body-parser");


router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.get("/v1/events/:id", async (req,res)=>{

    try{
    const specificEvent = await event.find({_id: req.params.id});
    if(specificEvent){
        return res.status(200).json({
            message:"success",
            specificEvent

        })
    }
    
    }catch(e){
        return res.status(404).json({
            message:"There is no event with this id",
            status:"Failed"
        })

    }
})
module.exports = router;