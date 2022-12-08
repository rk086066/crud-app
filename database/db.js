import mongoose from "mongoose";

const Connection = async () => {
  const URL = `mongodb://rohan:rohan@ac-pndt5ko-shard-00-00.4xqtx9f.mongodb.net:27017,ac-pndt5ko-shard-00-01.4xqtx9f.mongodb.net:27017,ac-pndt5ko-shard-00-02.4xqtx9f.mongodb.net:27017/?ssl=true&replicaSet=atlas-jmrqwd-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("database connected");
  } catch (err) {
    console.log(`connecting db failed->`, err.message);
  }
};

export default Connection;
