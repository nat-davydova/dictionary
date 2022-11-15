import React from "react";
import {
  List,
  ListItem,
  // ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { v4 as uuid } from "uuid";
import { ILastSearchedWords } from "../../App";

interface ILastSearchedWordsProps {
  lastSearchedWords: ILastSearchedWords;
}

export function LastSearchedWords({
  lastSearchedWords,
}: ILastSearchedWordsProps) {
  return (
    <>
      <Typography component="h3" variant="h5">
        Last Searched
      </Typography>
      <List>
        {lastSearchedWords
          .map((word) => (
            <ListItem disablePadding key={uuid()}>
              <ListItemText primary={word} />
            </ListItem>
          ))
          .reverse()}
      </List>
    </>
  );
}
