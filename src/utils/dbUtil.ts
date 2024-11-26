import db from "../../config/db";
import { RowDataPacket } from "mysql2";

// DB 연결 확인
export const connectDB = async () => {
  try {
    // 연결 테스트
    const [rows] = await db.query("SELECT 1");
    console.log("DB connected successfully");
  } catch (err) {
    console.error("DB connection failed:", err.message);
    process.exit(1); // 연결 실패 시 서버 종료
  }
};

export const executeQuery = async <T>(
  query: string,
  params?: any[]
): Promise<T & RowDataPacket[]> => {
  const [rows] = await db.query<T & RowDataPacket[]>(query, params);
  return rows;
};
