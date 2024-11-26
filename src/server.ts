import dotenv from "dotenv";
import { createApp } from "./app";
import { connectDB } from "./utils/dbUtil";

dotenv.config();

const start = async () => {
  try {
    const app = createApp();
    const PORT = process.env.PORT || 3000;

    await connectDB();

    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error("Error starting the server:", err);
  }
};

start();
