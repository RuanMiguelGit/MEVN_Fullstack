const orderportions = (sequelize, DataTypes) => {
  const orderportions = sequelize.define("orderportions", {
    nDup: DataTypes.STRING,
    dVenc: DataTypes.STRING,
    vDup: DataTypes.STRING,
    availableToMarket: DataTypes.BOOLEAN
  });

  orderportions.associate = (models) => {
    orderportions.belongsTo(models.orders, { as: "order", foreignKey: "orderId"});
  };

  return orderportions;
};

module.exports = orderportions;