const express=require("express");
const router=express.Router();
const event = require("../model/eventModel");
const bodyParser=require("body-parser");


router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.delete("/v1/events/:id", async(req, res)=>{
    try{
        const specificEvent = await event.findByIdAndDelete({_id: req.params.id});
        if(specificEvent){
            return res.status(204).json({
                message:"delete success",
                specificEvent
    
            })
        }
    }catch(e){
        return res.status(500).json({
            message:e.message,
            status:"Failed"
        })
    }
})

module.exports = router;