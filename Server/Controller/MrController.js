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


const DisplayMR = async(req,res)=>{
    const MR = await MrModel.find();
    res.status(200).send(MR);
}

const MrDelete = async(req,res)=>{
    const {_id}= req.body;
    const Mr = await MrModel.findByIdAndDelete(_id);
    res.send("Mr Delete Successfully");
    
}


const mrgetupdatedata = async(req,res)=>{
    const {_id} = req.body;
    const Mrdata  = await MrModel.findById(_id);
    console.log(Mrdata);
    res.send(Mrdata);
}

const handelupdateMr = async(req,res)=>{
   try {
       const { _id } = req.body;
   
       const oldProduct = await MrModel.findById(_id);
   
       if (!oldProduct) {
         return res.status(400).send({ msg: "Mr not found!" });
       }
   
       let updatedImage = oldProduct.image;
   
       if (req.files && req.files.length > 0) {
         updatedImage = req.files[0].path;
   
         if (oldProduct.image && fs.existsSync(oldProduct.image)) {
           fs.unlinkSync(oldProduct.image);
         }
       }
   
       await MrModel.findByIdAndUpdate(
         _id,
         {
           ...req.body,
           image: updatedImage
         },
         { new: true }
       );
   
       res.status(200).send({ msg: "Mr Details updated successfully!" });
   
     } catch (error) {
       console.log(error);
       res.status(500).send({ msg: "Error updating product!", error });
     }
}


module.exports = {
    MrInsert,
    DisplayMR,
    MrDelete,
    mrgetupdatedata,
    handelupdateMr
}