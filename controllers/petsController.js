const db = require("../models");
const imgur = require("../config/imgur");
const FIND_PETS_LIMIT = 25;

// Defining methods for the petsController
module.exports = {
  find: async function (req, res) {
    try {
      const petsData = await db.Pet.find().limit(FIND_PETS_LIMIT);
      if (!petsData) {
        return res.status(400).json("No pets found :(");
      }
      return res.json(petsData);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  findById: async function ({ params }, res) {
    try {
      const petData = await db.Pet.findById(params.id);
      if (!petData) {
        return res.status(400).json("No pet found :(");
      }
      return res.json(petData);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  uploadImage: async function ({ params, files }, res) {
    // Check for files being uploaded
    if (!files) {
      return res.json({ fileName: "No Image", link: `/images/not-found.png` });
    }
    const { data } = files.file;
    try {
      const encoded = data.toString("base64");
      const imgurRes = await imgur.uploadBase64(encoded);
      const uploadRes = imgurRes.data;
      return res.json(uploadRes);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  create: async function ({ params, body }, res) {
    try {
      const userExists = await db.User.findById(params.id);
      // Check for user
      if (!userExists) {
        return res.status(400).json("Invalid user ID");
      }
      // Create pet
      const newPet = await db.Pet.create(body);
      // Add pet to user pets array
      const updatedUser = await db.User.findByIdAndUpdate(params.id,
        { $push: { pets: newPet._id } },
        { new: true, runValidators: true }
      )
      .select("-password")
      .populate("pets")
      return res.json(updatedUser);
    } catch (err) {
      if (err.name == "ValidationError" || err.name == "MongoError") {
        return res.status(400).json(err.message);
      } else {
        return res.status(500).json(err);
      }
    }
  },
  update: async function ({ params, body }, res) {
    try {
      const updatedPet = await db.Pet.findByIdAndUpdate(params.id, body, {
        new: true,
        runValidators: true,
      })
      return res.json(updatedPet);
    } catch (err) {
      if (err.name == "ValidationError" || err.name == "MongoError") {
        return res.status(400).json(err.message);
      } else {
        return res.status(500).json(err);
      }
    }
  },
  remove: async function ({ params }, res) {
    try {
      const petData = await db.Pet.findByIdAndDelete(params.id);
      const removedPet = await db.User.findByIdAndUpdate(
        petData.userId,
        { $pull: { pets: petData._id }, $set: { matches: [] } },
        { new: true }
      );
      const removedSwipes = await db.Swipe.deleteMany({
        $or: [{ petId: petData._id }, { targetPetId: petData._id }],
      });
      const removedMatches = await db.Match.deleteMany({
        $or: [{ pet1Id: petData._id }, { pet2Id: petData._id }],
      });
      return res.json({ msg: petData.name + " and all data was deleted" });
    } catch (err) {
      return res.status(422).json(err);
    }
  },
};
