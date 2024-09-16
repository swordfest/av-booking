import { Button, IconButton, Link, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  // Add props here
}

const MenuDesktop = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems={"center"}
      sx={{
        display: { xs: "none", md: "flex" },
      }}
    >
      <Link href="/" underline="none">
        <Typography variant="subtitle1" color="black" fontWeight={700}>
          Inicio
        </Typography>
      </Link>
      <Link href="/" underline="none">
        <Typography variant="subtitle1" color="black" fontWeight={700}>
          Recomendados
        </Typography>
      </Link>
      <Link href="/" underline="none">
        <Typography variant="subtitle1" color="black" fontWeight={700}>
          Sobre nosotros
        </Typography>
      </Link>
      <Link href="/" underline="none">
        <Typography variant="subtitle1" color="black" fontWeight={700}>
          Contacto
        </Typography>
      </Link>
      <Button variant="text" color="primary">
        <Typography variant="subtitle1" fontWeight={700}>
          USD
        </Typography>
      </Button>
      <IconButton aria-label="">US</IconButton>
    </Stack>
  );
};

export default MenuDesktop;
