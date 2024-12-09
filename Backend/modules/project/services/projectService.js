const projectRepository = require('../repositories/projectRepository');

// Create a new project
exports.createProject = async (projectData) => {
    return await projectRepository.createProject(projectData);
};

// Get all projects
exports.getAllProjects = async () => {
    return await projectRepository.getAllProjects();
};