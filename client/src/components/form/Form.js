import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./form.css";
import { addComment } from "../../data/comments-api";

export default function Form() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const onSubmit = (e) => {
    e.preventDefault()
    if (!fieldsAreValid) return
    addComment({username, comment})
    setUsername("");
    setComment("");
  };

  //Validates for empty fields
  const fieldsAreValid = () =>{
    if (!(username.trim() && comment.trim())) {
      alert("All fields are required");
      setUsername("");
      setComment("");
      return false
    }
    return true
  }

  return (
    <form onSubmit={onSubmit}>
    <Box className="form-box">
      <h1>Leave a Comment</h1>
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
