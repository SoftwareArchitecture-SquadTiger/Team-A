const projectService = require('../services/projectService');

// Create a new project
exports.createProject = async (req, res) => {
    try {
        const project = await projectService.createProject(req.body);
        res.status(201).json(project);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await projectService.getAllProjects();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a specific project by ID
exports.getProjectById = async (req, res) => {
    try {
        const project = await projectService.getProjectById(req.params.id);
        if (!project) return res.status(404).json({ error: 'Project not found' });
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a project
exports.updateProject = async (req, res) => {
    try {
        const project = await projectService.updateProject(req.params.id, req.body);
        if (!project) return res.status(404).json({ error: 'Project not found' });
        res.status(200).json(project);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a project
exports.deleteProject = async (req, res) => {
    try {
        const project = await projectService.deleteProject(req.params.id);
        if (!project) return res.status(404).json({ error: 'Project not found' });
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};