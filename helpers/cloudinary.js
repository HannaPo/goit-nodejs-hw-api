import cloud from "cloudinary/v.2"
const cloudinary = cloud.v2;

const { CLOUDANARY_CLOUD_NAME,
CLOUDINARY_API_KEY,
CLOUDINARY_API_SECRET } = process.env;
cloudinary.config({
    cloudName
})