import { createTheme } from "@mui/material";
import { css } from "@emotion/css";

const theme = createTheme();

export const FooterWrapper = css`
  margin-top: auto;
  padding: ${theme.spacing(2)} 0;
  color: ${theme.palette.primary.contrastText};
  text-align: center;
  background-color: ${theme.palette.grey["900"]};

  p {
    margin-top: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
