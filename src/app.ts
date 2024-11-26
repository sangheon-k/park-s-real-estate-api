import express from "express";
import cors from "cors";
import morgan from "morgan";

import routes from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

const createApp = () => {
  const app = express();

  app.use(cors());
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use("/api/v1", routes);

  app.get("/ping", (req, res) => {
    res.json({ message: "pong" });
  });

  app.use(errorHandler);

  return app;
};

export { createApp };
