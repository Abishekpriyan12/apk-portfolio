// ===== src/utils/cloudinary.js =====
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(imageToUpload) {
  try {
    // imageToUpload could be a local file path or a base64 string
    const result = await cloudinary.uploader.upload(imageToUpload, {
      folder: 'apk-portfolio', // optional folder in your Cloudinary account
    });
    return result.secure_url; // return the hosted image URL
  } catch (error) {
    console.error('Cloudinary Upload Error:', error);
    return '';
  }
}
