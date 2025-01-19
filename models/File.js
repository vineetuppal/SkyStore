const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const fileSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    imageUrl:{
        type: String,
    },
    tags:{
        type: String,
    },
    email:{
        type: String,
    }
});

fileSchema.post("save", async function(doc){
    try{
        console.log("DOC:-",doc);

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        let info = transporter.sendMail({
            from: `From Vineet`,
            to: doc.email,
            subject: "New File Uploaded on Cloudinary.",
            html: `<h2>Hello</h2> <p>File Uploaded. View here: <a href= "${doc.imageUrl}">${doc.imageUrl}</a></a></p>`,
        })
        console.log("Info:-",info);
    }
    catch(err){
        console.error(err);
    }
})

const File = mongoose.model("File", fileSchema);
module.exports = File;