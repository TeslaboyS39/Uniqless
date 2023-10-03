const { User, Product, Category, Images } = require("../models");
const { Op } = require("sequelize");

class UserController {
  static async userShowAllProducts(req, res, next) {
    try {
      let { filter, search } = req.query;

      search = search || "";

      let obj = {
        include: [Category, Images],
        order: [["id", "ASC"]],
        where: {
          name: { [Op.iLike]: `%${search}%` },
        },
      };

      if (filter) {
        obj.where.categoryId = filter;
      }

      console.log(obj, "<<<");

      const products = await Product.findAll(obj);

      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }

  static async userShowOneProduct(req, res, next) {
    try {
      const { id } = req.params;

      const product = await Product.findByPk(id, {
        include: [User, Category, Images],
      });

      if (!product) {
        throw { name: "productNotFound" };
      }

      res.status(200).json({ product });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
