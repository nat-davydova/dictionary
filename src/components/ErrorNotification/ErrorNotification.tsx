import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { IError } from "../../types";

interface IErrorProps {
  error: IError;
}

export function ErrorNotification({ error }: IErrorProps) {
  const { title, message } = error;

  return (
    <Alert severity="error">
      {title && (
        <AlertTitle>
          <strong>{title}</strong>
        </AlertTitle>
      )}
      {message}
    </Alert>
  );
}
