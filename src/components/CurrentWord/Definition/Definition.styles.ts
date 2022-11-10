import { createTheme } from "@mui/material";
import { css } from "@emotion/css";

const theme = createTheme();

export const DefinitionWrapper = css`
  &:not(:last-child) {
    margin-bottom: ${theme.spacing(2)};
  }
`;

export const DefinitionNumber = css`
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

export const DefinitionCoreWrapper = css`
  & > *:not(:last-child) {
    display: inline-flex;
    margin-right: ${theme.spacing(1)};
  }
`;

export const PartOfSpeech = css`
  color: ${theme.palette.grey["500"]};
`;

export const DefinitionTypography = css`
  display: inline;
`;

export const Example = css`
  margin-top: ${theme.spacing(0.5)};
`;
