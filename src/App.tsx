import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import * as Styled from "./App.styles";
import { mapResponseToInterface } from "./utils";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_WORDS_API_KEY,
    "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
  },
};

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  function onSearchInputHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setSearchQuery(event.target.value);
  }

  async function onSearchSubmitHandler() {
    const response = await fetch(
      `https://wordsapiv1.p.rapidapi.com/words/${searchQuery}`,
      options
    ).then((data) => data.json());
    const mappedResponse = mapResponseToInterface(response);
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
              onChange={onSearchInputHandler}
            />
            <Button variant="contained" onClick={onSearchSubmitHandler}>
              Search
            </Button>
          </Styled.SearchWrapper>
        </Styled.AppWrapper>
        <Styled.DefinitionWrapper>Wow</Styled.DefinitionWrapper>
      </Container>
    </div>
  );
}

export default App;
