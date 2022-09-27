import { Box, createTheme, styled, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

const theme = createTheme();

export const AppWrapper = styled("div")`
  margin-top: ${theme.spacing(7)};
`;

export const SearchWrapper = styled(Box)`
  display: flex;
`;

export const WordWrapper = styled(Paper)`
  margin-top: 30px;
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

export const PartOfSpeech = styled(Typography)`
  color: ${theme.palette.grey["500"]};
`;
