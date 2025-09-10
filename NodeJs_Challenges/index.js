const express = require("express")
const app = express()
const PORT = 4000
app.get("/",(req,res)=>{
    res.render()
    res.json({status:true,message:"hi how are you "})
})

app.listen(PORT,()=>{
console.log(`server is running in port ${PORT}`)
})