const AdminModel = require("../Model/AdminModel");
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// Admin Insert
const AdminInsert = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = await AdminModel.create({
            name,
            email,
            password: hashedPassword
        });

        res.json({ msg: "Admin Inserted Successfully", admin });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Admin Login + Token Create
const AdminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await AdminModel.findOne({ email });
        if (!admin) return res.status(404).json({ message: "Admin not found" });

        // const isMatch = await bcrypt.compare(password, admin.password);
        // if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

        // Token Create
        const token = jwt.sign(
            { id: admin._id, email: admin.email },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );

        res.json({
            message: "Login successful",
            token,
            admin
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Admin Profile (Token Verify ke baad)
const AuthAdmin = async (req, res) => {
    const admin = await AdminModel.findById(req.admin.id).select("-password");
      res.json({
            msg: "Token verified successfully! Admin authentication complete.",
            admin: admin
        });
};


module.exports = {
    AdminInsert,
    AdminLogin,
    AuthAdmin
};
