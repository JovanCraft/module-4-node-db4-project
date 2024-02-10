const db = require('../data/db-config')

async function getRecipeById(recipe_id){
    const rows = await db('Recipes as r')
    .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
    .select('r.recipe_id')
    .where('r.recipe_id', recipe_id)



    return rows
}



module.exports = { getRecipeById }
