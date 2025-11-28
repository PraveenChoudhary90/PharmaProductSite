const mongoose = require("mongoose");

const KycCustomerSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
    number: Number,
    ano: Number,
    image: String,
    status: {
        type: String,
        enum: ["pending", "approved", "rejected", "blocked"],
        default: "pending"
    },
    // Single reason (simple)
    reason: { type: String, default: "" },
    
    // Multiple reasons (recommended)
    rejectReasons: { type: [String], default: [] },

    rejectedAt: { type: Date }
});

module.exports = mongoose.model("kyccustomer", KycCustomerSchema);
