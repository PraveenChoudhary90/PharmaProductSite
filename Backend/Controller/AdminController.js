const AdminModel = require("../Model/AdminModel")
const jwt = require("jsonwebtoken");




const AdminInsert = async(req,res)=>{
const {name,email,password} =req.body;
const Admin = await AdminModel.create({
    name:name,
    email:email,
    password:password
})
await Admin.save();
console.log(Admin);
res.send({msg:"Admin Insertrd Successfully"})
}

const AdminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await AdminModel.findOne({ email });
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        // match password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        // create JWT token
        const token = jwt.sign(
            { id: admin._id, email: admin.email },
            "SECRET_KEY_123",          // Isse .env me rakhna best hoga
            { expiresIn: "2h" }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            admin
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};






module.exports = {
    AdminInsert,
    AdminLogin
}