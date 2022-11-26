import { useState } from "react";

export enum LoadingState {
  INITIAL = "initial",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface useHTTP {
  loadingState: LoadingState;
}

export function useHTTP(): useHTTP {
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.INITIAL
  );

  return { loadingState };
}
