// Configuration
import "dotenv/config";

// Mongoose
import mongoose from "mongoose";

// ========================================================================================================

export default async () => {
  let connection;

  if (process.env.NODE_ENV2 === "production") {
    connection = process.env.MONGO_PRODUCTION;
  }

  if (process.env.NODE_ENV2 === "development") {
    connection = process.env.MONGO_DEVELOPMENT;
  }

  try {
    await mongoose.connect(connection || process.env.MONGO_ATLAS!);

    await console.log("Connected to database");
  } catch (error) {
    console.log(error.message);
    console.log("Couldn't connect to database");
  }
};
