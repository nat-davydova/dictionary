import { useState } from "react";

export enum LoadingState {
  INITIAL = "initial",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export function useHTTP() {
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.INITIAL
  );

  return { wow: "wow" };
}
