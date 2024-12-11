const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Create a new project
router.post('/', projectController.createProject);

// Get all projects
router.get('/', projectController.getAllProjects);

// Get a specific project
router.get('/:id', projectController.getProjectById);

// Update a project
router.put('/:id', projectController.updateProject);

// Delete a project
router.delete('/:id', projectController.deleteProject);

// Get all projects by category
router.get('/category/:id', projectController.getProjectsByCategory);

// Get all projects by charity
router.get('/charity/:id', projectController.getProjectsByCharity);

// Get all projects by greater or equal to target amount
router.get('/target-amount/gte/:amount', projectController.getProjectsByTargetAmountGte);

// Get all projects by lesser or equal to target amount
router.get('/target-amount/lte/:amount', projectController.getProjectsByTargetAmountLte);

// Sort all projects by target amount in ascending order
router.get('/target-amount/asc', projectController.sortProjectsByTargetAmountAsc);

// Sort all projects by target amount in descending order
router.get('/target-amount/desc', projectController.sortProjectsByTargetAmountDesc);

// Get all projects by greater or equal to current amount
router.get('/current-amount/gte/:amount', projectController.getProjectsByCurrentAmountGte);

// Get all projects by lesser or equal to current amount
router.get('/current-amount/lte/:amount', projectController.getProjectsByCurrentAmountLte);

// Sort all projects by current amount in ascending order
router.get('/current-amount/asc', projectController.sortProjectsByCurrentAmountAsc);

// Sort all projects by current amount in descending order
router.get('/current-amount/desc', projectController.sortProjectsByCurrentAmountDesc);

// Get all projects by status
router.get('/status/:status', projectController.getProjectsByStatus);

// Get all projects by date range
router.get('/from/:startDate/to/:endDate', projectController.filterProjectsByDate);

// Get all projects by country
router.get('/country/:country', projectController.getProjectsByCountry);

// Get all projects by region
router.get('/region/:region', projectController.getProjectsByRegion);

module.exports = router;