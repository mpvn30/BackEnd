exports.up = function(knex) {
    return knex.schema.createTable('sleep', tbl => {
      tbl.increments();
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl
        .string('bedTime', 255)
      tbl
        .string('wakeTime', 255)
      tbl
        .integer('mood', 255)
  
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('sleep');
  };
  