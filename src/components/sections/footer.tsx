"use client";
import { FacebookRounded, Twitter, YouTube } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Fa6BrandsCcVisa from "../icons/icon-visa";
import Fa6BrandsCcMastercard from "../icons/icon-mastercard";
import Fa6BrandsCcDiscover from "../icons/icon-discover";
import Fa6BrandsCcPaypal from "../icons/icon-paypal";
import Fa6BrandsCcJcb from "../icons/icon-jcb";
import Logo from "../logo";

const Footer = () => {
  return (
    <Box
      pt={1}
      pb={3}
      sx={{
        width: "100%",
        height: { xs: "auto", md: "auto" },
        bgcolor: "white",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        borderTop: "1px solid #E5E5E5",
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={"column"} spacing={10} p={{ xs: 3, md: 0 }}>
          <Stack direction={"column"}>
            <Stack direction={"row"} spacing={1} width={"100%"}>
              <Logo />
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2, md: 0 }}
              alignItems={"start"}
              justifyContent={"space-between"}
              sx={{
                width: "100%",
              }}
            >
              <Stack direction={"column"} spacing={1}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#009FA3" }}
                >
                  Support
                </Typography>
                <Typography variant="body1" sx={{}}>
                  Help Center
                </Typography>
                <Typography variant="body1" sx={{}}>
                  Safety information
                </Typography>
                <Typography variant="body1" sx={{}}>
                  Cancellation options
                </Typography>
              </Stack>
              <Stack direction={"column"} spacing={1}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#009FA3" }}
                >
                  Company
                </Typography>
                <Typography variant="body1" sx={{}}>
                  About us
                </Typography>
                <Typography variant="body1" sx={{}}>
                  Privacy policy
                </Typography>
                <Typography variant="body1" sx={{}}>
                  Community Blog
                </Typography>
                <Typography variant="body1" sx={{}}>
                  Terms of service
                </Typography>
              </Stack>
              <Stack direction={"column"} spacing={1}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#009FA3" }}
                >
                  Contact
                </Typography>
                <Typography variant="body1" sx={{}}>
                  FAQ
                </Typography>
                <Typography variant="body1" sx={{}}>
                  Get in touch
                </Typography>
                <Typography variant="body1" sx={{}}>
                  Community Blog
                </Typography>
                <Typography variant="body1" sx={{}}>
                  Partnerships
                </Typography>
              </Stack>
              <Stack direction={"column"} spacing={1}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#009FA3" }}
                >
                  Social
                </Typography>
                <Stack direction={"row"} spacing={1}>
                  <FacebookRounded sx={{ color: "#009FA3" }} />
                  <Twitter sx={{ color: "#009FA3" }} />
                  <YouTube sx={{ color: "#009FA3" }} />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            py={1}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              background:
                "linear-gradient(90deg, #FFF 0%, #E0E1E2 50.5%, #FFF 100%)",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              © Avangenio 2024
            </Typography>
            <Fa6BrandsCcVisa />
            <Fa6BrandsCcMastercard />
            <Fa6BrandsCcDiscover />
            <Fa6BrandsCcPaypal />
            <Fa6BrandsCcJcb />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
