CREATE DATABASE IF NOT EXISTS test_db;
USE test_db;

CREATE TABLE IF NOT EXISTS  posts (
  id INT AUTO_INCREMENT PRIMARY KEY,  -- 게시글 고유 ID (자동 증가)
  title VARCHAR(255) NOT NULL,        -- 게시글 제목
  content TEXT NOT NULL,              -- 게시글 내용
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- 작성 시간 (기본값 현재 시간)
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP  -- 수정 시간 (기본값 현재 시간, 수정 시 자동 갱신)
);
