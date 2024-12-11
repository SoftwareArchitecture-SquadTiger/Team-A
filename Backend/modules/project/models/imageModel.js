const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const imageSchema = new mongoose.Schema({
    image_id: { type: String, default: uuidv4, unique: true },
    project_id: { type: String, required: true }, // Reference to Project
    url: { type: String, required: true },
    format: { type: String, required: true }
});

module.exports = mongoose.model('Image', imageSchema);