const express = require("express");
const router = express.Router();
const {
    addBranch, getAllBranch, getBranchByID, updateBranch, deleteBranch,
} = require("./../controller/Branch.Controller");

router.get("/all", getAllBranch);
router.post("/", addBranch);
router.put("/", updateBranch);
router.delete("/:id", deleteBranch);
router.get("/:id", getBranchByID);
module.exports = router;