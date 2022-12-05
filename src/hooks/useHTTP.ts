import { useState } from "react";
import { IError } from "../types";

export enum LoadingState {
  INITIAL = "initial",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export enum HTTPMethod {
  GET = "GET",
  POST = "POST",
}

interface IDoHTTPRequest {
  url: string;
  method?: HTTPMethod;
  headers?: Record<string, string>;
  body?: string | null;
}

interface IUseHTTP {
  loadingState: LoadingState;
  errorOfHTTPRequest: IError | null;
  doHTTPRequest: (arg: IDoHTTPRequest) => void;
}

export function useHTTP(): IUseHTTP {
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.INITIAL
  );
  const [errorOfHTTPRequest, setErrorOfHTTPRequest] = useState<IError | null>(
    null
  );

  async function doHTTPRequest({
    url,
    method = HTTPMethod.GET,
    headers = { "Content-type": "application/JSON" },
    body = null,
  }: IDoHTTPRequest) {
    setLoadingState(LoadingState.LOADING);

    try {
      const response = await fetch(url, { method, headers, body });
      const data = await response.json();
      setLoadingState(LoadingState.SUCCESS);
      return data;
    } catch (e) {
      console.log(e);
      setLoadingState(LoadingState.ERROR);
      return e;
    }
  }

  return { loadingState, errorOfHTTPRequest, doHTTPRequest };
}
