"use strict";
const User = require("../mongoosemodel/User.js");
const md5 = require("md5");

module.exports = {
  async save(data) {
    try {
      data.password = md5(data.password);
      let user = new User(data);
      let savedData = await user.save();
      console.log("saveData===>>>", savedData);
      if (savedData) {
        return savedData;
      }
    } catch (error) {
      throw error;
    }
  },
  async allUser() {
    try {
      let objToSend = {};
      let list = await User.find().sort({ createdAt: -1 });
      console.log("listt===>>>", list);
      let TotalCount = await User.countDocuments({});
      objToSend.TotalCount = TotalCount;
      objToSend.data = list;
      return objToSend;
    } catch (error) {
      throw error;
    }
  },

  async userLogin(data) {
    try {
        var obj = {}
      data.password = md5(data.password);
      console.log("password==.>>>", data.password);
      let user = await User.findOne({
        name: data.name,
        password: data.password,
      });
      console.log("user==>>>>", user);
      if (user || user != null) {
        obj. message = "Login successfull"
        return obj;
      } else {
        obj. message = "No Data Found"
        return obj;
      }
    } catch (error) {
      throw error;
    }
  },
};
