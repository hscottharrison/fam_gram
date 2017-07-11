-- SELECT * FROM posts WHERE post_id = $1;
SELECT u.user_id, p.post_id, p.post_url, p.caption, p.like_count, u.username, u.branch_name
FROM posts p
JOIN user_table u
ON u.user_id = p.user_id;
