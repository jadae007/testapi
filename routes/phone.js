const express = require('express');
const router = express.Router();
const phoneController = require("../controllers/phoneController");
/* GET users listing. */
router.get("/",phoneController.index)
router.post("/",phoneController.create)
router.get("/:id",phoneController.show)
router.patch("/:id",phoneController.update)
router.delete("/:id",phoneController.destroy)


module.exports = router;
