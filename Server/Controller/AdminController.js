const AdminModel = require("../Model/AdminModel");


const InsertAdmin = async(req,res)=>{
    const {name, email,password} =req.body;
    try {
        const Admin = await AdminModel.create({
           name:name,
           email:email,
           password:password 
        })
        console.log(Admin);
        res.status(200).send("Admin Cretaed successfully");
    } catch (error) {
        console.log(error)
    }
}



const AdminLogin = async(req,res)=>{
    const {email,password} = req.body;
    const Admin  =await AdminModel.findOne({email:email});
     try {
        if(!Admin){
        res.status(401).send({msg:"Invalid Email Please Take Valid Email"})
    }
    if(Admin.password!=password){
        res.status(401).send({msg:"Invalid Password"})
    }
    res.status(200).send({msg:"You Are Login Successfully", Admin:Admin}); 
     } catch (error) {
        console.log(error)
     }
   
}


const ProductInsert = async(req,res)=>{
    console.log(req.body);
    console.log(req.files);
    res.send("okkk");
}





module.exports = {
    InsertAdmin,
    AdminLogin,
    ProductInsert
}