const Project = require('../models/projectModel');

// Create a new project
exports.createProject = async (projectData) => {
    const project = new Project(projectData);
    return await project.save();
};

// Get all projects
exports.getAllProjects = async () => {
    return await Project.find();
};

// Get a specific project by ID
exports.getProjectById = async (projectId) => {
    return await Project.findOne({ project_id: projectId });
};

// Update a project
exports.updateProject = async (projectId, projectData) => {
    return await Project.findByIdAndUpdate(projectId, projectData, { new: true });
};

// Delete a project
exports.deleteProject = async (projectId) => {
    return await Project.findByIdAndDelete(projectId);
};