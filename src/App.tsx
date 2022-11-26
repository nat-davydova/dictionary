import Container from "@mui/material/Container";
import React, { useState } from "react";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  AppWrapper,
  WordAndSidebarWrapper,
  WordContainer,
  WordWrapper,
} from "./App.styles";
import { mapResponseToInterface, setLastSearchedWord } from "./utils";
import { IWord } from "./types";
import { Footer } from "./components/Footer";
import { SearchBar } from "./components/SearchBar";
import { Loader } from "./components/Loader";
import { ErrorNotification } from "./components/ErrorNotification";
import { CurrentWord } from "./components/CurrentWord";
import { Navbar } from "./components/Navbar";
import { LastSearchedWords } from "./components/LastSearchedWords";
import { LoadingState } from "./consts";
import { useHTTP } from "./hooks/useHTTP";

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
  const [currentWordState, setCurrentWordState] = useState<LoadingState>(
    LoadingState.INITIAL
  );
  const [error, setError] = useState<IError | null>(null);
  const [isContentContainerVisible, setIsContentContainerVisible] =
    useState<boolean>(false);
  const { wow } = useHTTP();
  console.log(wow);

  function onSearchInputHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setSearchQuery(event.target.value);
  }

  async function getWordFromApi(word: string) {
    setIsContentContainerVisible(true);
    setCurrentWordState(LoadingState.LOADING);
    setError(null);

    try {
      const response = await fetch(
        `https://wordsapiv1.p.rapidapi.com/words/${word}`,
        options
      );

      const responseToJson = await response.json();

      if (!response.ok) {
        setCurrentWordState(LoadingState.ERROR);

        const ifNotFoundError = responseToJson.message === "word not found";
        const errorTitle = ifNotFoundError ? "Word not found" : "";
        const errorMessage = ifNotFoundError
          ? "Try to search a new word"
          : "Sorry, something is wrong. Wait 10 minutes, please, and try again";

        setError({
          title: errorTitle,
          message: errorMessage,
        });

        return;
      }

      setCurrentWordState(LoadingState.SUCCESS);
      const mappedResponse = mapResponseToInterface(responseToJson);
      setCurrentWord(mappedResponse);
      setLastSearchedWord(word);
    } catch (e) {
      setCurrentWordState(LoadingState.ERROR);
      setError({
        message:
          "Sorry, something is wrong. Wait 10 minutes, please, and try again",
      });
    }
  }

  async function onSearchSubmitHandler() {
    if (!searchQuery) {
      setError({
        title: "Search field is empty",
        message: "Try to type a word in it and search then",
      });
      return;
    }

    await getWordFromApi(searchQuery);
    setSearchQuery("");
  }

  function onSearchKeydownHandler(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      onSearchSubmitHandler();
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div className={AppWrapper}>
        <Container maxWidth="md">
          <SearchBar
            onSearchInputHandler={onSearchInputHandler}
            onSearchKeydownHandler={onSearchKeydownHandler}
            onSearchSubmitHandler={onSearchSubmitHandler}
            searchQuery={searchQuery}
          />
          <Grid container spacing={3} className={WordAndSidebarWrapper}>
            <Grid item xs={12} sm={8} md={9} className={WordContainer}>
              {isContentContainerVisible && (
                <Paper className={WordWrapper}>
                  {currentWordState === LoadingState.LOADING && <Loader />}
                  {error && <ErrorNotification error={error} />}
                  {!error &&
                    currentWordState === LoadingState.SUCCESS &&
                    currentWord?.word && (
                      <CurrentWord currentWord={currentWord} />
                    )}
                </Paper>
              )}
            </Grid>
            <Grid item xs={8} sm={4} md={3}>
              <aside>
                <LastSearchedWords
                  onLastSearchedWordClickHandler={getWordFromApi}
                />
              </aside>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
