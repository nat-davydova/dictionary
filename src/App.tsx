import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { v4 as uuid } from "uuid";
import * as Styled from "./App.styles";
import { mapResponseToInterface } from "./utils";
import { Word, WordDefinition } from "./types";
import { Example } from "./App.styles";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function onSearchInputHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setSearchQuery(event.target.value);
  }

  async function onSearchSubmitHandler() {
    setIsLoading(true);
    const response = await fetch(
      `https://wordsapiv1.p.rapidapi.com/words/${searchQuery}`,
      options
    ).then((data) => data.json());
    setIsLoading(false);
    const mappedResponse = mapResponseToInterface(response);
    setCurrentWord(mappedResponse);
  }

  function renderWordDefinitions(definitions?: WordDefinition[]) {
    if (!definitions) return <></>;

    return definitions.map((definition, index) => (
      <Styled.DefinitionWrapper key={uuid()}>
        <Styled.DefinitionCoreWrapper>
          <Styled.DefinitionNumber>{index + 1}</Styled.DefinitionNumber>
          <Styled.PartOfSpeech fontStyle="italic">
            {definition.partOfSpeech}
          </Styled.PartOfSpeech>
          <Styled.Definition>{definition.definition}</Styled.Definition>
        </Styled.DefinitionCoreWrapper>
        {definition.examples?.map((example) => (
          <Styled.Example key={uuid()} fontStyle="italic">
            {example}
          </Styled.Example>
        ))}
        {definition.synonyms?.length && (
          <Styled.AdditionalWrapper>
            <Typography fontWeight="600" component="span">
              Synonyms:
            </Typography>
            <Styled.AdditionalTermsWrapper>
              {definition.synonyms?.map((synonym) => (
                <Typography key={uuid()} component="span">
                  {synonym}
                </Typography>
              ))}
            </Styled.AdditionalTermsWrapper>
          </Styled.AdditionalWrapper>
        )}
        {definition.antonyms?.length && (
          <Styled.AdditionalWrapper>
            <Typography fontWeight="600" component="span">
              Antonyms:
            </Typography>
            <Styled.AdditionalTermsWrapper>
              {definition.antonyms?.map((synonym) => (
                <Typography key={uuid()} component="span">
                  {synonym}
                </Typography>
              ))}
            </Styled.AdditionalTermsWrapper>
          </Styled.AdditionalWrapper>
        )}
      </Styled.DefinitionWrapper>
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
        <Styled.WordWrapper>
          {isLoading && (
            <Typography variant="h5" component="p">
              Loading...
            </Typography>
          )}
          {currentWord?.word && !isLoading && (
            <>
              <Styled.WordBriefWrapper>
                <Typography variant="h4" component="h1">
                  {currentWord.word}
                </Typography>
                {currentWord.transcription && (
                  <Typography variant="subtitle1" component="p">
                    [{currentWord.transcription}]
                  </Typography>
                )}
              </Styled.WordBriefWrapper>
              {renderWordDefinitions(currentWord.definitions)}
            </>
          )}
        </Styled.WordWrapper>
      </Container>
    </div>
  );
}

export default App;
