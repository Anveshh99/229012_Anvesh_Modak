const express=require("express");
const app=express();

/* app.get("/",(req,resp)=>{
    resp.send("<h1>Welcome to Roblox</h1>");
}) */

const path=require("path");
const bodyparser=require("body-parser");

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,resp)=>{
    resp.sendFile(__dirname+"/public/index.html")
})

app.listen(8000,()=>{
    console.log("server running on port no 8000");
})