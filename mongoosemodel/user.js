var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema(
  {
    name: {
      type: String
   
    },
    password:{
        type: String
    },
    profile:{
       type: String
    },
    mobileNo:{
        type: Number
    }
  },
  {
      timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
}
);
module.exports =  mongoose.model("User", userSchema);

