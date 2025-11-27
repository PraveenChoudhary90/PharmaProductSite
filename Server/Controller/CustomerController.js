const CustomerModel = require("../Model/CustomerModel");
const KycCustomerModel = require("../Model/KycCustomerModel");



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


const customerLogin = async(req,res)=>{
       const {email,password} = req.body;
       const Customer  =await CustomerModel.findOne({email:email});
        try {
           if(!Customer){
           res.status(401).send({msg:"Invalid Email Please Take Valid Email"})
       }
       if(Customer.password!=password){
           res.status(401).send({msg:"Invalid Password"})
       }
       res.status(200).send({msg:"You Are Login Successfully", Customer:Customer}); 
        } catch (error) {
           console.log(error)
        }
      
    
}

const KycCustomer = async(req,res)=>{
    const {name,email,city,number,ano} =req.body;
    const ImageUrl = req.file.path;
    try {
        const kycCustomer = await KycCustomerModel.create({
            name:name,
            email:email,
            city:city,
            number:number,
            ano:ano,
            image:ImageUrl
        })
        console.log(kycCustomer)
        res.send({msg:"Kyc Process is done wait for status"})
    } catch (error) {
        console.log(error)
    }
}


const AdminKycStatus = async(req,res)=>{
    const {email,status}= req.body;
    try {
        const Kyc = await KycCustomerModel.findOneAndUpdate({email},{status},{new:true});
        console.log(Kyc);
        res.send({msg:"Status is change"});
    } catch (error) {
        console.log(error)
    }
}


module.exports ={
    customerInsert,
    customerLogin,
    KycCustomer,
    AdminKycStatus
}