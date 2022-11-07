const BranchModal = require('./../models/Branch.model');

//addBranch function
const addBranch = (req, res) => {
    const {
        userID, userName, userPassword, userBranchName, userAddress, userContactNumber, userDistrict, userCity
    } = req.body;

    const mongooseRes = new BranchModal({
        userID, userName, userPassword, userBranchName, userAddress, userContactNumber, userDistrict, userCity
    });

    mongooseRes.save().then((result) => {
        res
            .status(200)
            .json({
                message: 'Branch added successfully', result: {
                    data: result, response: true,
                },
            })
            .catch((err) => {
                console.log('err', err);
                res.status(400).json(err);
            });
    });
};

//getAll Branch Details
const getAllBranch = (req, res) => {
    // console.log("getAllBranch", req);
    BranchModal.find((err, data) => {
        if (err) {
            res.status(500).json({
                message: 'Error in getting all Branch', error: err,
            });
        } else {
            res.status(200).json({
                message: 'All Branch details', data: data,
            });
        }
    });
};

// get a single Branch
const getBranchByID = (req, res) => {
    BranchModal.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
};

//update a Branch
const updateBranch = (req, res) => {
    BranchModal.findByIdAndUpdate(req.body._id, {
        $set: req.body,
    }, (err, data) => {
        if (err) {
            res.status(500).json({
                message: 'Error in updating Branch', error: err,
            });
        } else {
            res.status(200).json({
                message: 'Branch updated successfully', result: {
                    data: data, response: true,
                },
            });
        }
    });
};

//delete a Branch
const deleteBranch = (req, res) => {
    BranchModal.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
};

module.exports = {
    addBranch, getAllBranch, getBranchByID, updateBranch, deleteBranch,
};
