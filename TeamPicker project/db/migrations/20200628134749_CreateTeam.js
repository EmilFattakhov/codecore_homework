exports.up = function(knex) {
    return knex.schema.createTable('teams', (table) => {
        table.increments("id").primary();
        table.string('logoUrl');
        table.string('name');
        table.text('members');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable("teams");
};
