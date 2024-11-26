import { Request, Response } from "express";
import postModel from "../models/post.model";
import { Post } from "../types/post.types";
import { ApiResponse } from "../types/common.types";

const getAllPosts = async (req: Request, res: Response): Promise<void> => {
  const posts: Post[] = await postModel.getPosts();

  console.log("posts", posts);

  const response: ApiResponse<Post[]> = {
    success: true,
    data: posts,
  };

  res.status(200).json(response);
};

export { getAllPosts };
