import express from "express";
import { catchAsync } from "../middlewares/catchAsync";
import * as postsController from "../controllers/posts.controller";

const router = express.Router();

router.get("/", catchAsync(postsController.getAllPosts));

export default router;
