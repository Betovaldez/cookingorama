const Users = require('./Users');
const Recipes = require('./Recipes');


// // Users hasMany Recipes
Users.hasMany(Recipes, {
    foreignKey: 'recipe_id',
})

Recipes.belongsTo(Users, {
    foreignKey: 'users_id'
})


module.exports = { Users, Recipes };
