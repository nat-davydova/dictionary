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

export interface IError {
  title?: string;
  message: string;
}

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentWord, setCurrentWord] = useState<IWord | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<IError | null>(null);
  const [isContentContainerVisible, setIsContentContainerVisible] =
    useState<boolean>(false);

  function onSearchInputHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setSearchQuery(event.target.value);
  }

  async function onSearchSubmitHandler() {
    setIsLoading(true);
    setError(null);
    setIsContentContainerVisible(true);

    try {
      const response = await fetch(
        `https://wordsapiv1.p.rapidapi.com/words/${searchQuery}`,
        options
      );

      const responseToJson = await response.json();

      setIsLoading(false);

      if (!response.ok) {
        if (responseToJson.message === "word not found") {
          setError({
            title: "Word not found",
            message: "Try to search a new word",
          });

          return;
        }

        setError({
          message:
            "Sorry, something is wrong. Wait 10 minutes, please, and try again",
        });
        return;
      }

      const mappedResponse = mapResponseToInterface(responseToJson);
      setCurrentWord(mappedResponse);
    } catch (e) {
      setIsLoading(false);
      setError({
        message:
          "Sorry, something is wrong. Wait 10 minutes, please, and try again",
      });
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
              {error && <ErrorNotification error={error} />}
              {currentWord?.word && !isLoading && !error && (
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
