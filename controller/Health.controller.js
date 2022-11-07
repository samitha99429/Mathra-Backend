const HealthModal = require('./../models/Health.model');

//addHealth function
const addHealth = (req, res) => {
  const { reportID, reportDescription } = req.body;

  const mongooseRes = new HealthModal({
    reportID,
    reportDescription,
  });

  mongooseRes.save().then((result) => {
    res
      .status(200)
      .json({
        message: 'Health added successfully',
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

//getAll Health Details
const getAllHealth = (req, res) => {
  // console.log("getAllHealth", req);
  HealthModal.find((err, data) => {
    if (err) {
      res.status(500).json({
        message: 'Error in getting all health',
        error: err,
      });
    } else {
      res.status(200).json({
        message: 'All Health details',
        data: data,
      });
    }
  });
};

// get a single Health
const getHealthByID = (req, res) => {
  HealthModal.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

//update a health
const updateHealth = (req, res) => {
  HealthModal.findByIdAndUpdate(
    req.body._id,
    {
      $set: req.body,
    },
    (err, data) => {
      if (err) {
        res.status(500).json({
          message: 'Error in updating health',
          error: err,
        });
      } else {
        res.status(200).json({
          message: 'health updated successfully',
          result: {
            data: data,
            response: true,
          },
        });
      }
    }
  );
};

//delete a health
const deleteHealth = (req, res) => {
  HealthModal.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports = {
  addHealth,
  getAllHealth,
  getHealthByID,
  updateHealth,
  deleteHealth,
};
