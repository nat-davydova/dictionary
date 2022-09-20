import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <TextField label="Search a word" variant="outlined" fullWidth />
      </Container>
    </div>
  );
}

export default App;
