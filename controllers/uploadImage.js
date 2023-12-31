import ImageSchema from "../models/fileUpload.js";

const UploadImage = async (req, res) => {
  const imageUploaded = new ImageSchema({
    image: req.file.path,
  });

  try {
    await imageUploaded.save();
  } catch (error) {
    return res.status(400).json({
      message: `image upload failed, check to see the ${error}`,
      status: "error",
    });
  }
};
export default UploadImage