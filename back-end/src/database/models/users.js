const users = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    mobile: DataTypes.STRING,
    departament: DataTypes.STRING,
    verificationCode: DataTypes.STRING,
    emailChecked: DataTypes.BOOLEAN,
    cashforceAdm: DataTypes.BOOLEAN
  });

  users.associate = (models) => {
    users.hasMany(models.orders, { as: "orders", foreignKey: "userId"});
  }; 

  return users;
};

module.exports = users;