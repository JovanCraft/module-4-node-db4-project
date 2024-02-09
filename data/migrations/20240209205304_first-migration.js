/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
        .createTable('Recipes', table => {
        table.increments('recipe_id')
        table.string('recipe_name', 120)
        .unique()
        .notNullable()
        })
        .createTable('Ingredients', table => {
            table.increments('ingredient_id')
            table.string('ingredient_name', 120)
            .unique()
            .notNullable()
            table.string('ingredient_unit', 50)
        })
        .createTable('Instructions', table => {
            table.increments('instruction_id')
            table.string('instruction_text', 256)
            .notNullable()
            table.integer('instruction_order_number')
            .notNullable()
            table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('Recipes')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        })
        .createTable('Instruction_Ingredients', table => {
            table.increments('i_i_id')
            table.float('quantity')
            .notNullable()
            table.integer('instruction_id')
            .unsigned()
            .notNullable()
            .references('instruction_id')
            .inTable('Instructions')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
            table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('Ingredients')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('Instruction_Ingredients')
        .dropTableIfExists('Instructions')
        .dropTableIfExists('Ingredients')
        .dropTableIfExists('Recipes')


};
