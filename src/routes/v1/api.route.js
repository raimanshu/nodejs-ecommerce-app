
const express = require('express');

const userController = require('../../controllers/user.controller');
// const handleRequestBody  = require('../../middlewares/handleRequestBody.middleware');


const router = express.Router();

router.route("/fetch/:userId").get(userController.getUser);
router.route("/fetch_all").get(userController.getAllUsers);
router.route("/create").post( userController.createUser);
router.route("/update/:userId").put(userController.updateUser);
router.route("/delete/:userId").delete(userController.deleteUser);
router.route("/total").get(userController.getTotalUsers);
router.route("/get_limited_records").get(userController.getLimitedUsers);
router.route("/get_filtered_records").get(userController.getFilteredUsers);


module.exports = router;