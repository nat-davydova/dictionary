import { v4 as uuid } from "uuid";
import React from "react";
import * as S from "./Definition.styles";
import { AdditionalTermsList } from "../AdditionalTermsList";
import { IWordDefinition } from "../../../types";

interface IDefinition {
  definition: IWordDefinition;
  number: number;
}
export function Definition({ definition, number }: IDefinition) {
  return (
    <S.DefinitionWrapper key={uuid()}>
      <S.DefinitionCoreWrapper>
        <S.DefinitionNumber>{number}</S.DefinitionNumber>
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
        <AdditionalTermsList title="Synonyms" termsList={definition.synonyms} />
      )}
      {definition.antonyms?.length && (
        <AdditionalTermsList title="Antonyms" termsList={definition.antonyms} />
      )}
    </S.DefinitionWrapper>
  );
}
