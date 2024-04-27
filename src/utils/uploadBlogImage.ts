import cloudinary from "./cloudinary";

const uploadBlogImages = async (fileToUpload:any): Promise<{ public_id: string; secure_url: string }> => {
    try {
        if (!fileToUpload.path) {
            throw new Error("No file uploaded");
        }
        const result = await cloudinary.uploader.upload(fileToUpload.path); // Upload image to Cloudinary
        return {
            public_id: result.public_id,
            secure_url: result.secure_url,
        };
    } catch (error) {
        console.log(error);
        throw new Error("Image upload failed");
    }
};

export default uploadBlogImages;
