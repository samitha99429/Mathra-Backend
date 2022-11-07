const VaccineDescriptionModal = require('./../models/VaccineDescription.model');

//addVaccineDescription function
const addVaccineDescription = (req, res) => {
    const {descriptionID, vaccineName, vaccineDetails} = req.body;

    const mongooseRes = new VaccineDescriptionModal({
        descriptionID, vaccineName, vaccineDetails
    });

    mongooseRes.save().then((result) => {
        res
            .status(200)
            .json({
                message: 'Vaccine Description added successfully',
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

//getAll Vaccine Description Details
const getAllVaccineDescription = (req, res) => {
    // console.log("getAllVaccine Description", req);
    VaccineDescriptionModal.find((err, data) => {
        if (err) {
            res.status(500).json({
                message: 'Error in getting all vaccine description',
                error: err,
            });
        } else {
            res.status(200).json({
                message: 'All vaccine description details',
                data: data,
            });
        }
    });
};

// get a single vaccine description
const getVaccineDescriptionByID = (req, res) => {
    VaccineDescriptionModal.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
};

//update a VaccineDescription
const updateVaccineDescription = (req, res) => {
    VaccineDescriptionModal.findByIdAndUpdate(
        req.body._id,
        {
            $set: req.body,
        },
        (err, data) => {
            if (err) {
                res.status(500).json({
                    message: 'Error in updating VaccineDescription',
                    error: err,
                });
            } else {
                res.status(200).json({
                    message: 'VaccineDescription updated successfully',
                    result: {
                        data: data,
                        response: true,
                    },
                });
            }
        }
    );
};

//delete a VaccineDescription
const deleteVaccineDescription = (req, res) => {
    VaccineDescriptionModal.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
};

module.exports = {
    addVaccineDescription,
    getAllVaccineDescription,
    getVaccineDescriptionByID,
    updateVaccineDescription,
    deleteVaccineDescription,
};
