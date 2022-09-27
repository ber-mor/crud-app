import { useState } from "react";
import "./comments.css";
import { deleteComment } from "../../data/comments-api";
import Comment from "./Comment";
import PropTypes from "prop-types";

export default function CommentsSection({data}) {
  const [comments, setComments] = useState(data);

  const onDeleteComment = (id) => {
    //the function returns if the user regrets deleting and nothing is deleted
    if (!window.confirm("Do you want to delete this comment?")) return;
    deleteComment(id);
    setComments(comments => comments.filter(c => c.id !== id));
  };

  return (
    <>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          data={comment}
          onDeleteComment={onDeleteComment}
        />
      ))}
    </>
  );
}

CommentsSection.propTypes = {
  data: PropTypes.object
}

CommentsSection.defaultProps = {
  data: {},
};

