import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as Styled from "./App.styles";

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Styled.AppWrapper>
          <TextField label="Search a word" variant="outlined" fullWidth />
          <Button variant="contained">Search</Button>
        </Styled.AppWrapper>
      </Container>
    </div>
  );
}

export default App;
