import { createTheme, styled } from "@mui/material";

const theme = createTheme();

export const Footer = styled("footer")`
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
