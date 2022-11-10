import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { LoaderContainer } from "./Loader.styles";

export function Loader() {
  return (
    <div className={LoaderContainer}>
      <CircularProgress />
    </div>
  );
}
