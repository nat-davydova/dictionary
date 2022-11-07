import { Typography } from "@mui/material";
import { v4 as uuid } from "uuid";
import React from "react";
import * as S from "./AdditionalTermsList.styles";

interface IAdditionalTermsListProps {
  title: string;
  termsList: string[];
}

export function AdditionalTermsList({
  title,
  termsList,
}: IAdditionalTermsListProps) {
  return (
    <S.AdditionalWrapper>
      <Typography fontWeight="600" component="span">
        {title}:
      </Typography>
      <S.AdditionalTermsWrapper>
        {termsList.map((term) => (
          <Typography key={uuid()} component="span">
            {term}
          </Typography>
        ))}
      </S.AdditionalTermsWrapper>
    </S.AdditionalWrapper>
  );
}
