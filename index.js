const express = require("express");
let user = require("./routes/users");
let product = require("./routes/products");
let review = require("./routes/review");
let order = require("./routes/orders");
const PORT = 8000;

let app = express();
app.use(user);
app.use(product);
app.use(review);
app.use(order);

app.listen(PORT, () => {
  console.log("Server is running " + `${PORT}`);
});
