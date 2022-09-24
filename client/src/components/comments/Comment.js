import React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
export default function Comment({ data, deleteCommentById }) {

  return (
    <div key={data.id} className="comment">
      <Typography variant="body1">
        <strong>{data.username}</strong>
      </Typography>
      <p>{data.comment}</p>
      <div id={data.id} className="action-buttons">
        <Button variant="text" className="comment-button">
          Edit
        </Button>
        <Button
          variant="text"
          className="comment-button"
          onClick={(event) => deleteCommentById(event.target.parentElement.id)}
          color="error"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
