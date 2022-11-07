const express = require("express");
const router = express.Router();
const {
    addVaccineDescription,
    getAllVaccineDescription,
    getVaccineDescriptionByID,
    updateVaccineDescription,
    deleteVaccineDescription,
} = require("./../controller/VaccineDescription.controller");

router.get("/all", getAllVaccineDescription());
router.post("/", addVaccineDescription());
router.put("/", updateVaccineDescription());
router.delete("/:id", deleteVaccineDescription());
router.get("/:id", getVaccineDescriptionByID());
module.exports = router;