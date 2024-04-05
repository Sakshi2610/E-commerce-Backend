const user = (req,res) => {
    res.send("List of users")
}

const userByID = (req, res) => {
    res.send("Info of particular user")
}

const createUser = (req, res) => {
    res.send("Create multiple users")
}

const createUserByID = (req, res) => {
    res.send("Create particular user")
}

const updateUsers = (req, res) => {
    res.send("update multiple users")
}

const updateUserByID = (req, res) => {
    res.send("update particular user")
}

const deleteUsers = (req, res) => {
    res.send("delete multiple users")
}

const deleteUserByID = (req, res) => {
    res.send("delete particular users")
}

module.exports = {user, userByID, createUser,createUserByID,updateUsers,updateUserByID,deleteUsers,deleteUserByID}