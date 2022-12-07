import { IError } from "../types";

export const appErrorsFromAPIMap = {
  word_not_found: "word not found",
};

export const DEFAULT_ERROR: IError = {
  title: "",
  message: "Sorry, something is wrong. Wait 10 minutes, please, and try again",
};

export const WORD_NOT_FOUND_ERROR: IError = {
  title: "Word not found",
  message: "Try to search a new word",
};

export const SEARCH_EMPTY_ERROR: IError = {
  title: "Search field is empty",
  message: "Try to type a word in it and search then",
};
