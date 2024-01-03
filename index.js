const express= require("express");
const app =express();

app.get("/", (req, res)=>{
    res.json([
        {
            id:1,
            name:"Deepak Nemade",
            age:28
        },
        {
            id:2,
            name:"Rajat Chaudhari",
            age:27
        },
        {
            id:1,
            name:"Vaibhav Pachpande",
            age:27
        },
    ])
});
app.listen(5500,()=>{
    console.log("app is running on 5500 port")
});