import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import { v4 as uuid } from "uuid";
import * as S from "./App.styles";
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  function onSearchInputHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setSearchQuery(event.target.value);
  }

  async function onSearchSubmitHandler() {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(
        `https://wordsapiv1.p.rapidapi.com/words/${searchQuery}`,
        options
      );

      setIsLoading(false);

      if (!response.ok) {
        setIsError(true);
        return;
      }

      const responseToJson = await response.json();
      const mappedResponse = mapResponseToInterface(responseToJson);
      setCurrentWord(mappedResponse);
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
    }
  }

  function renderWordDefinitions(definitions?: WordDefinition[]) {
    if (!definitions) return <></>;

    return definitions.map((definition, index) => (
      <S.DefinitionWrapper key={uuid()}>
        <S.DefinitionCoreWrapper>
          <S.DefinitionNumber>{index + 1}</S.DefinitionNumber>
          <S.PartOfSpeech fontStyle="italic">
            {definition.partOfSpeech}
          </S.PartOfSpeech>
          <S.Definition>{definition.definition}</S.Definition>
        </S.DefinitionCoreWrapper>
        {definition.examples?.map((example) => (
          <S.Example key={uuid()} fontStyle="italic">
            {example}
          </S.Example>
        ))}
        {definition.synonyms?.length && (
          <S.AdditionalWrapper>
            <Typography fontWeight="600" component="span">
              Synonyms:
            </Typography>
            <S.AdditionalTermsWrapper>
              {definition.synonyms?.map((synonym) => (
                <Typography key={uuid()} component="span">
                  {synonym}
                </Typography>
              ))}
            </S.AdditionalTermsWrapper>
          </S.AdditionalWrapper>
        )}
        {definition.antonyms?.length && (
          <S.AdditionalWrapper>
            <Typography fontWeight="600" component="span">
              Antonyms:
            </Typography>
            <S.AdditionalTermsWrapper>
              {definition.antonyms?.map((synonym) => (
                <Typography key={uuid()} component="span">
                  {synonym}
                </Typography>
              ))}
            </S.AdditionalTermsWrapper>
          </S.AdditionalWrapper>
        )}
      </S.DefinitionWrapper>
    ));
  }

  return (
    <div className="App">
      <Container maxWidth="md">
        <S.AppWrapper>
          <S.SearchWrapper>
            <TextField
              label="Search a word"
              variant="outlined"
              fullWidth
              onChange={onSearchInputHandler}
            />
            <Button variant="contained" onClick={onSearchSubmitHandler}>
              Search
            </Button>
          </S.SearchWrapper>
        </S.AppWrapper>
        <S.WordWrapper>
          {isLoading && (
            <Typography variant="h5" component="p">
              Loading...
            </Typography>
          )}
          {isError && (
            <S.Error variant="h5" component="p">
              Sorry, something went wrong
            </S.Error>
          )}
          {currentWord?.word && !isLoading && !isError && (
            <>
              <S.WordBriefWrapper>
                <Typography variant="h4" component="h1">
                  {currentWord.word}
                </Typography>
                {currentWord.transcription && (
                  <Typography variant="subtitle1" component="p">
                    [{currentWord.transcription}]
                  </Typography>
                )}
              </S.WordBriefWrapper>
              {renderWordDefinitions(currentWord.definitions)}
            </>
          )}
        </S.WordWrapper>
      </Container>
    </div>
  );
}

export default App;
