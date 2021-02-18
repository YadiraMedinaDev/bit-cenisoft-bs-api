const Book = require("./model");

const createBook = (req, res) => {
  const newBook = new Book(req.body);
  newBook.save((error, bookSaved) => {
    if (error) {
      console.error("Error saving book ", error);
      res.status(500).send(error);
    } else {
      res.send(bookSaved);
    }
  });
};

//module.exports = { createBook }

// Obtener
const getBookById = (req, res) => {
  Book.findOne({ _id: req.params.id }, (error, book) => {
    if (error) {
      console.error("Error getting book ", error);
      res.status(500).send(error);
    } else {
      res.send(book);
    }
  });
};

// Actualizar
const updateBookById = (req, res) => {
  Book.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    (error, bookUpdate) => {
      if (error) {
        console.error("Error updating book ", error);
        res.status(500).send(error);
      } else {
        res.send(bookUpdate);
      }
    }
  );
};

// Eliminar
const deleteBookById = (req, res) => {
  Book.deleteOne({ _id: req.params.id }, (error, response) => {
    if (error) {
      console.error("Error deleted book ", error);
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
  createBook,
  getBookById,
  updateBookById,
  deleteBookById,
};
