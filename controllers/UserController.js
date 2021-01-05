var UserModel = require("../models/UserModel.js");

module.exports = function (router) {
  router.post("/saveUser", async (req, res) => {
    try {
      res.status(200).json(await UserModel.save(req.body));
    } catch (error) {
      res.status(500).json(error);
    }
  }),
  router.get("/allUsers", async (req, res) => {
    try {
      res.status(200).json(await UserModel.allUser(req.body));
    } catch (error) {
      res.status(500).json(error);
    }
  }),
  router.post("/loginUser", async (req, res) => {
    try {
      res.status(200).json(await UserModel.userLogin(req.body));
    } catch (error) {
      res.status(500).json(error);
    }
  })
};
