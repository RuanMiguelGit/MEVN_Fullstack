const offers = (sequelize, DataTypes) => {
  const offers = sequelize.define("offers", {
    tax: DataTypes.STRING,
    tariff: DataTypes.STRING,
    adValorem: DataTypes.STRING,
    float: DataTypes.STRING,
    iof: DataTypes.STRING,
    expiresIn: DataTypes.DATE,
    paymentStatusSponsor: DataTypes.BOOLEAN,
    paymentStatusProvider: DataTypes.BOOLEAN
  });

  offers.associate = (models) => {
    offers.belongsTo(models.orders, { as: "order", foreignKey: "orderId"});
    offers.belongsTo(models.sponsors, { as: "sponsor", foreignKey: "sponsorId"});
  };

  return offers;
};

module.exports = offers;