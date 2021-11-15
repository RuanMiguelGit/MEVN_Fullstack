const orders = (sequelize, DataTypes) => {
  const orders = sequelize.define("orders", {
    orderNfId: DataTypes.STRING,
    orderNumber: DataTypes.STRING,
    orderPath: DataTypes.STRING,
    orderFileName: DataTypes.STRING,
    orderOriginalName: DataTypes.STRING,
    emissionDate: DataTypes.STRING,
    pdfFile: DataTypes.STRING,
    emitedTo: DataTypes.STRING,
    nNf: DataTypes.STRING,
    CTE: DataTypes.STRING,
    value: DataTypes.STRING,
    orderStatusBuyer: DataTypes.STRING,
    orderStatusProvider: DataTypes.STRING,
    deliveryReceipt: DataTypes.STRING,
    cargoPackingList: DataTypes.STRING,
    deliveryCtrc: DataTypes.STRING
  });

  orders.associate = (models) => {
    orders.belongsTo(models.buyers, { as: "buyer", foreignKey: "buyerId"});
    orders.belongsTo(models.cnpjs, { as: "cnpj", foreignKey: "cnpjId"});
    orders.hasMany(models.offers, { as: "offers", foreignKey: "orderId"});
    orders.hasMany(models.orderportions, { as: "orderportions", foreignKey: "orderId"});
    orders.belongsTo(models.providers, { as: "provider", foreignKey: "providerId"});
    orders.belongsTo(models.users, { as: "user", foreignKey: "userId"});
  }; 

  return orders;
};

module.exports = orders;