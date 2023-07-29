import mongoose from "mongoose";

const DBConnection = async () => {
  try {
    const MONGODB_URI = process.env.MONGO_URI;
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    console.log("Database caonnected successfully.");
  } catch (error) {
    console.error("Error while connecting the Database ", error.message);
  }
};

export default DBConnection;
