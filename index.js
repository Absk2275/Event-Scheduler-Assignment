const express=require("express");

const app=express();
const conn=require("./connection/connection");
const create = require("./routes/create");
const getEvents = require("./routes/getEvents");
const specific = require("./routes/specificOne");
const deleteEvent=require("./routes/delete");
const updateEvent=require("./routes/updateEvent");
let port=8080;

app.use(create);
app.use(getEvents);
app.use(specific);
app.use(deleteEvent);
app.use(updateEvent);

app.get("/", (req, res)=>{
    res.send("WORKING")
})

app.listen(port, ()=>console.log(`app is runnin on port ${port}`));