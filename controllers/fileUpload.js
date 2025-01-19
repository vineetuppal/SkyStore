const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

exports.localFileUpload = async (req, res) => {
    try{
        const file = req.files.file;
        console.log("File:- ", file);

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH:- ", path);

        file.mv(path, (err) =>{
            console.log(err);
        });

        res.json({
            success: true,
            message: "Local file uploaded successfully.",
        });
    }
    catch(err){
        console.log(err);
    }
}

function isFileTypeSupported(type, supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality){
    const options = {folder};

    if(quality){
        options.quality = quality;
    }

    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.imageUpload = async (req, res) =>{
    try{
        const {name, tags, email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile;
        console.log(file);

        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        
        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success: false,
                message: "File format not supported",
            })
        }
        
        const response = await uploadFileToCloudinary(file, "Vineet");
        console.log(response);
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image Successfully Uploaded.",
        })
    }
    catch(err){
        console.error(err);
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        })
    }
}

exports.videoUpload = async (req,res) =>{
    try{
        const {name, tags, email} = req.body;
        console.log(name,tags,email);

        const file = req.files.videoFile;
        const supportedTypes = ["mp4", "mov"];
        const fileType = file.name.split('.')[1].toLowerCase();
        
        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success: false,
                message: "File format not supported",
            })
        }

        const response = await uploadFileToCloudinary(file, "Vineet");
        console.log(response);

        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Video Successfully Uploaded.",
        })
    }
    catch(err){
        console.error(err);
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        })
    }
}

exports.imageReducerUpload = async (req,res) =>{
    try{
        const {name, tags, email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile;
        console.log(file);

        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        
        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success: false,
                message: "File format not supported",
            })
        }
        
        const response = await uploadFileToCloudinary(file, "Vineet" , 30);
        console.log(response);
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image Successfully Uploaded.",
        })
    }
    catch(err){
        console.error(err);
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        })
    }
}