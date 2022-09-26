import { Box, createTheme, styled } from "@mui/material";
import Paper from "@mui/material/Paper";

const theme = createTheme();

export const AppWrapper = styled("div")`
  margin-top: ${theme.spacing(7)};
`;

export const SearchWrapper = styled(Box)`
  display: flex;
`;

export const DefinitionWrapper = styled(Paper)`
  margin-top: 30px;
  padding: ${theme.spacing(3)};
`;
