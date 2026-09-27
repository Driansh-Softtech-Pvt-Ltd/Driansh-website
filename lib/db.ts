import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

const dbConnect = async (): Promise<void> => {
  if (connection.isConnected) return;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }

  const connect = await mongoose.connect(uri, { dbName: process.env.DB_NAME });
  connection.isConnected = connect.connections[0].readyState;

  if (process.env.NODE_ENV !== "production") {
    console.log("Database connected successfully ✅");
  }
};

export default dbConnect;
