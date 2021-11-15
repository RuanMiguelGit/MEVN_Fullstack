const cnpjs = (sequelize, DataTypes) => {
  const cnpjs = sequelize.define("cnpjs", {
    cnpj: DataTypes.STRING,
    companyType: DataTypes.STRING
  });

  cnpjs.associate = (models) => {
    cnpjs.hasMany(models.buyers, { as: "buyers", foreignKey: "cnpjId" });
    cnpjs.hasMany(models.orders, { as: "orders", foreignKey: "cnpjId" });
    cnpjs.hasMany(models.providers, { as: "providers", foreignKey: "cnpjId" });
    cnpjs.hasMany(models.sponsors, { as: "sponsors", foreignKey: "cnpjId" });
  };  
  
  return cnpjs;
};

module.exports = cnpjs;