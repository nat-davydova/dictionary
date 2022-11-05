import { Typography } from "@mui/material";
import { v4 as uuid } from "uuid";
import React from "react";
import * as S from "./AdditionalTermsList.styles";

interface IAdditionalTermsList {
  title: string;
  termsList: string[];
}

export function AdditionalTermsList({
  title,
  termsList,
}: IAdditionalTermsList) {
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
