import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import { Box } from "@mui/material";
import { SearchWrapper } from "./SearchBar.styles";

interface ISearchBarProps {
  onSearchInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchKeydownHandler: (event: React.KeyboardEvent) => void;
  onSearchSubmitHandler: () => void;
  searchQuery: string;
}

export function SearchBar({
  onSearchInputHandler,
  onSearchKeydownHandler,
  onSearchSubmitHandler,
  searchQuery,
}: ISearchBarProps) {
  return (
    <Box className={SearchWrapper}>
      <TextField
        label="Search a word"
        variant="outlined"
        fullWidth
        onChange={onSearchInputHandler}
        onKeyDown={onSearchKeydownHandler}
        value={searchQuery}
      />
      <Button variant="contained" onClick={onSearchSubmitHandler}>
        Search
      </Button>
    </Box>
  );
}
