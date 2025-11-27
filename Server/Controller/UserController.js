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


const UserDelete = async(req,res)=>{
    const {_id} = req.body;
    const User = await UserModel.findByIdAndDelete(_id);
    res.status(200).send(User, {msg:"User Deleted "})
}


const Usergetupdatedata = async(req,res)=>{
    const {_id} = req.body;
    const User = await UserModel.findById(_id);
    console.log(User);
    res.send(User);
}


const handelupdateUser = async(req,res)=>{
      try {
          const { _id } = req.body;
      
          const oldProduct = await UserModel.findById(_id);
      
          if (!oldProduct) {
            return res.status(400).send({ msg: "User not found!" });
          }
      
          let updatedImage = oldProduct.image;
      
          if (req.files && req.files.length > 0) {
            updatedImage = req.files[0].path;
      
            if (oldProduct.image && fs.existsSync(oldProduct.image)) {
              fs.unlinkSync(oldProduct.image);
            }
          }
      
          await UserModel.findByIdAndUpdate(
            _id,
            {
              ...req.body,
              image: updatedImage
            },
            { new: true }
          );
      
          res.status(200).send({ msg: "User Details updated successfully!" });
      
        } catch (error) {
          console.log(error);
          res.status(500).send({ msg: "Error updating product!", error });
        }
}


module.exports= {
    UserInsert,
    DisplayUser,
    UserDelete,
    Usergetupdatedata,
    handelupdateUser

}