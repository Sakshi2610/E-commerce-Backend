let express = require("express");

let router = express.Router();
let {
  product,
  productByID,
  addProduct,
  addProductByID,
  updateProducts,
  updateProductByID,
  deleteProducts,
  deleteProductByID,
} = require("../controller/productController");

router.get("/product", product);

router.get("/product/:id", productByID);

router.post("/addProduct", addProduct);

router.post("/addProduct/:id", addProductByID);

// router.put("/update", updateProducts)

router.put("/update/:id", updateProductByID);

// router.delete("/delete", deleteProducts)

router.delete("/delete/:id", deleteProductByID);
module.exports = router;
