const mongoose  =require("mongoose");

const attributeValueSchema = new mongoose.Schema({
  attributeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Attribute",
    required: true
  },
  subname: {
    type: String,
    required: true
  }
});

module.exports =  mongoose.model("AttributeValue", attributeValueSchema);
