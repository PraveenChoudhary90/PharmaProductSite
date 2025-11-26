const MrModel = require("../Model/MrModel");





const MrInsert = async(req,res)=>{
    const {name, email,number,ano}=req.body;
    const imagurl= req.file ? req.file.path:" ";
    try {
        const MrInsert = await MrModel.create({
            name:name,
            email:email,
            number:number,
            ano:ano,
            image:imagurl
        })
        console.log(MrInsert);
        res.send({msg:"Mr inserted successfully"});
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    MrInsert
}