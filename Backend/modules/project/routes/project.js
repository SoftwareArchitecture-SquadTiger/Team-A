const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController'); // Ensure the correct path

// Define routes
router.post('/', projectController.createProject); // Create a new project
router.get('/', projectController.getAllProjects); // Get all projects
router.get('/:id', projectController.getProjectById); // Get a specific project
router.put('/:id', projectController.updateProject); // Update a project
router.delete('/:id', projectController.deleteProject); // Delete a project
router.get('/category/:id', projectController.getProjectsByCategory); // Get all projects by category
router.get('/charity/:id', projectController.getProjectsByCharity); // Get all projects by charity
router.get('/target-amount/gte/:amount', projectController.getProjectsByTargetAmountGte); // Get all projects by greater or equal to target amount
router.get('/target-amount/lte/:amount', projectController.getProjectsByTargetAmountLte); // Get all projects by lesser or equal to target amount
router.get('/target-amount/asc', projectController.sortProjectsByTargetAmountAsc); // Sort all projects by target amount in ascending order
router.get('/target-amount/desc', projectController.sortProjectsByTargetAmountDesc); // Sort all projects by target amount in descending order
router.get('/current-amount/gte/:amount', projectController.getProjectsByCurrentAmountGte); // Get all projects by greater or equal to current amount
router.get('/current-amount/lte/:amount', projectController.getProjectsByCurrentAmountLte); // Get all projects by lesser or equal to current amount
router.get('/current-amount/asc', projectController.sortProjectsByCurrentAmountAsc); // Sort all projects by current amount in ascending order
router.get('/current-amount/desc', projectController.sortProjectsByCurrentAmountDesc); // Sort all projects by current amount in descending order
router.get('/status/:status', projectController.getProjectsByStatus); // Get all projects by status
router.get('/from/:startDate/to/:endDate', projectController.filterProjectsByDate); // Get all projects by date range
router.get('/country/:country', projectController.getProjectsByCountry); // Get all projects by country
router.get('/region/:region', projectController.getProjectsByRegion); // Get all projects by region

module.exports = router;