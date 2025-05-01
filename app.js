const express=require("express")
const app=express()
// require("./sLinkedlist ");
// require("./string");
require("./queue");
app.listen(5000,()=>{
    console.log("server is running")
})