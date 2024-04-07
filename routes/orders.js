let express = require("express");

let router = express.Router();
let {
  order,
  orderByID,
  addOrder,
  addOrderByID,
  updateOrderByID,
  deleteOrderByID,
} = require("../controller/orderController");

router.get("/order", order);

router.get("/order/:id", orderByID);

router.post("/createOrder", addOrder);

router.post("/createOrder/:id", addOrderByID);

// router.put("/update", updateUsers)

router.put("/updateOrder/:id", updateOrderByID);

// router.delete("/delete", deleteUsers)

router.delete("/deleteOrder/:id", deleteOrderByID);
module.exports = router;
