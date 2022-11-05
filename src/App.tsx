import Container from "@mui/material/Container";
import React, { useState } from "react";
import * as S from "./App.styles";
import { mapResponseToInterface } from "./utils";
import { IWord } from "./types";
import { Footer } from "./components/Footer";
import { SearchBar } from "./components/SearchBar";
import { Loader } from "./components/Loader";
import { ErrorNotification } from "./components/ErrorNotification";
import { CurrentWord } from "./components/CurrentWord";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_WORDS_API_KEY,
    "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
  },
};

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentWord, setCurrentWord] = useState<IWord | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isContentContainerVisible, setIsContentContainerVisible] =
    useState<boolean>(false);

  function onSearchInputHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setSearchQuery(event.target.value);
  }

  async function onSearchSubmitHandler() {
    setIsLoading(true);
    setIsError(false);
    setIsContentContainerVisible(true);

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

  function onSearchKeydownHandler(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      onSearchSubmitHandler();
    }
  }

  return (
    <div className="App">
      <S.AppWrapper>
        <Container maxWidth="md">
          <SearchBar
            onSearchInputHandler={onSearchInputHandler}
            onSearchKeydownHandler={onSearchKeydownHandler}
            onSearchSubmitHandler={onSearchSubmitHandler}
          />

          {isContentContainerVisible && (
            <S.WordWrapper>
              {isLoading && <Loader />}
              {isError && <ErrorNotification />}
              {currentWord?.word && !isLoading && !isError && (
                <CurrentWord currentWord={currentWord} />
              )}
            </S.WordWrapper>
          )}
        </Container>
      </S.AppWrapper>
      <Footer />
    </div>
  );
}

export default App;
