const product = (req, res) => {
  res.send("List of products");
};

const productByID = (req, res) => {
  const userId= req.params.id
  res.send(`User ID: ${userId}`);
};

const addProduct = (req, res) => {
  res.status("201").send("Create multiple products");
};

const addProductByID = (req, res) => {
  res.send("Create particular product");
};

// const updateProducts = (req, res) => {
//     res.send("update multiple products")
// }

const updateProductByID = (req, res) => {
  res.send("update particular product");
};

// const deleteProducts = (req, res) => {
//     res.send("delete multiple products")
// }

const deleteProductByID = (req, res) => {
  res.send("delete particular product");
};

module.exports = {
  product,
  productByID,
  addProduct,
  addProductByID,
  updateProductByID,
  deleteProductByID,
};
