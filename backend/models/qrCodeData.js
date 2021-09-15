const mongoose = require("mongoose");

const qrCodeDataSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  imgUrl: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "#171717",
  },
  dotStyle: {
    type: String,
    default: "classy",
  },
  corderDotStyle: {
    type: String,
    default: "square",
  },
});

module.exports =
  mongoose.models.QrCodeData || mongoose.model("QrCodeData", qrCodeDataSchema);
