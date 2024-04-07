const order = (req, res) => {
  res.send("List of orders");
};

const orderByID = (req, res) => {
  const userId= req.params.id
  res.send(`User ID: ${userId}`);
};

const addOrder = (req, res) => {
  res.send("Create multiple orders");
};

const addOrderByID = (req, res) => {
  res.send("Create particular order");
};

// const updateProducts = (req, res) => {
//     res.send("update multiple products")
// }

const updateOrderByID = (req, res) => {
  res.send("update particular order");
};

// const deleteProducts = (req, res) => {
//     res.send("delete multiple products")
// }

const deleteOrderByID = (req, res) => {
  res.send("delete particular order");
};

module.exports = {
  order,
  orderByID,
  addOrder,
  addOrderByID,
  updateOrderByID,
  deleteOrderByID,
};
