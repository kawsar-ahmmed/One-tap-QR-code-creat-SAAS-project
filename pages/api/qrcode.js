import nc from "next-connect";
import { addQrCode, getQrCode } from "../../backend/controller/qrcode";
import dbConnect from "../../utilites/db";

const handler = nc();
dbConnect();

handler.post(addQrCode);
handler.get(getQrCode);

export default handler;
