const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "role is required"],
      enum: ["admin", "donor"],
    },
    // name: {
    //   type: String,
    //   required: [true, "name is required"],
    // },
    name: {
      type: String,
      required: function () {
        if (this.role === "admin" || this.role === "donor") {
          return true;
        }
        return false;
      },
    },
    // organisationName: {
    //   type: String,
    //   required: function () {
    //     if (this.role === "organisation") {
    //       return true;
    //     }
    //     return false;
    //   },
    // },
    // adminName: {
    //   type: String,
    //   required: function () {
    //     if (this.role === "admin") {
    //       return true;
    //     }
    //     return false;
    //   },
    // },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is requied"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    phone: {
      type: String,
      required: [true, "phone number is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);