const projectRepository = require('../repositories/projectRepository');
const categoryRepository = require('../repositories/categoryRepository');

// Validate if the category exists
exports.validateCategory = async (categoryId) => {
    const category = await categoryRepository.getCategoryById(categoryId);
    return !!category; // Return true if category exists, false otherwise
};

// Create a new project
exports.createProject = async (projectData) => {
    return await projectRepository.createProject(projectData);
};

// Get all projects
exports.getAllProjects = async () => {
    return await projectRepository.getAllProjects();
};

// Get a specific project by ID
exports.getProjectById = async (projectId) => {
    return await projectRepository.getProjectById(projectId);
};

// Update a project
exports.updateProject = async (projectId, projectData) => {
    return await projectRepository.updateProject(projectId, projectData);
};

// Delete a project
exports.deleteProject = async (projectId) => {
    return await projectRepository.deleteProject(projectId);
};