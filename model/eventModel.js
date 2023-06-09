const mongoose=require("mongoose");

const eventSchema= new mongoose.Schema ({
    title: {type:String, required:true},
    description: {type:String, required:true},
    location:{type:String, required:true},
    startTime:{type:Date, default: Date.now},
    endTime:{type:Date, default: Date.now}
})

const Event= mongoose.model("Event", eventSchema);

module.exports=Event;