import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import * as Styled from "./App.styles";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_WORDS_API_KEY,
    "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
  },
};

function App() {
  useEffect(() => {
    fetch("https://wordsapiv1.p.rapidapi.com/words/hatchback", options)
      .then((data) => data.json())
      .then((data) => console.log(data));
  }, []);

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
