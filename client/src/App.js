import "./App.css";
import Form from "./components/form/Form";
import CommentsSection from "./components/comments/CommentsSection";
import Box from "@mui/material/Box";
import { getComments } from "./data/comments-api";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { addComment } from "./data/comments-api";

function App() {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);

  function onAddComment(comment) {
    setLoading(true);
    addComment(comment).then((response) => {
      console.log(response.data.insertId);
      const newComment = {
        id: response.data.insertId,
        username: comment.username,
        comment: comment.comment,
      };
      //the comments list is updated locally using the response data
      //from the update in order to avoid calling getComments() again
      setComments(comments => [newComment, ...comments]);
      setLoading(false);
      alert("Comment added")
    });
  }

  useEffect(() => {
    getComments().then((response) => {
      setComments(response.data);
      setLoading(false);
    });
  }, []);

  //loads an animation instead of the comments section until the data is ready
  return (
    <div className="App">
      <Box className="card">
        <Form onAddComment={onAddComment} />
        {loading ?
          <CircularProgress />
        :
          <CommentsSection data={comments} />}
      </Box>
    </div>
  );
}

export default App;
