const router = require('express').Router();
const {
  Recipes,
  Users,
} = require('../models');


// Recipes route
router.get('/recipes', async (req, res) => {
  try {
    // Get all recipes
    const recipeData = await Recipes.findAll();

    // Serialize data so templates can read it
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('recipes', { recipes });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Users route
router.get('/', async (req, res) => {
  try {
    // Get all users examples
    const userData = await Users.findAll();

    // Serialize data so the template can read it
    const users = userData.map((user) => user.get({ plain: true }));

    // Pass serialized data
    res.render('homepage', {
      users,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
