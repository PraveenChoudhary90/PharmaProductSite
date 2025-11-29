const express  =require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const imagekit = require("../Backend/utils/Imagekit");
const multer = require("multer");
const Admin = require("./Route/AdminRoute");

const upload  =multer();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    console.log("DB IS CONNECTED")
})

// app.get("/user", (req,res)=>{
//     res.send({
//         name:"praveenchoudhary",
//         email:"pc8746@gmail.com",
//         password:1234
//     })

// })

// app.post("/user", (req, res) => {
//     const data = req.body;
//     console.log(data);

//     res.json({
//         message: "Data Mil Gaya",
//         data: data
//     });
// });


// app.delete("/userdelete/:id", (req,res)=>{
//     const sid = req.params.id;
//     console.log("delte", {id:sid})
//     res.json({
//         msg:"delete huaa",
//         deletedid:sid
//     })
// })


// app.put("/studentupdate/:id", (req, res) => {
//     const studentid = req.params.id;  // URL se id mil rahi hai
//     const newData = req.body;         // Body se updated data mil raha hai

//     console.log({
//         msg: "Data update hua",
//         id: studentid,
//         updatedData: newData
//     });

//     res.send({
//         message: "Student data updated successfully",
//         id: studentid,
//         newData: newData
//     });
// })


// app.use("/querydata", (req,res)=>{
//     const name = req.query.name;
//     const email = req.query.email;
//     res.json({
//         msg:`name::${name} and email::${email}`
//     })
//     console.log(name,email);
// })



// app.post("/upload", upload.single("file"), async (req, res) => {
//     if (!req.file) {
//         return res.status(400).json({ msg: "No file uploaded" });
//     }

//     try {
//         const response = await imagekit.upload({
//             file: req.file.buffer,          // memory buffer
//             fileName: req.file.originalname // original file name
//         });

//         res.json({
//             msg: "File uploaded successfully to ImageKit",
//             url: response.url,
//             details: response
//         });
//         console.log(response);

//     } catch (err) {
//         console.error("ImageKit Upload Error:", err);
//         res.status(500).json({ msg: "Upload failed", error: err });
//     }
// });







app.use(Admin);

const port  =process.env.PORT

app.listen(port,()=>{
    console.log(`Server is running on ${port} port`);
    
})