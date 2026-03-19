import "dotenv/config";
import express from "express";
import { MongoClient } from "mongodb";

const app = express();

const port = process.env.PORT || 3000;

const connectionString = process.env.MONGO_URI;
const client = new MongoClient(connectionString);

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to MongoDB!");
  } finally {
    await client.close();
  }
}

app.get("/", async (req, res) => {
  if (!connectionString) {
    return res
      .status(500)
      .json({ message: "Failed to connect to the database." });
  }
  try {
    await run();
    return res
      .status(200)
      .json({ message: "Successfully connected to the database!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to connect to the database." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
