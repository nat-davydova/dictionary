import { createTheme, styled, Typography } from "@mui/material";

const theme = createTheme();

export const Error = styled(Typography)`
  color: ${theme.palette.error.main};
` as typeof Typography;
