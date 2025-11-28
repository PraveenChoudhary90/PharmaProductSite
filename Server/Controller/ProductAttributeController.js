const AttributeModel = require("../Model/AttributeModel");
const AttributeValueModel = require("../Model/AttributeValueModel");

AttributeValueModel

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

const SubAttributeInsert = async(req,res)=>{
    const {attributeId,subname} = req.body;
    const SubAttribute = await AttributeValueModel.create({
        subname:subname,
        attributeId:attributeId
    })
    console.log(SubAttribute);
    res.send({msg:"Sub-Attribute created"});
}



module.exports = {
    AttributeInsert,
    AttributeDisplay,
    SubAttributeInsert
}