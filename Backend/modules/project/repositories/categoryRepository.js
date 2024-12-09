const Category = require('../models/categoryModel');

// Create a new category
exports.createCategory = async (categoryData) => {
    const category = new Category(categoryData);
    return await category.save();
};

// Get all categories
exports.getAllCategories = async () => {
    return await Category.find();
};

// Get a category by ID
exports.getCategoryById = async (categoryId) => {
    return await Category.findById(categoryId);
};

// Update a category
exports.updateCategory = async (categoryId, categoryData) => {
    return await Category.findByIdAndUpdate(categoryId, categoryData, { new: true });
};

// Delete a category
exports.deleteCategory = async (categoryId) => {
    return await Category.findByIdAndDelete(categoryId);
};