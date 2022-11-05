import { createTheme, styled } from "@mui/material";
import Paper from "@mui/material/Paper";

const theme = createTheme();

export const AppWrapper = styled("div")`
  margin: ${theme.spacing(7)} 0;
`;

export const WordWrapper = styled(Paper)`
  margin-top: ${theme.spacing(4)};
  padding: ${theme.spacing(3)};
`;
