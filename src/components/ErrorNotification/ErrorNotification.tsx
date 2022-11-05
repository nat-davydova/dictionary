import React from "react";
import * as S from "./ErrorNotification.styles";

export function ErrorNotification() {
  return (
    <S.Error variant="h5" component="p">
      Sorry, something went wrong
    </S.Error>
  );
}
