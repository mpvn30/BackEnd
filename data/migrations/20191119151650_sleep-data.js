exports.up = function(knex) {
    return knex.schema.createTable('sleep', tbl => {
      tbl.increments();
  
      tbl
        .string('bedTime', 255)
      tbl
        .string('wakeTime', 255)
      tbl
        .number('mood', 255)
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('sleep');
  };
  