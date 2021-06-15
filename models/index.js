const { Sequelize } = require("sequelize");
const database = require("../database/index");

// sequelize
let db = {};

let models = [require("./actor")];

for (model of models) {
  db[model.name] = model;
}

// Apply associations
Object.keys(db).forEach((key) => {
  if ("associate" in db[key]) {
    db[key].associate(db);
  }
});

db.sequelize = database;
db.Sequelize = Sequelize;

module.exports = db;
