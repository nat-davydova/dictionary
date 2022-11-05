import { createTheme, styled } from "@mui/material";

const theme = createTheme();

export const AdditionalWrapper = styled("div")`
  margin-top: ${theme.spacing(1)};
`;

export const AdditionalTermsWrapper = styled("div")`
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
