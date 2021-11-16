
const ordersService = require('../service/order');

const findAllOrders = async (_req, res) => {
  const {data, message} = await ordersService.findAllOrders()
  if (message) return res.status(400).json({message:message})
  return res.status(200).json(data)
}


module.exports = {
  findAllOrders
}