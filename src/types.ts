export interface WordDefinition {
  definition: string;
  partOfSpeech: string;
  synonyms?: string[];
  antonyms?: string[];
  examples?: string[];
}

export interface Word {
  word: string;
  transcription?: string;
  definitions?: WordDefinition[];
}
