import { v4 as uuid } from "uuid";
import React from "react";
import { Box, Typography } from "@mui/material";
import { AdditionalTermsList } from "../AdditionalTermsList";
import { IWordDefinition } from "../../../types";
import {
  DefinitionWrapper,
  DefinitionNumber,
  DefinitionCoreWrapper,
  PartOfSpeech,
  DefinitionTypography,
  Example,
} from "./Definition.styles";

interface IDefinitionProps {
  definition: IWordDefinition;
  number: number;
}
export function Definition({ definition, number }: IDefinitionProps) {
  return (
    <Box className={DefinitionWrapper} key={uuid()}>
      <div className={DefinitionCoreWrapper}>
        <p className={DefinitionNumber}>{number}</p>
        <Typography className={PartOfSpeech} fontStyle="italic">
          {definition.partOfSpeech}
        </Typography>
        <Typography className={DefinitionTypography}>
          {definition.definition}
        </Typography>
      </div>
      {definition.examples?.map((example) => (
        <Typography className={Example} key={uuid()} fontStyle="italic">
          {example}
        </Typography>
      ))}
      {definition.synonyms?.length && (
        <AdditionalTermsList title="Synonyms" termsList={definition.synonyms} />
      )}
      {definition.antonyms?.length && (
        <AdditionalTermsList title="Antonyms" termsList={definition.antonyms} />
      )}
    </Box>
  );
}
