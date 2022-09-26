import { Word } from "./types";

export function mapResponseToInterface(response: any) {
  const mappedData: Word = {};

  mappedData.transcription = response?.pronunciation?.all;

  mappedData.definitions = response?.results?.map((definition: any) => {
    return {
      definition: definition?.definition,
      partOfSpeech: definition?.partOfSpeech,
      examples: definition?.examples,
      synonyms: definition?.synonyms,
      antonyms: definition?.antonyms,
    };
  });

  return mappedData;
}
