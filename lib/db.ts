import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

const dbConnect = async (): Promise<void> => {
  if (connection.isConnected) {
    if (process.env.NODE_ENV !== "production") {
      console.log("Already connected to the database");
    }
    return;
  }
  try {
    const connect = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}` || "");
    connection.isConnected = connect.connections[0].readyState;
    if (process.env.NODE_ENV !== "production") {
      console.log("Database connected successfully ✅");
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }
};

export default dbConnect;