const db = require('../data/db-config')

async function getRecipeById(recipe_id){
    const rows = await db('Recipes as r')
    .where('recipe_id', recipe_id)



    return rows
}



module.exports = { getRecipeById }
