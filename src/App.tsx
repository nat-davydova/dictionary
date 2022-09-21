import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import * as Styled from "./App.styles";

function App() {
  function onSearchHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    console.log(event.target.value);
  }

  return (
    <div className="App">
      <Container maxWidth="md">
        <Styled.AppWrapper>
          <Styled.SearchWrapper>
            <TextField
              label="Search a word"
              variant="outlined"
              fullWidth
              onChange={onSearchHandler}
            />
            <Button variant="contained">Search</Button>
          </Styled.SearchWrapper>
        </Styled.AppWrapper>
      </Container>
    </div>
  );
}

export default App;
