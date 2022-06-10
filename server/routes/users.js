const router = require("express").Router();
const { editUser, deleteUser, getUser } = require("../controllers/users");

//UPDATE
router.put("/:id", editUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id", getUser);

module.exports = router;
