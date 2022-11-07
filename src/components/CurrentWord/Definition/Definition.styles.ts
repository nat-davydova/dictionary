import { Box, createTheme, styled, Typography } from "@mui/material";

const theme = createTheme();

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

export const PartOfSpeech = styled(Typography)`
  color: ${theme.palette.grey["500"]};
`;

export const Definition = styled(Typography)`
  display: inline;
`;

export const Example = styled(Typography)`
  margin-top: ${theme.spacing(0.5)};
`;
