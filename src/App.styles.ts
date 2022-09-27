import { Box, createTheme, Stack, styled, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

const theme = createTheme();

export const AppWrapper = styled("div")`
  margin-top: ${theme.spacing(7)};
`;

export const SearchWrapper = styled(Box)`
  display: flex;
`;

export const WordWrapper = styled(Paper)`
  margin-top: ${theme.spacing(4)};
  padding: ${theme.spacing(3)};
`;

export const DefinitionWrapper = styled(Box)`
  &:not(:last-child) {
    margin-bottom: ${theme.spacing(2)};
  }
`;

export const DefinitionNumber = styled("p")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 0;
  flex-shrink: 0;
  color: ${theme.palette.common.white};
  text-align: center;
  border-radius: 50%;
  background-color: ${theme.palette.primary.main};
`;

export const DefinitionCoreWrapper = styled("div")`
  & > *:not(:last-child) {
    display: inline-flex;
    margin-right: ${theme.spacing(1)};
  }
`;

export const Transcription = styled(Typography)`
  margin-bottom: ${theme.spacing(3)};
` as typeof Typography;

export const PartOfSpeech = styled(Typography)`
  color: ${theme.palette.grey["500"]};
`;

export const Definition = styled(Typography)`
  display: inline;
`;

export const Example = styled(Typography)`
  margin-top: ${theme.spacing(0.5)};
`;

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
