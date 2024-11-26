import { Post } from "../types/post.types";
import { executeQuery } from "../utils/dbUtil";

const getPosts = async () => {
  const query = `SELECT * FROM posts`;
  const res = await executeQuery<Post[]>(query);
  return res;
};

export default { getPosts };
