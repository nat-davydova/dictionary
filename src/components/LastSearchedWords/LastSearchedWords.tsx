import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { v4 as uuid } from "uuid";

interface ILastSearchedWordsProps {
  onLastSearchedWordClickHandler: (word: string) => void;
}

export function LastSearchedWords({
  onLastSearchedWordClickHandler,
}: ILastSearchedWordsProps) {
  const lastSearchedWordsStringified =
    window.localStorage.getItem("lastSearchedWords");
  const lastSearchedWords = lastSearchedWordsStringified?.split(",");
  const uniqueSearchedWords = [...new Set(lastSearchedWords)];

  return (
    <>
      <Typography component="h3" variant="h5">
        Last Searched
      </Typography>
      <List>
        {uniqueSearchedWords
          .map((word) => (
            <ListItem disablePadding key={uuid()}>
              <ListItemButton
                onClick={() => onLastSearchedWordClickHandler(word)}
              >
                <ListItemText primary={word} />
              </ListItemButton>
            </ListItem>
          ))
          .reverse()}
      </List>
    </>
  );
}
