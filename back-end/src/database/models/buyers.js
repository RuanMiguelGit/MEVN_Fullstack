const buyers = (sequelize, DataTypes) => {
  const buyers = sequelize.define("buyers", {
    name: DataTypes.STRING,
    tradingName: DataTypes.STRING,
    cashforceTax: DataTypes.STRING,
    responsibleName: DataTypes.STRING,
    responsibleEmail: DataTypes.STRING,
    responsiblePosition: DataTypes.STRING,
    responsiblePhone: DataTypes.STRING,
    responsibleMobile: DataTypes.STRING,
    website: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.STRING,
    complement: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    situation: DataTypes.STRING,
    situationDate: DataTypes.STRING,
    confirm: DataTypes.BOOLEAN,
    email: DataTypes.STRING
  });  

  buyers.associate = (models) => {
    buyers.hasMany(models.orders, { as: "orders", foreignKey: "buyerId" });
    buyers.belongsTo(models.cnpjs, { as: "cnpj", foreignKey: "cnpjId" });
  };

  return buyers;
};

module.exports = buyers;