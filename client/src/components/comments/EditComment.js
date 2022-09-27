import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "@mui/material/Link";
import "./comments.css";
import { fieldsAreFilled } from "../../utils/validations";
import { useState } from "react";
import PropTypes from "prop-types";

export default function EditComment({ data, updateComment }) {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState(data.username);
  const [comment, setComment] = useState(data.comment);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //This is the same function from the form,
  //the difference is the data and the api call
  const onSubmit = (e) => {
    e.preventDefault();
    trimFields()
    if (!fieldsAreFilled([username, comment])) return
    updateComment({ id: data.id, username, comment });
    setUsername("");
    setComment("");
    setOpen(false); //closes the modal after a successful update
  };

  const trimFields = () =>{
    setUsername(username => username.trim())
    setComment(comment => comment.trim())
  }

  return (
    <>
      <Link onClick={handleClickOpen} className="comment-button">
        Edit
      </Link>
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <DialogTitle>Edit Comment</DialogTitle>
        <DialogContent className="edit-form">
          <form onSubmit={onSubmit} className="edit-form">
            <TextField
              label="Email"
              className="text-field"
              sx={{ margin: "5px 0px" }}
              type="email"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <TextField
              label="Add a comment..."
              className="text-field"
              multiline
              required
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Save</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

EditComment.propTypes = {
  data: PropTypes.object,
  updateComment: PropTypes.func
}

EditComment.defaultProps = {
  data: {},
  updateComment: () => {},
};

