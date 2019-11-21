exports.up = function(knex) {
    return knex.schema.createTable('sleep', tbl => {
      tbl.increments();

      tbl
        .string('bedTime', 255)
        .defaultTo('12:00')
      tbl
        .string('wakeTime', 255)
        .defaultTo('12:00')
      tbl
        .integer('mood', 255)
        .defaultTo(1)
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('sleep');
  };