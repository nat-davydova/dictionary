import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  AppWrapper,
  WordAndSidebarWrapper,
  WordContainer,
  WordWrapper,
} from "./App.styles";
import {
  IResponse,
  mapResponseToInterface,
  setLastSearchedWord,
} from "./utils";
import { IWord, IError } from "./types";
import { Footer } from "./components/Footer";
import { SearchBar } from "./components/SearchBar";
import { Loader } from "./components/Loader";
import { ErrorNotification } from "./components/ErrorNotification";
import { CurrentWord } from "./components/CurrentWord";
import { Navbar } from "./components/Navbar";
import { LastSearchedWords } from "./components/LastSearchedWords";
import { useHTTP, LoadingState, HTTPMethod } from "./hooks/useHTTP";
import { SEARCH_EMPTY_ERROR } from "./errors";

const options = {
  method: HTTPMethod.GET,
  headers: {
    "Content-type": "application/JSON",
    "X-RapidAPI-Key": import.meta.env.VITE_WORDS_API_KEY,
    "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
  },
};

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [emptySearchError, setEmptySearchError] = useState<IError | null>(null);
  const [isContentContainerVisible, setIsContentContainerVisible] =
    useState<boolean>(false);
  const { data, loadingState, errorOfHTTPRequest, doHTTPRequest } =
    useHTTP<IResponse>();

  // TODO сделать кастомный хук с локал стораджем и сюда его воткнуть с обновлением стейта
  useEffect(() => {
    console.log(data);
    if (data?.word) {
      setLastSearchedWord(data?.word);
    }
  }, [data?.word]);

  function onSearchInputHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setSearchQuery(event.target.value);
  }

  async function getWordFromApi(word: string) {
    setIsContentContainerVisible(true);

    await doHTTPRequest({
      url: `https://wordsapiv1.p.rapidapi.com/words/${word}`,
      ...options,
    });
  }

  async function onSearchSubmitHandler() {
    if (!searchQuery) {
      setEmptySearchError(SEARCH_EMPTY_ERROR);
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

  const isError = Boolean(emptySearchError || errorOfHTTPRequest);

  function renderErrorNotification() {
    if (emptySearchError) {
      return <ErrorNotification error={emptySearchError} />;
    }

    if (errorOfHTTPRequest) {
      return <ErrorNotification error={errorOfHTTPRequest} />;
    }

    return <></>;
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
                  {loadingState === LoadingState.LOADING && <Loader />}
                  {renderErrorNotification()}
                  {!isError &&
                    loadingState === LoadingState.SUCCESS &&
                    mapResponseToInterface(data)?.word && (
                      <CurrentWord currentWord={mapResponseToInterface(data)} />
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
