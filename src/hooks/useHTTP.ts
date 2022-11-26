import { useState } from "react";
import { IError } from "../types";

export enum LoadingState {
  INITIAL = "initial",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface useHTTP {
  loadingState: LoadingState;
  errorOfHTTPRequest: IError | null;
}

export function useHTTP(): useHTTP {
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.INITIAL
  );
  const [errorOfHTTPRequest, setErrorOfHTTPRequest] = useState<IError | null>(
    null
  );

  return { loadingState, errorOfHTTPRequest };
}
