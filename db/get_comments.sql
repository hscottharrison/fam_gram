SELECT comment_text, post_id, u.username
FROM comments c
JOIN user_table u
ON c.user_id = u.user_id;
