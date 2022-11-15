import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { v4 as uuid } from "uuid";
import { ILastSearchedWords } from "../../App";

interface ILastSearchedWordsProps {
  lastSearchedWords: ILastSearchedWords;
  onLastSearchedWordClickHandler: (word: string) => void;
}

export function LastSearchedWords({
  lastSearchedWords,
  onLastSearchedWordClickHandler,
}: ILastSearchedWordsProps) {
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
