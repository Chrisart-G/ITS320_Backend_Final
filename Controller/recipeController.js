import Recipe from '../Model/recipe.js';

// @desc    Create a new recipe (draft or published)
// @route   POST /api/recipes
// @access  Public
export const createRecipe = async (req, res) => {
  try {
    const recipeData = req.body;
    const recipe = new Recipe(recipeData);

    const savedRecipe = await recipe.save();

    res.status(201).json({
      success: true,
      message: `Recipe ${savedRecipe.status === 'published' ? 'published' : 'saved as draft'} successfully!`,
      data: savedRecipe
    });
  } catch (error) {
    console.error('Create recipe error:', error);
    res.status(400).json({
      success: false,
      message: 'Error creating recipe',
      error: error.message
    });
  }
};

// @desc    Get all recipes
// @route   GET /api/recipes
// @access  Public
export const getAllRecipes = async (req, res) => {
  try {
    const { status, category, author } = req.query;
    let filter = {};

    if (status) filter.status = status;
    if (category) filter.category = category;
    if (author) filter.author = new RegExp(author, 'i');

    const recipes = await Recipe.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: recipes.length,
      data: recipes
    });
  } catch (error) {
    console.error('Get all recipes error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching recipes',
      error: error.message
    });
  }
};

// @desc    Get a single recipe by ID
// @route   GET /api/recipes/:id
// @access  Public
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        success: false,
        message: 'Recipe not found'
      });
    }

    res.status(200).json({
      success: true,
      data: recipe
    });
  } catch (error) {
    console.error('Get recipe by ID error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching recipe',
      error: error.message
    });
  }
};

// @desc    Update a recipe
// @route   PUT /api/recipes/:id
// @access  Public
export const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!recipe) {
      return res.status(404).json({
        success: false,
        message: 'Recipe not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Recipe updated successfully',
      data: recipe
    });
  } catch (error) {
    console.error('Update recipe error:', error);
    res.status(400).json({
      success: false,
      message: 'Error updating recipe',
      error: error.message
    });
  }
};

// @desc    Delete a recipe
// @route   DELETE /api/recipes/:id
// @access  Public
export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        success: false,
        message: 'Recipe not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Recipe deleted successfully'
    });
  } catch (error) {
    console.error('Delete recipe error:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting recipe',
      error: error.message
    });
  }
};

// @desc    Save recipe as draft
// @route   POST /api/recipes/draft
// @access  Public
export const saveAsDraft = async (req, res) => {
  try {
    const recipeData = { ...req.body, status: 'draft' };
    const recipe = new Recipe(recipeData);

    const savedRecipe = await recipe.save();

    res.status(201).json({
      success: true,
      message: 'Recipe saved as draft successfully!',
      data: savedRecipe
    });
  } catch (error) {
    console.error('Save draft error:', error);
    res.status(400).json({
      success: false,
      message: 'Error saving recipe as draft',
      error: error.message
    });
  }
};

// @desc    Publish recipe
// @route   POST /api/recipes/publish
// @access  Public
export const publishRecipe = async (req, res) => {
  try {
    const recipeData = { ...req.body, status: 'published' };
    const recipe = new Recipe(recipeData);

    const savedRecipe = await recipe.save();

    res.status(201).json({
      success: true,
      message: 'Recipe published successfully!',
      data: savedRecipe
    });
  } catch (error) {
    console.error('Publish recipe error:', error);
    res.status(400).json({
      success: false,
      message: 'Error publishing recipe',
      error: error.message
    });
  }
};
