const express = require("express");
const controller = require("./controllers/controller");

const router = express.Router();

router.get('/', controller.getAllUsers);
router.post('/add-user', controller.addUser);
router.get('/get-user', controller.getUserById);
router.post('/get-user', controller.getUserByName);
router.delete('/delete-user', controller.deleteUser);
router.put('/update-user', controller.updateUserById);

module.exports = router;
