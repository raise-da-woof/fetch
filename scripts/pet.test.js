const mongoose = require("mongoose");
const chalk = require("chalk");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fetch", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// =================================================================================================
// ======== Uncomment a function, add data and run "npm run pet-test" to test the function =========
// =================================================================================================

let ObjectId = "5f1333053e6ba0171d2e8d76"; // <===== Add a userId from your database here
// ==== CREATE PET ====
// const pet = { // <===== Add pet data to test create function
//   name: "Tucker",
//   size: "Medium",
//   age: "Senior",
//   gender: "Male",
//   bio: "He's a maniac",
//   isVaccinated: true
// }
// if (!db.User.findById(ObjectId)) {
//   console.log("Invalid user ID");
//   // res.status(404).json({ msg: "Invalid user ID" });
// }
// db.Pet.create(pet)
//   .then((petData) => {
//     db.User.findByIdAndUpdate(
//       ObjectId,
//       { $push: { pets: petData._id } },
//       { new: true }
//     ).select("-password")
//     .populate('pets')
//       .then((userData) => {
//         console.log(userData);
//         // res.json(userData);
//       })
//       .catch((err) => console.log("Error updating user"));
//   })
//   .catch((err) => console.log("Error creating pet"));

// ==== REMOVE PET ====
// db.Pet.findByIdAndDelete(ObjectId)
//   .then((petData) => {
//     db.User.findByIdAndUpdate(
//       petData.userId,
//       { $pull: { pets: petData._id } },
//       { new: true })
//       .then((removedPet) => {
//         console.log(petData.name + " was removed");
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));
