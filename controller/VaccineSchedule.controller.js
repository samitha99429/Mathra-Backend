const VaccineScheduleModal = require('./../models/VaccineSchedule.model');

//addVaccineSchedule function
const addVaccineSchedule = (req, res) => {
    const {vaccineID, vaccineName, vaccineDate, vaccineTime} = req.body;

    const mongooseRes = new VaccineScheduleModal({
        vaccineID, vaccineName, vaccineDate, vaccineTime
    });

    mongooseRes.save().then((result) => {
        res
            .status(200)
            .json({
                message: 'VaccineSchedule added successfully',
                result: {
                    data: result,
                    response: true,
                },
            })
            .catch((err) => {
                console.log('err', err);
                res.status(400).json(err);
            });
    });
};

//getAll VaccineSchedule Details
const getAllVaccineSchedule = (req, res) => {
    // console.log("VaccineSchedule Description", req);
    VaccineScheduleModal.find((err, data) => {
        if (err) {
            res.status(500).json({
                message: 'Error in getting all VaccineSchedule',
                error: err,
            });
        } else {
            res.status(200).json({
                message: 'All VaccineSchedule details',
                data: data,
            });
        }
    });
};

// get a single VaccineSchedule
const getVaccineScheduleByID = (req, res) => {
    VaccineScheduleModal.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
};

//update a VaccineSchedule
const updateVaccineSchedule = (req, res) => {
    VaccineScheduleModal.findByIdAndUpdate(
        req.body._id,
        {
            $set: req.body,
        },
        (err, data) => {
            if (err) {
                res.status(500).json({
                    message: 'Error in updating VaccineSchedule',
                    error: err,
                });
            } else {
                res.status(200).json({
                    message: 'VaccineSchedule updated successfully',
                    result: {
                        data: data,
                        response: true,
                    },
                });
            }
        }
    );
};

//delete a VaccineSchedule
const deleteVaccineSchedule = (req, res) => {
    VaccineScheduleModal.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
};

module.exports = {
    addVaccineSchedule,
    getAllVaccineSchedule,
    getVaccineScheduleByID,
    updateVaccineSchedule,
    deleteVaccineSchedule,
};
