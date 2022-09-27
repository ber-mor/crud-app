import React from "react";
import TextField from "@mui/material/TextField";
import { useState} from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./form.css";
import { fieldsAreFilled } from "../../utils/validations";
import PropTypes from "prop-types";

export default function Form({onAddComment}) {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  /**
   * Submits the form to add a new user and clears the form fields
   * @param  {Event} e The event that triggers the function
   */
  const onSubmit = (e) => {
    e.preventDefault()
    //trims the values before sending them to the api
    trimFields()
    if (!fieldsAreFilled([username, comment])) return
    onAddComment({username, comment})
    setUsername("")
    setComment("")
  };

  const trimFields = () =>{
    setUsername(username => username.trim())
    setComment(comment => comment.trim())
  }

  return (
    <form onSubmit={onSubmit}>
    <Box className="form-box">
      <h1 className="card-title">Leave comments</h1>
        <TextField
          label="Email"
          type="email"
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

Form.propTypes = {
  onAddComment: PropTypes.func
}

Form.defaultProps = {
  onAddComment: () => {},
};

