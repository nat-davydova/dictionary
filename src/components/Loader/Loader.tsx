import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import * as S from "./Loader.styles";

export function Loader() {
  return (
    <S.LoaderWrapper>
      <CircularProgress />
    </S.LoaderWrapper>
  );
}
