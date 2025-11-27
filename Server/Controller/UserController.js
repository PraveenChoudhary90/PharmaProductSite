const UserModel = require("../Model/UserModel");





const UserInsert = async(req,res)=>{
        const {name, email,number,ano}=req.body;
        const imagurl= req.file ? req.file.path:" ";
        try {
            const UserInsert = await UserModel.create({
                name:name,
                email:email,
                number:number,
                ano:ano,
                image:imagurl
            })
            console.log(UserInsert);
            res.send({msg:"User inserted successfully"});
        } catch (error) {
            console.log(error)
        }
}



const DisplayUser =async(req,res)=>{
    const User = await UserModel.find();
    res.status(200).send(User);
}


module.exports= {
    UserInsert,
    DisplayUser

}