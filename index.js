const app = require('express')();


app.get("*",(req,res)=>{
    res.send(`Server is running ${req.url} `)
})





app.listen(3001,()=>{console.log("Server is running at 3001")})