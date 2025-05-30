import express from 'express';
import {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
  saveAsDraft,
  publishRecipe
} from '../Controller/recipeController.js'; // Note the .js extension for ESM compatibility

const router = express.Router();

// @route   POST /api/recipes
// @desc    Create a new recipe
// @access  Public
router.post('/create', createRecipe);

// @route   GET /api/recipes
// @desc    Get all recipes
// @access  Public
router.get('/getrecipe', getAllRecipes);

// @route   GET /api/recipes/:id
// @desc    Get recipe by ID
// @access  Public
router.get('/:id', getRecipeById);

// @route   PUT /api/recipes/:id
// @desc    Update recipe
// @access  Public
router.put('/:id', updateRecipe);

// @route   DELETE /api/recipes/:id
// @desc    Delete recipe
// @access  Public
router.delete('/:id', deleteRecipe);

// @route   POST /api/recipes/draft
// @desc    Save recipe as draft
// @access  Public
router.post('/draft', saveAsDraft);

// @route   POST /api/recipes/publish
// @desc    Publish recipe
// @access  Public
router.post('/publish', publishRecipe);

export default router;
