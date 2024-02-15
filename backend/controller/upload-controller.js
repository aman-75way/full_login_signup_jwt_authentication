import { uploadImage } from "../Cloudinary/cloudinary.js";
import fs from 'fs'

// const unlinkAsync = promisify(fs.unlink);

const uploadHandler = async (req,res,next)=>{
    const url = await uploadImage(req.file.path);
    fs.unlinkSync(req.file.path);
    res.json(req.file);
    console.log("Image url is : " , url);
    // res.send("File uploaded Successfully");
}

export {uploadHandler}