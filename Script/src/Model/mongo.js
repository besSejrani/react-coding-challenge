import "dotenv/config";
import mongoose from "mongoose";

// ========================================================================================================

const database = async () => {
  try {
    const connection =
      process.env.NODE_ENV !== "production"
        ? `${process.env.MONGO_DEVELOPMENT}`
        : `${process.env.MONGO_PRODUCTION}`;

    await mongoose.connect(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await console.log(`Connected to database`);
  } catch (error) {
    console.log(error.message);
    console.log(`Couldn't connect to database`);
  }
};

export default database;
