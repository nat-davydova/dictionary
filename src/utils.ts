import { IWord, IWordDefinition } from "./types";

interface IResponse {
  pronunciation: {
    all: string;
  };
  word: string;
  results: IWordDefinition[];
}

export function mapResponseToInterface(response: IResponse) {
  const mappedData: IWord = {
    word: "",
  };

  mappedData.transcription = response?.pronunciation?.all;
  mappedData.word = response?.word;

  mappedData.definitions = response?.results?.map(
    (definition: IWordDefinition) => {
      return {
        definition: definition?.definition,
        partOfSpeech: definition?.partOfSpeech,
        examples: definition?.examples,
        synonyms: definition?.synonyms,
        antonyms: definition?.antonyms,
      };
    }
  );

  return mappedData;
}

export function getLastSearchedWords() {
  const lastSearchedWordsStringified =
    window.localStorage.getItem("lastSearchedWords");
  return lastSearchedWordsStringified
    ? lastSearchedWordsStringified.split(",")
    : [];
}

export function setLastSearchedWord(word: string) {
  const prevWords =
    window.localStorage.getItem("lastSearchedWords")?.split(",") || [];
  const updatedWords = [...new Set([...prevWords, word])];
  const updatedWordsStringified = updatedWords.join(",");
  window.localStorage.setItem("lastSearchedWords", updatedWordsStringified);
  return updatedWords;
}
