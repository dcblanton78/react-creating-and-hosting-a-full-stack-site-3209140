import { MongoClient } from "mongodb";

let db;

async function connectToDb(cb) {
  const client = new MongoClient(
    `mongodb+srv://${process.env}:${process.env.MONGO_USERNAME}@cluster0.4ouobzu.mongodb.net/?retryWrites=true&w=majority`
  );
  await client.connect();
  db = client.db("react-blog-db");
  cb();
}

export { db, connectToDb };
