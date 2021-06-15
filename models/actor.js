const { Sequelize } = require("sequelize");
const database = require("../database/index");

module.exports = database.define(
  "actor",
  {
    actorId: {
      type: Sequelize.STRING,
      field: "actor_id",
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING,
      field: "first_name",
    },
    lastName: {
      type: Sequelize.STRING,
      field: "last_name",
    },
    initials: {
      type: Sequelize.STRING,
      field: "initials",
    },
  },
  {
    tableName: "actor",
    timestamps: false,
  }
);

// Post.hasMany(Reaction);
// Reaction.belongsTo(Post);