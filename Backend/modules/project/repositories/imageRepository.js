const Image = require('../models/imageModel');

// Create a new image
exports.createImage = async (imageData) => {
    const image = new Image(imageData);
    return await image.save();
};

// Get all images
exports.getAllImages = async () => {
    return await Image.find();
};

// Get a image by ID
exports.getImageById = async (imageId) => {
    return await Image.findById(imageId);
};

// Update a image
exports.updateImage = async (imageId, imageData) => {
    return await Image.findByIdAndUpdate(imageId, imageData, { new: true });
};

// Delete a image
exports.deleteImage = async (imageId) => {
    return await Image.findByIdAndDelete(imageId);
};

// Get all images by project ID
exports.getImagesByProjectId = async (projectId) => {
    return await Image.find({ project_id: projectId });
};