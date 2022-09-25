import React from "react";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./form.css";
import { addComment } from "../../data/comments-api";
import { fieldsAreFilled } from "../../utils/validations";

export default function Form() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  /**
   * Submits the form to add a new user and clears the form fields
   * @param  {Event} e The event that triggers the function
   */
  const onSubmit = (e) => {
    e.preventDefault()
    if (!fieldsAreFilled([username, comment])) return
    addComment({username, comment})
    clearFields()
  };

  const clearFields = () =>{
    setUsername("");
    setComment("");
  }

  return (
    <form onSubmit={onSubmit}>
    <Box className="form-box">
      <h1 className="card-title">Leave a Comment</h1>
        <TextField
          label="Email"
          // type="email"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          label="Add a comment..."
          multiline
          minRows={3}
          required
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <Button
          className="submit-button"
          variant="contained"
          type="submit"
        >
          Comment
        </Button>
    </Box>
    </form>
  );
}
