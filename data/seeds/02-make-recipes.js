const recipes = [
    { recipe_name: 'Broccoli Pesto Pasta' },
    { recipe_name: 'Lemon Chicken'},
    { recipe_name: 'Salmon en Papillote' },
]

const ingredients = [
    { ingredient_name: 'Broccoli', ingredient_unit: 'lbs' },
    { ingredient_name: 'Pesto', ingredient_unit: 'lbs' },
    { ingredient_name: 'Pasta', ingredient_unit: 'lbs' },
    { ingredient_name: 'Lemon', ingredient_unit: 'slices' },
    { ingredient_name: 'Chicken', ingredient_unit: 'kilos' },
    { ingredient_name: 'Salmon', ingredient_unit: 'grams' },
]

const instruction_ingredients = [
    //Broccoli Pesto Pasta
    { instruction_id: 2, ingredient_id: 1, quantity: 1 },
    { instruction_id: 3, ingredient_id: 2, quantity: 1.5 },
    { instruction_id: 3, ingredient_id: 3, quantity: 2 },
    //Lemon Chicken
    { instruction_id: 5, ingredient_id: 4, quantity: 1 },
    { instruction_id: 5, ingredient_id: 5, quantity: 0.4 },
    //Salmon en Papillote
    { instruction_id: 7, ingredient_id: 6, quantity: 1 },
]

const instructions = [
    //Broccoli Pesto Pasta
    { instruction_text: 'Heat pan', instruction_order_number: 1, recipe_id: 1 },
    { instruction_text: 'Add broccoli', instruction_order_number: 2, recipe_id: 1 },
    { instruction_text: 'Add pesto mixed with pasta', instruction_order_number: 3, recipe_id: 1 },
    //Lemon Chicken
    { instruction_text: 'Heat oven', instruction_order_number: 1, recipe_id: 2 },
    { instruction_text: 'Put chicken and lemon in oven', instruction_order_number: 2, recipe_id: 2 },
    { instruction_text: 'Put in oven at 500 degrees', instruction_order_number: 3, recipe_id: 2 },
    //Salmon en Papillote
    { instruction_text: 'Fish a salmon in the Bidasoa river', instruction_order_number: 1, recipe_id: 3 },
    { instruction_text: 'Cook salmon', instruction_order_number: 2, recipe_id: 3 },
]

exports.seed = function (knex) {

}
