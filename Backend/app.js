const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./database/connection');
const projectRoutes = require('./modules/project/routes/project'); // Ensure the correct path

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.get('/', (req, res) => {
    res.send('Backend is running');
});

// Project routes
app.use('/api/projects', projectRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));