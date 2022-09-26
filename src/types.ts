export interface WordDefinition {
  definition: string;
  partOfSpeech: string;
  synonyms?: string[];
  antonyms?: string[];
  examples?: string[];
}

export interface Word {
  transcription?: string;
  definitions?: WordDefinition[];
}
