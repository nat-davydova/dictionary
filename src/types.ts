export interface IWordDefinition {
  definition: string;
  partOfSpeech: string;
  synonyms?: string[];
  antonyms?: string[];
  examples?: string[];
}

export interface IWord {
  word: string;
  transcription?: string;
  definitions?: IWordDefinition[];
}
