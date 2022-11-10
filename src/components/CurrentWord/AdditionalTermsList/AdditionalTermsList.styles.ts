import { createTheme } from "@mui/material";
import { css } from "@emotion/css";

const theme = createTheme();

export const AdditionalWrapper = css`
  margin-top: ${theme.spacing(1)};
`;

export const AdditionalTermsWrapper = css`
  display: inline;
  margin-left: ${theme.spacing(0.5)};

  & > * {
    display: inline-flex;
  }

  & > *:not(:last-child) {
    margin-right: ${theme.spacing(0.5)};

    &:after {
      content: ",";
    }
  }
`;
