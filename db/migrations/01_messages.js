exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', table => {
      table.increments();
      table.string('name').notNullable();
      table.string('message', 1000).notNullable();
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('messages')
};
