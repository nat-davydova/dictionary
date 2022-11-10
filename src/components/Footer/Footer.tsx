import React from "react";
import Container from "@mui/material/Container";
import { FooterWrapper } from "./Footer.styles";

export function Footer() {
  return (
    <footer className={FooterWrapper}>
      <Container maxWidth="md">
        <p>Natalia Davydova - 2022</p>
      </Container>
    </footer>
  );
}
