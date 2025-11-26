




const MrInsert = async(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    res.send("okk")
}


module.exports = {
    MrInsert
}