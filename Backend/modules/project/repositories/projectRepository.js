const Project = require('../models/project');

// Create a new project
exports.createProject = async (projectData) => {
    const project = new Project(projectData);
    return await project.save();
};

// Get all projects
exports.getAllProjects = async () => {
    return await Project.find();
};