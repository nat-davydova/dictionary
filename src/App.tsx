import Container from "@mui/material/Container";
import React, { useState } from "react";
import { Paper } from "@mui/material";
import { AppWrapper, WordWrapper } from "./App.styles";
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

enum WordState {
  INITIAL = "initial",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentWord, setCurrentWord] = useState<IWord | null>(null);
  const [currentWordState, setCurrentWordState] = useState<WordState>(
    WordState.INITIAL
  );
  const [error, setError] = useState<IError | null>(null);
  const [isContentContainerVisible, setIsContentContainerVisible] =
    useState<boolean>(false);

  function onSearchInputHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setSearchQuery(event.target.value);
  }

  async function onSearchSubmitHandler() {
    setIsContentContainerVisible(true);

    if (!searchQuery) {
      setError({
        title: "Search field is empty",
        message: "Try to type a word in it and search then",
      });
      return;
    }

    setCurrentWordState(WordState.LOADING);
    setError(null);

    try {
      const response = await fetch(
        `https://wordsapiv1.p.rapidapi.com/words/${searchQuery}`,
        options
      );

      const responseToJson = await response.json();

      if (!response.ok) {
        setCurrentWordState(WordState.ERROR);
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

      setCurrentWordState(WordState.SUCCESS);
      const mappedResponse = mapResponseToInterface(responseToJson);
      setCurrentWord(mappedResponse);
    } catch (e) {
      setCurrentWordState(WordState.ERROR);
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
      <div className={AppWrapper}>
        <Container maxWidth="md">
          <SearchBar
            onSearchInputHandler={onSearchInputHandler}
            onSearchKeydownHandler={onSearchKeydownHandler}
            onSearchSubmitHandler={onSearchSubmitHandler}
          />

          {isContentContainerVisible && (
            <Paper className={WordWrapper}>
              {currentWordState === WordState.LOADING && <Loader />}
              {error && <ErrorNotification error={error} />}
              {currentWordState === WordState.SUCCESS && currentWord?.word && (
                <CurrentWord currentWord={currentWord} />
              )}
            </Paper>
          )}
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
