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
    return await Project.findById(projectId);
};

// Update a project
exports.updateProject = async (projectId, projectData) => {
    return await Project.findByIdAndUpdate(projectId, projectData, { new: true });
};

// Delete a project
exports.deleteProject = async (projectId) => {
    return await Project.findByIdAndDelete(projectId);
};

// Get all projects by category
exports.getProjectsByCategory = async (categoryId) => {
    return await Project.find({ category_id: categoryId });
};

// Get all projects by charity
exports.getProjectsByCharity = async (charityId) => {
    return await Project.find({ charity_id: charityId });
};

// Get all projects by greater or equal to target amount 
exports.getProjectsByTargetAmountGte = async (amount) => {
    return await Project.find({ target_amount: { $gte: amount } });
};

// Get all projects by lesser or equal to target amount
exports.getProjectsByTargetAmountLte = async (amount) => {
    return await Project.find({ target_amount: { $lte: amount } });
};

// Sorts all projects by target amount in ascending order
exports.sortProjectsByTargetAmountAsc = async () => {
    return await Project.find().sort({ target_amount: 1 });
};

// Sorts all projects by target amount in descending order
exports.sortProjectsByTargetAmountDesc = async () => {
    return await Project.find().sort({ target_amount: -1 });
};

// Get all projects by greater or equal to current amount
exports.getProjectsByCurrentAmountGte = async (amount) => {
    return await Project.find({ current_amount: { $gte: amount } });
};

// Get all projects by lesser or equal to current amount
exports.getProjectsByCurrentAmountLte = async (amount) => {
    return await Project.find({ current_amount: { $lte: amount } });
};

// Sorts all projects by current amount in ascending order
exports.sortProjectsByCurrentAmountAsc = async () => {
    return await Project.find().sort({ current_amount: 1 });
};

// Sorts all projects by current amount in descending order
exports.sortProjectsByCurrentAmountDesc = async () => {
    return await Project.find().sort({ current_amount: -1 });
};

// Get all projects by status
exports.getProjectsByStatus = async (status) => {
    return await Project.find({ status: status });
}

// Filter by start_date and end_date
exports.filterProjectsByDate = async (startDate, endDate) => {
    return await Project.find({ start_date: { $gte: startDate }, end_date: { $lte: endDate } });
};

// Get projects by country
exports.getProjectsByCountry = async (country) => {
    return await Project.find({ country: country });
}

// Get projects by region
exports.getProjectsByRegion = async (region) => {
    return await Project.find({ region: region });
}