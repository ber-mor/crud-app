import "./App.css";
import Form from "./components/form/Form";
import CommentsSection from "./components/comments/CommentsSection";
import Box from "@mui/material/Box";

function App() {
  return (
      <div className="App">
        <Box className="card">
          <Form />
          <CommentsSection />
        </Box>
      </div>
  );
}

export default App;
