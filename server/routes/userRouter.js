const express = require("express");
const pubRouter = express.Router();
const UserController = require("../controllers/userController");
const errorHandler = require("../middlewares/errorHandlers");

pubRouter.get("/products", UserController.userShowAllProducts);
pubRouter.get("/products/:id", UserController.userShowOneProduct);

pubRouter.use(errorHandler);

module.exports = pubRouter;
