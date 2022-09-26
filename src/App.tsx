import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import * as Styled from "./App.styles";
import { mapResponseToInterface } from "./utils";
import { Word, WordDefinition } from "./types";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_WORDS_API_KEY,
    "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
  },
};

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentWord, setCurrentWord] = useState<Word | null>(null);

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
    setCurrentWord(mappedResponse);
  }

  function renderWordDefinitions(definitions?: WordDefinition[]) {
    if (!definitions) return <></>;

    return definitions.map((definition, index) => (
      <>
        <Typography>
          {index + 1} {definition.partOfSpeech} {definition.definition}
        </Typography>
        <Typography>
          {definition.examples?.map((example) => example)}
        </Typography>
        <Typography>
          {definition.synonyms?.map((synonym) => synonym)}
        </Typography>
        <Typography>
          {definition.antonyms?.map((antonym) => antonym)}
        </Typography>
      </>
    ));
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
        {currentWord && (
          <Styled.DefinitionWrapper>
            <Typography variant="h4" component="h1">
              {currentWord.word}
            </Typography>
            <Typography variant="subtitle1" component="p">
              [{currentWord.transcription}]
            </Typography>
            {renderWordDefinitions(currentWord.definitions)}
          </Styled.DefinitionWrapper>
        )}
      </Container>
    </div>
  );
}

export default App;
