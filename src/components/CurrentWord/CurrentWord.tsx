import { Typography } from "@mui/material";
import React from "react";
import { v4 as uuid } from "uuid";
import * as S from "./CurrentWord.styles";
import { IWord, IWordDefinition } from "../../types";

interface ICurrentWord {
  currentWord: IWord;
}

function renderWordDefinitions(definitions?: IWordDefinition[]) {
  if (!definitions) return <></>;

  return definitions.map((definition, index) => (
    <S.DefinitionWrapper key={uuid()}>
      <S.DefinitionCoreWrapper>
        <S.DefinitionNumber>{index + 1}</S.DefinitionNumber>
        <S.PartOfSpeech fontStyle="italic">
          {definition.partOfSpeech}
        </S.PartOfSpeech>
        <S.Definition>{definition.definition}</S.Definition>
      </S.DefinitionCoreWrapper>
      {definition.examples?.map((example) => (
        <S.Example key={uuid()} fontStyle="italic">
          {example}
        </S.Example>
      ))}
      {definition.synonyms?.length && (
        <S.AdditionalWrapper>
          <Typography fontWeight="600" component="span">
            Synonyms:
          </Typography>
          <S.AdditionalTermsWrapper>
            {definition.synonyms?.map((synonym) => (
              <Typography key={uuid()} component="span">
                {synonym}
              </Typography>
            ))}
          </S.AdditionalTermsWrapper>
        </S.AdditionalWrapper>
      )}
      {definition.antonyms?.length && (
        <S.AdditionalWrapper>
          <Typography fontWeight="600" component="span">
            Antonyms:
          </Typography>
          <S.AdditionalTermsWrapper>
            {definition.antonyms?.map((synonym) => (
              <Typography key={uuid()} component="span">
                {synonym}
              </Typography>
            ))}
          </S.AdditionalTermsWrapper>
        </S.AdditionalWrapper>
      )}
    </S.DefinitionWrapper>
  ));
}

export function CurrentWord({ currentWord }: ICurrentWord) {
  const { word, transcription, definitions } = currentWord;

  return (
    <>
      <S.WordBriefWrapper>
        <Typography variant="h4" component="h1">
          {word}
        </Typography>
        {transcription && (
          <Typography variant="subtitle1" component="p">
            [{transcription}]
          </Typography>
        )}
      </S.WordBriefWrapper>
      {renderWordDefinitions(definitions)}
    </>
  );
}
