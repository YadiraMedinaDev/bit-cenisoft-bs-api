const Sale = require("./model");

const createSale = (req, res) => {
  const newSale = new Sale(req.body);
  newSale.save((error, saleSaved) => {
    if (error) {
      console.error("Error saving sale ", error);
      res.status(500).send(error);
    } else {
      res.send(saleSaved);
    }
  });
};

//module.exports = { createSale }

// Obtener
const getSaleById = (req, res) => {
  Sale.findOne({ _id: req.params.id }, (error, sale) => {
    if (error) {
      console.error("Error getting sale ", error);
      res.status(500).send(error);
    } else {
      res.send(sale);
    }
  });
};

// Actualizar
const updateSaleById = (req, res) => {
  Sale.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    (error, saleUpdate) => {
      if (error) {
        console.error("Error updating sale ", error);
        res.status(500).send(error);
      } else {
        res.send(saleUpdate);
      }
    }
  );
};

// Eliminar
const deleteSaleById = (req, res) => {
  Sale.deleteOne({ _id: req.params.id }, (error, response) => {
    if (error) {
      console.error("Error deleted sale ", error);
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
  createSale,
  getSaleById,
  updateSaleById,
  deleteSaleById,
};
