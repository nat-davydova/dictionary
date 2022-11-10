import { Typography } from "@mui/material";
import { v4 as uuid } from "uuid";
import React from "react";
import {
  AdditionalTermsWrapper,
  AdditionalWrapper,
} from "./AdditionalTermsList.styles";

interface IAdditionalTermsListProps {
  title: string;
  termsList: string[];
}

export function AdditionalTermsList({
  title,
  termsList,
}: IAdditionalTermsListProps) {
  return (
    <div className={AdditionalWrapper}>
      <Typography fontWeight="600" component="span">
        {title}:
      </Typography>
      <div className={AdditionalTermsWrapper}>
        {termsList.map((term) => (
          <Typography key={uuid()} component="span">
            {term}
          </Typography>
        ))}
      </div>
    </div>
  );
}
