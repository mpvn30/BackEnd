
const db = require('../data/dbConfig.js');


module.exports = {
    add,
    find,
    findBy,
    findById,
    remove,
    update,
    findPropertiesByUserId
};

function find() {
    return db('sleep').select('id', 'bedTime', 'wakeTime', 'mood');
}

function findBy(filter) {
    return db('sleep').where(filter);
};
function add(property) {
    return db('sleep')
        .insert(property, 'id');
}
function findById(id) {
    return db('sleep')
        .where({ id })
        .first();
};

async function findPropertiesByUserId(id) {
    const properties = await db('sleep').where({ user_id: id });
    console.log(properties)
    return properties;
}
function remove(id) {
    return db('sleep')
        .where({ id })
        .first()
        .delete();
};

function update(id, sleep) {
    return db('sleep')
        .where({ id })
        .update(sleep);
}