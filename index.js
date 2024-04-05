const express = require('express')
let user = require("./routes/users")
const PORT = 8000

let app = express()
app.use(user)

app.listen(PORT, () => {
    console.log("Server is running " + `${PORT}`);
})