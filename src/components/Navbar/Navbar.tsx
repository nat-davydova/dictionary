import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { ToolbarWrapper } from "./Navbar,styles";

export function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar className={ToolbarWrapper}>
          <Typography letterSpacing={1}>VocabApp</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
