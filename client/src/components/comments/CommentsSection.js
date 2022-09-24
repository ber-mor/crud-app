import { useState, useEffect } from "react";
import "./comments.css";
import { getComments, deleteComment } from "../../data/comments-api";
import CircularProgress from "@mui/material/CircularProgress";
import Comment from "./Comment";

export default function CommentsSection() {
  const [comments, setComments] = useState(null);

  const deleteCommentById = (id) => {
    if (!window.confirm("Do you want to delete this comment?")) return;
    console.log(id)
    setComments(comments => comments.filter(c => c.id !== id));
    deleteComment(id);
  };

  useEffect(() => {
    getComments(setComments);
    console.log("RENDER")
  }, []);

  return comments === null ? (
    <CircularProgress />
  ) : (
    <>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          data={comment}
          deleteCommentById={deleteCommentById}
        />
      ))}
    </>
  );
}
