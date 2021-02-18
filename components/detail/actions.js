const Detail = require("./model");

const createDetail = (req, res) => {
  const newDetail = new Detail(req.body);
  newDetail.save((error, detailSaved) => {
    if (error) {
      console.error("Error saving detail ", error);
      res.status(500).send(error);
    } else {
      res.send(detailSaved);
    }
  });
};

//module.exports = { createDetail }

// Obtener
const getDetailById = (req, res) => {
  Detail.findOne({ _id: req.params.id }, (error, detail) => {
    if (error) {
      console.error("Error getting detail ", error);
      res.status(500).send(error);
    } else {
      res.send(detail);
    }
  });
};

// Actualizar
const updateDetailById = (req, res) => {
  Detail.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    (error, detailUpdate) => {
      if (error) {
        console.error("Error updating detail ", error);
        res.status(500).send(error);
      } else {
        res.send(detailUpdate);
      }
    }
  );
};

// Eliminar
const deleteDetailById = (req, res) => {
  Detail.deleteOne({ _id: req.params.id }, (error, response) => {
    if (error) {
      console.error("Error deleted detail ", error);
      res.status(500).send(error);
    } else {
      if (response) {
        if (response.n === 1 && response.ok === 1) {
          res.status(202).send(response);
        }
        if (response.n === 0 && response.ok === 1) {
          res.status(204).send({
            message: "No data found",
          });
        }
      }
    }
  });
};

module.exports = {
  createDetail,
  getDetailById,
  updateDetailById,
  deleteDetailById,
};
