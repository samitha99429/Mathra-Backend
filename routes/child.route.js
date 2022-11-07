const express = require("express");
const router = express.Router();
const {
    addChild,
    updateChild,
    deleteChild,
    getChildByID,
    getAllChild
} = require("./../controller/Child.Controller");


router.get("/all", getAllChild);
router.post("/", addChild);
router.put("/", updateChild);
router.delete("/:id", deleteChild);
router.get("/:id", getChildByID);
module.exports = router;