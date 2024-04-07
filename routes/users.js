let express = require("express");

let router = express.Router();
let {
  user,
  userByID,
  createUser,
  createUserByID,
  updateUsers,
  updateUserByID,
  deleteUsers,
  deleteUserByID,
} = require("../controller/userController");

router.get("/user", user);

router.get("/user/:id", userByID);

router.post("/createUser", createUser);

router.post("/createUser/:id", createUserByID);

router.put("/update", updateUsers);

router.put("/update/:id", updateUserByID);

router.delete("/delete", deleteUsers);

router.delete("/delete/:id", deleteUserByID);
module.exports = router;
