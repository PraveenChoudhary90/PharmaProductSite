const AttributeModel = require("../Model/AttributeModel");



const AttributeInsert = async(req,res)=>{
const {name} = req.body;
const Attribute = await AttributeModel.create({
    name:name
})
console.log(Attribute);
res.send({msg:"Attribute cretaed successfully"});
}


const AttributeDisplay = async(req,res)=>{
    const Data = await AttributeModel.find();
    res.send(Data);
}



module.exports = {
    AttributeInsert,
    AttributeDisplay
}