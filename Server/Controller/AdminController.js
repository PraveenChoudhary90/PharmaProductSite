const AdminModel = require("../Model/AdminModel");
const ProductModel = require("../Model/ProductModel");


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
const {  category,subCategory,productname,brand,mrp,price,batchNo,mfgDate,expDate}= req.body;
const ImageUrl = req.files.map(file=>file.path);
try {
    const Product = await ProductModel.create({
        category:category,
        subCategory:subCategory,
        productname:productname,
        brand:brand,
        mrp:mrp,
        price:price,
        batchNo:batchNo,
        mfgDate:mfgDate,
        expDate:expDate,
        defaultImage:ImageUrl[0],
        image:ImageUrl
    })
    console.log(Product);
    res.status(200).send({msg:"Product is Insert Successfully"});
    
} catch (error) {
    console.log(error)
}
}


const DisplayProduct = async(req,res)=>{
    const Product = await ProductModel.find();
    res.status(200).send(Product);
}


const DeleteProduct = async(req,res)=>{
    const {_id}=req.body;
    const Product = await ProductModel.findByIdAndDelete(_id);
    res.status(200).send({msg:"Product is deleted Successfully"});
}



const UpdateGetData = async(req,res)=>{
    const {_id} =req.body;
    const Product = await ProductModel.findById(_id);
    res.status(200).send(Product);
}

module.exports = {
    InsertAdmin,
    AdminLogin,
    ProductInsert,
    DisplayProduct,
    DeleteProduct,
    UpdateGetData
}