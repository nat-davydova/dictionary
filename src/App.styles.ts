import { createTheme } from "@mui/material";
import { css } from "@emotion/css";

const theme = createTheme();

export const AppWrapper = css`
  margin: ${theme.spacing(7)} 0;
`;

export const WordWrapper = css`
  margin-top: ${theme.spacing(4)};
  padding: ${theme.spacing(3)};
`;

export const WordAndSidebarWrapper = css`
  margin-top: 0;
`;
