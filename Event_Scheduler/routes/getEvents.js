const express=require("express");
const router=express.Router();
const event = require("../model/eventModel");
const bodyParser=require("body-parser");


router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.get("/v1/events",async(req, res)=> {
    try{
        const allEvents = await event.find();

        if(allEvents){
            return res.status(200).json({
                message:"Success",
                allEvents
            })
        }
    }catch(e){
        return res.status(500).json({
            message:e.message,
            status:"Failed"
        })
    }
})
module.exports=router;