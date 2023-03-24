const express=require("express");
const router=express.Router();
const event = require("../model/eventModel");
const bodyParser=require("body-parser");

router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.post("/v1/events", async(req, res)=>{
    try {
        const {title, description, location, startTime, endTime}=req.body;
        const eventResult = await event.create({
            title, description, location, startTime, endTime
        })
        return res.status(201).json({
            status:"Success",
            message:eventResult
        })
    }catch(e){
        return res.status(500).json({
            status:"Failed",
            message: e.message
        })

    }
})

module.exports=router;