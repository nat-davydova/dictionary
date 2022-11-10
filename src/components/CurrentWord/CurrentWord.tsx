import { Typography } from "@mui/material";
import React from "react";
import { v4 as uuid } from "uuid";
import { WordBriefWrapper } from "./CurrentWord.styles";
import { IWord, IWordDefinition } from "../../types";
import { Definition } from "./Definition";

interface ICurrentWordProps {
  currentWord: IWord;
}

function renderWordDefinitions(definitions?: IWordDefinition[]) {
  if (!definitions) return <></>;

  return definitions.map((definition, index) => (
    <Definition key={uuid()} definition={definition} number={index + 1} />
  ));
}

export function CurrentWord({ currentWord }: ICurrentWordProps) {
  const { word, transcription, definitions } = currentWord;

  return (
    <>
      <div className={WordBriefWrapper}>
        <Typography variant="h4" component="h1">
          {word}
        </Typography>
        {transcription && (
          <Typography variant="subtitle1" component="p">
            [{transcription}]
          </Typography>
        )}
      </div>
      {renderWordDefinitions(definitions)}
    </>
  );
}
