const Video = require('../models/videoModel');

// Create a new video
exports.createVideo = async (videoData) => {
    const video = new Video(videoData);
    return await video.save();
};

// Get all videos
exports.getAllVideos = async () => {
    return await Video.find();
};

// Get a video by ID
exports.getVideoById = async (videoId) => {
    return await Video.findById(videoId);
};

// Update a video
exports.updateVideo = async (videoId, videoData) => {
    return await Video.findByIdAndUpdate(videoId, videoData, { new: true });
};

// Delete a video
exports.deleteVideo = async (videoId) => {
    return await Video.findByIdAndDelete(videoId);
};