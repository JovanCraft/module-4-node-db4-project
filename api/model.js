const db = require('../data/db-config')// eslint-disable-line

function getRecipeById(recipe_id){// eslint-disable-line
    return Promise.resolve(`YUMMY RECIPE NUMBER ${recipe_id}!!!`)
}



module.exports = { getRecipeById }
