import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Link from "@mui/material/Link";
import "./comments.css";
import { useState } from 'react';
import { updateComment } from '../../data/comments-api';

export default function EditComment(props) {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState(props.comment.username)
  const [comment, setComment] = useState(props.comment.comment)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Link onClick={handleClickOpen} className="comment-button">
          Edit
      </Link>
      <Dialog open={open} onClose={handleClose} fullWidth ={true}>
        <DialogTitle>Edit Comment</DialogTitle>
        <DialogContent className ="edit-form">
        <TextField
          label="Email"
          className='text-field'
          sx = {{margin: "5px 0px"}}
          // type="email"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          label="Add a comment..."
          // sx = {{margin: "0px 0px"}}
          className='text-field'
          multiline
          required
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateComment}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}