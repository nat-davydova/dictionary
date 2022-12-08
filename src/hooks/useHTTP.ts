import { useState } from "react";
import { IError } from "../types";
import {
  appErrorsFromAPIMap,
  DEFAULT_ERROR,
  WORD_NOT_FOUND_ERROR,
} from "../errors";

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

interface IUseHTTP<T> {
  data: T | null;
  loadingState: LoadingState;
  errorOfHTTPRequest: IError | null;
  doHTTPRequest: (arg: IDoHTTPRequest) => Promise<void>;
}

export function useHTTP<T>(): IUseHTTP<T> {
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.INITIAL
  );
  const [errorOfHTTPRequest, setErrorOfHTTPRequest] = useState<IError | null>(
    null
  );
  const [data, setData] = useState<T | null>(null);

  async function doHTTPRequest({
    url,
    method = HTTPMethod.GET,
    headers = { "Content-type": "application/JSON" },
    body = null,
  }: IDoHTTPRequest) {
    setErrorOfHTTPRequest(null);
    setLoadingState(LoadingState.LOADING);

    try {
      const response = await fetch(url, { method, headers, body });
      const responseToJson = await response.json();
      setLoadingState(LoadingState.SUCCESS);

      if (!response.ok) {
        setLoadingState(LoadingState.ERROR);

        if (responseToJson.message === appErrorsFromAPIMap.word_not_found) {
          setErrorOfHTTPRequest(WORD_NOT_FOUND_ERROR);
        } else {
          setErrorOfHTTPRequest(DEFAULT_ERROR);
        }
      }

      setData(responseToJson);
    } catch (error) {
      setLoadingState(LoadingState.ERROR);
      setErrorOfHTTPRequest(DEFAULT_ERROR);
    }
  }

  return { data, loadingState, errorOfHTTPRequest, doHTTPRequest };
}
