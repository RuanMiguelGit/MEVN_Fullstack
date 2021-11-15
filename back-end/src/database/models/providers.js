const sponsors = (sequelize, DataTypes) => {
  const sponsors = sequelize.define("providers", {
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
    bank: DataTypes.STRING,
    bankAgency: DataTypes.STRING,
    account: DataTypes.STRING,
    documents: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    situation: DataTypes.STRING,
    situationDate: DataTypes.STRING,
    email: DataTypes.STRING
  });

  sponsors.associate = (models) => {
    sponsors.belongsTo(models.cnpjs, { as: "cnpj", foreignKey: "cnpjId"});
    sponsors.hasMany(models.offers, { as: "offers", foreignKey: "sponsorId"});
  }; 

  return sponsors;
};

module.exports = sponsors;