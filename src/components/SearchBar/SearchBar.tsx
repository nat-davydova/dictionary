import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import * as S from "./SearchBar.styles";

interface ISearchBar {
  onSearchInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchKeydownHandler: (event: React.KeyboardEvent) => void;
  onSearchSubmitHandler: () => void;
}

export function SearchBar({
  onSearchInputHandler,
  onSearchKeydownHandler,
  onSearchSubmitHandler,
}: ISearchBar) {
  return (
    <S.SearchWrapper>
      <TextField
        label="Search a word"
        variant="outlined"
        fullWidth
        onChange={onSearchInputHandler}
        onKeyDown={onSearchKeydownHandler}
      />
      <Button variant="contained" onClick={onSearchSubmitHandler}>
        Search
      </Button>
    </S.SearchWrapper>
  );
}
