// Model/Recipe.js
import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema({
  quantity: {
    type: String,
    required: true
  },
  unit: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  group: {
    type: String,
    default: ''
  }
});

const instructionSchema = new mongoose.Schema({
  step: {
    type: Number,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  }
});

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    maxlength: 500
  },
  category: {
    type: String,
    required: true,
    enum: ['appetizer', 'main-course', 'dessert', 'beverage', 'snack', 'breakfast']
  },
  tags: [{
    type: String
  }],
  ingredients: [ingredientSchema],
  instructions: [instructionSchema],
  prepTime: {
    type: Number,
    required: true,
    min: 0
  },
  cookTime: {
    type: Number,
    required: true,
    min: 0
  },
  servings: {
    type: Number,
    required: true,
    min: 1
  },
  author: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  }
}, {
  timestamps: true
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
