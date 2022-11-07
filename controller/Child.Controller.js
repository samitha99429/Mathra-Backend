const ChildModal = require('./../models/Child.model');

//addChild function
const addChild = (req, res) => {
    const {childID, childName, parentName, address, dateOfBirth, bloodGroup} = req.body;

    const mongooseRes = new ChildModal({
        childID, childName, parentName, address, dateOfBirth, bloodGroup
    });

    mongooseRes.save().then((result) => {
        res
            .status(200)
            .json({
                message: 'Child added successfully',
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

//getAll Child Details
const getAllChild = (req, res) => {
    // console.log("getAllChild", req);
    ChildModal.find((err, data) => {
        if (err) {
            res.status(500).json({
                message: 'Error in getting all Child',
                error: err,
            });
        } else {
            res.status(200).json({
                message: 'All Child details',
                data: data,
            });
        }
    });
};

// get a single Child
const getChildByID = (req, res) => {
    ChildModal.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
};

//update a child
const updateChild = (req, res) => {
    ChildModal.findByIdAndUpdate(
        req.body._id,
        {
            $set: req.body,
        },
        (err, data) => {
            if (err) {
                res.status(500).json({
                    message: 'Error in updating child',
                    error: err,
                });
            } else {
                res.status(200).json({
                    message: 'child updated successfully',
                    result: {
                        data: data,
                        response: true,
                    },
                });
            }
        }
    );
};

//delete a child
const deleteChild = (req, res) => {
    ChildModal.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
};

module.exports = {
    addChild,
    updateChild,
    deleteChild,
    getChildByID,
    getAllChild
};
