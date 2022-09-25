import { useState, useEffect } from "react";
import "./comments.css";
import { getComments, deleteComment } from "../../data/comments-api";
import CircularProgress from "@mui/material/CircularProgress";
import Comment from "./Comment";

export default function CommentsSection() {
  const [comments, setComments] = useState(null);

  const deleteCommentById = (id) => {
    //the function returns if the user regrets deleting and nothing is deleted
    if (!window.confirm("Do you want to delete this comment?")) return;
    setComments(comments => comments.filter(c => c.id !== id));
    deleteComment(id);
  };

  useEffect(() => {
    getComments(setComments);
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
