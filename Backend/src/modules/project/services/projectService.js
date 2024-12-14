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

// Get all projects by category
exports.getProjectsByCategory = async (categoryId) => {
    return await projectRepository.getProjectsByCategory(categoryId);
};

// Get all projects by charity
exports.getProjectsByCharity = async (charityId) => {
    return await projectRepository.getProjectsByCharity(charityId);
};

// Get all projects by greater or equal to target amount
exports.getProjectsByTargetAmountGte = async (amount) => {
    return await projectRepository.getProjectsByTargetAmountGte(amount);
};

// Get all projects by lesser or equal to target amount
exports.getProjectsByTargetAmountLte = async (amount) => {
    return await projectRepository.getProjectsByTargetAmountLte(amount);
};

// Sorts all projects by target amount in ascending order
exports.sortProjectsByTargetAmountAsc = async () => {
    return await projectRepository.sortProjectsByTargetAmountAsc();
};

// Sorts all projects by target amount in descending order
exports.sortProjectsByTargetAmountDesc = async () => {
    return await projectRepository.sortProjectsByTargetAmountDesc();
};

// Get all projects by greater or equal to current amount
exports.getProjectsByCurrentAmountGte = async (amount) => {
    return await projectRepository.getProjectsByCurrentAmountGte(amount);
};

// Get all projects by lesser or equal to current amount
exports.getProjectsByCurrentAmountLte = async (amount) => {
    return await projectRepository.getProjectsByCurrentAmountLte(amount);
};

// Sorts all projects by current amount in ascending order
exports.sortProjectsByCurrentAmountAsc = async () => {
    return await projectRepository.sortProjectsByCurrentAmountAsc();
};

// Sorts all projects by current amount in descending order
exports.sortProjectsByCurrentAmountDesc = async () => {
    return await projectRepository.sortProjectsByCurrentAmountDesc();
};

// Get all projects by status
exports.getProjectsByStatus = async (status) => {
    return await projectRepository.getProjectsByStatus(status);
};

// Filter by start_date and end_date
exports.filterProjectsByDate = async (startDate, endDate) => {
    return await projectRepository.filterProjectsByDate(startDate, endDate);
};

// Get all projects by country
exports.getProjectsByCountry = async (country) => {
    return await projectRepository.getProjectsByCountry(country);
};

// Get all projects by region
exports.getProjectsByRegion = async (region) => {
    return await projectRepository.getProjectsByRegion(region);
};