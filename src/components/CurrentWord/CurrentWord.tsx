import { Typography } from "@mui/material";
import React from "react";
import * as S from "./CurrentWord.styles";
import { IWord, IWordDefinition } from "../../types";
import { Definition } from "./Definition";

interface ICurrentWord {
  currentWord: IWord;
}

function renderWordDefinitions(definitions?: IWordDefinition[]) {
  if (!definitions) return <></>;

  return definitions.map((definition, index) => (
    <Definition definition={definition} number={index + 1} />
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
