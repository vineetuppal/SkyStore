# SkyStore  
**SkyStore** is a Node.js-based file upload and management service that leverages **Cloudinary** for cloud storage and **MongoDB** for metadata storage. It supports uploading images, videos, and local files, with additional features like image compression and file type validation.

---

## 🚀 Features
- **Local File Upload**: Save files locally with a unique timestamp-based naming convention.
- **Cloudinary Integration**: Seamless upload of images and videos to Cloudinary.
- **File Type Validation**: Ensures only supported file formats are uploaded.
- **Image Compression**: Reduces image quality for optimized storage and bandwidth usage.
- **Email Notifications**: Sends email notifications upon successful uploads.
- **Scalable Database**: Stores file metadata in MongoDB.

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Cloud Storage**: Cloudinary
- **Database**: MongoDB
- **Email Service**: Nodemailer
- **File Upload**: express-fileupload
- **Environment Management**: dotenv

---
# 📖 API Endpoints

## **1. Local File Upload**
- **Endpoint**: `POST /api/v1/upload/localFileUpload`
- **Description**: Uploads a file to the local file system.
- **Request**:
  - **Form Data**:
    - `file` (required): The file to be uploaded.
- **Response**:
  ```json
  {
      "success": true,
      "message": "Local file uploaded successfully."
  }
  
## **2. Image Upload**
- **Endpoint**: `POST /api/v1/upload/imageUpload`
- **Description**: Uploads an image to Cloudinary.
- **Request**:
  - **Form Data**:
    - `imageFile` (required): The image file to be uploaded.
    - `name` (required): The name of the file.
    - `tags` (optional): Tags for categorizing the file.
    - `email` (required): The email address to receive upload notifications.
- **Response**:
  ```json
  {
      "success": true,
      "imageUrl": "<cloudinary-url>",
      "message": "Image Successfully Uploaded."
  }

## **3. Video Upload**
- **Endpoint**: `POST /api/v1/upload/videoUpload`
- **Description**: Uploads a video to Cloudinary.
- **Request**:
  - **Form Data**:
    - `videoFile` (required): The video file to be uploaded.
    - `name` (required): The name of the file.
    - `tags` (optional): Tags for categorizing the file.
    - `email` (required): The email address to receive upload notifications.
- **Response**:
  ```json
  {
      "success": true,
      "imageUrl": "<cloudinary-url>",
      "message": "Video Successfully Uploaded."
  }


## **4. Image Reducer Upload**
- **Endpoint**: `POST /api/v1/upload/imageReducerUpload`
- **Description**: Uploads a compressed image to Cloudinary.
- **Request**:
  - **Form Data**:
    - `imageFile` (required): The image file to be uploaded.
    - `name` (required): The name of the file.
    - `tags` (optional): Tags for categorizing the file.
    - `email` (required): The email address to receive upload notifications.
- **Response**:
  ```json
  {
      "success": true,
      "imageUrl": "<cloudinary-url>",
      "message": "Image Successfully Uploaded."
  }


