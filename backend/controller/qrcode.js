import QrCodeData from "../models/qrCodeData";
const addQrCode = async (req, res) => {
  try {
    const savedData = new QrCodeData(req.body);
    savedData.save();
    res.status(200).json({
      success: true,
      qrCodeData: savedData,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

//get qr code
const getQrCode = async (req, res) => {
  try {
    const qrCodes = await QrCodeData.find({});
    res.status(200).json({
      success: true,
      qrCodeData: qrCodes,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

export { addQrCode, getQrCode };
