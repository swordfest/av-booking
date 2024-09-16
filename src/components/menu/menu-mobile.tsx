"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const MenuMobile = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        display: { xs: "grid", md: "none" },
        "& > *": {
          gridArea: 1 / 1,
        },
      }}
    >
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 3,
          display: { xs: "flex", md: "none" },
        }}
      >
        <Icon width={24} color="#009fa3" icon="solar:hamburger-menu-linear" />
      </IconButton>

      <Box
        sx={{
          width: "100%",
          height: open ? "100vh" : "0vh",
          bgcolor: "white",
          position: "fixed",
          zIndex: "10",
          placeSelf: "start end",
          inset: "0px 0px 0px 0px",
          visibility: open ? "visible" : "hidden",
          transformOrigin: "top center",
          transition: "all 0.3s ease",
          overflow: "hidden",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            height: "56px",
            borderBottom: "1px solid #e2e2e2",
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              bgcolor: "white",
              height: "100%",
            }}
          >
            <Stack
              direction={"row"}
              height={"100%"}
              sx={{
                pr: 2,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">Menu</Typography>
              <IconButton onClick={handleClose}>
                <Icon width={24} color="#009fa3" icon="mingcute:close-line" />
              </IconButton>
            </Stack>
          </Container>
        </Stack>
        <Container
          maxWidth="lg"
          sx={{
            bgcolor: "white",
            height: "100%",
          }}
        >
          <Stack direction={"column"} py={2}>
            <Box sx={{ p: 2, borderRadius: 2 }}>
              <Link href={"#"}>
                <Typography
                  variant="subtitle1"
                  fontWeight={"bold"}
                  color="#009fa3"
                >
                  USD • United States Dollar
                </Typography>
              </Link>
            </Box>
            <Box sx={{ p: 2, borderRadius: 2 }}>
              <Link href={"#"}>
                <Typography variant="subtitle1" fontWeight={"bold"}>
                  Inicio
                </Typography>
              </Link>
            </Box>
            <Box sx={{ p: 2, borderRadius: 2 }}>
              <Link href={"#"}>
                <Typography variant="subtitle1" fontWeight={"bold"}>
                  Recomendados
                </Typography>
              </Link>
            </Box>
            <Box sx={{ p: 2, borderRadius: 2 }}>
              <Link href={"#"}>
                <Typography variant="subtitle1" fontWeight={"bold"}>
                  Sobre nosotros
                </Typography>
              </Link>
            </Box>
            <Box sx={{ p: 2, borderRadius: 2 }}>
              <Link href={"#"}>
                <Typography variant="subtitle1" fontWeight={"bold"}>
                  Contacto
                </Typography>
              </Link>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default MenuMobile;
