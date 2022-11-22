import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { v4 as uuid } from "uuid";
import { getLastSearchedWords } from "../../utils";

interface ILastSearchedWordsProps {
  onLastSearchedWordClickHandler: (word: string) => void;
}

export function LastSearchedWords({
  onLastSearchedWordClickHandler,
}: ILastSearchedWordsProps) {
  const lastSearchedWords = getLastSearchedWords();

  return (
    <>
      <Typography component="h3" variant="h5">
        Last Searched
      </Typography>
      <List>
        {lastSearchedWords &&
          lastSearchedWords
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
