const express = require("express");
const router = express.Router();
const {
    addHealth,
    getAllHealth,
    getHealthByID,
    updateHealth,
    deleteHealth,
} = require("./../controller/Health.controller");


router.get("/all", getAllHealth);
router.post("/", addHealth);
router.put("/", updateHealth);
router.delete("/:id", deleteHealth);
router.get("/:id", getHealthByID);
module.exports = router;