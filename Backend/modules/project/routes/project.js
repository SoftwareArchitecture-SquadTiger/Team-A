const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController'); // Ensure the correct path

// Define routes
router.post('/', projectController.createProject); // Create a new project
router.get('/', projectController.getAllProjects); // Get all projects
router.get('/:id', projectController.getProjectById); // Get a specific project
router.put('/:id', projectController.updateProject); // Update a project
router.delete('/:id', projectController.deleteProject); // Delete a project

module.exports = router;