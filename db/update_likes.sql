UPDATE posts SET like_count = $1 WHERE post_id = $2;
SELECT like_count, post_id FROM posts WHERE post_id = $2;
