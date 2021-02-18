const Client = require("./model");

const createClient = (req, res) => {
  const newClient = new Client(req.body);
  newClient.save((error, clientSaved) => {
    if (error) {
      console.error("Error saving client ", error);
      res.status(500).send(error);
    } else {
      res.send(clientSaved);
    }
  });
};

//module.exports = { createClient }

// Obtener
const getClientById = (req, res) => {
  Client.findOne({ _id: req.params.id }, (error, client) => {
    if (error) {
      console.error("Error getting client ", error);
      res.status(500).send(error);
    } else {
      res.send(client);
    }
  });
};

// Actualizar
const updateClientById = (req, res) => {
  Client.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    (error, clientUpdate) => {
      if (error) {
        console.error("Error updating client ", error);
        res.status(500).send(error);
      } else {
        res.send(clientUpdate);
      }
    }
  );
};

// Eliminar
const deleteClientById = (req, res) => {
  Client.deleteOne({ _id: req.params.id }, (error, response) => {
    if (error) {
      console.error("Error deleted client ", error);
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
  createClient,
  getClientById,
  updateClientById,
  deleteClientById,
};
