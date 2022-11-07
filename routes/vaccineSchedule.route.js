const express = require("express");
const router = express.Router();
const {
    addVaccineSchedule,
    getAllVaccineSchedule,
    getVaccineScheduleByID,
    updateVaccineSchedule,
    deleteVaccineSchedule,
} = require("./../controller/VaccineSchedule.controller");

router.get("/all", getAllVaccineSchedule);
router.post("/", addVaccineSchedule);
router.put("/", updateVaccineSchedule);
router.delete("/:id", deleteVaccineSchedule);
router.get("/:id", getVaccineScheduleByID);
module.exports = router;