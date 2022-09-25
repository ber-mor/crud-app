import React from "react";
import Link from "@mui/material/Link";
import "./comments.css";
import PropTypes from "prop-types";
import EditComment from "./EditComment";

export default function Comment({ data, deleteCommentById }) {
  return (
    <div key={data.id} className="comment">
      <p className="username"><strong>{data.username}</strong></p>
      <p className="text">{data.comment}</p>
      <div id={data.id} className="action-buttons">
        <EditComment comment={data}/>
        <Link
          className="comment-button"
          onClick={() => deleteCommentById(data.id)}
          color="error"
        >
          Delete
        </Link>
      </div>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.object,
  deleteCommentById: PropTypes.func,
};

Comment.defaultProps = {
  data: {},
  deleteCommentById: () => {},
};
