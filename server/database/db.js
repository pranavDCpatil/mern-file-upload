import mongoose from "mongoose";

const DBConnection = async () => {
  try {
    const MONGODB_URI = `mongodb+srv://pranav:pranav1234@file-sharing.pxxtovp.mongodb.net/?retryWrites=true&w=majority`;
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    console.log("Database caonnected successfully.");
  } catch (error) {
    console.error("Error while connecting the Database ", error.message);
  }
};

export default DBConnection;
