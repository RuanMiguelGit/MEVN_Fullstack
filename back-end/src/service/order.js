const { orders, buyers, providers } = require('../database/models');

const findAllOrders = async () => {
    try {
        const data = await orders.findAll({
            include: [
                { model: buyers, as: 'buyer' },
                { model: providers, as: 'provider' },
              ],
    });

        return { data }
    } catch {
        return { message: 'Erro inesperado' }
    }
}


module.exports = {
    findAllOrders
}