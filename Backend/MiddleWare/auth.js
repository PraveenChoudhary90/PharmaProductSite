const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const header = req.headers.authorization;

    if (!header) {
        return res.status(401).json({ message: "Token Missing" });
    }

    const token = header.split(" ")[1];

    try {
        const verify = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = verify; // admin data store
        next();
    } catch (err) {
        return res.status(400).json({ message: "Invalid Token" });
    }
};
