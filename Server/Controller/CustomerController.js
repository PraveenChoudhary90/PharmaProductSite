const CustomerModel = require("../Model/CustomerModel");



const customerInsert= async(req,res)=>{
    const {name,email,number,city,password}=req.body;
    const Customer = await CustomerModel.create({
        name:name,
        email:email,
        number:number,
        city:city,
        password:password
    })
    console.log(Customer);
    res.send({msg:"Your Registration  Done successfully"})
}



module.exports ={
    customerInsert
}