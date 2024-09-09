"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Box
      component={"section"}
      title="banner"
      pt={4}
      pb={1}
      sx={{
        position: "relative",
        width: "100%",
        height: "auto",
        display: "flex",
      }}
    >
      <Stack
        direction={{ xs: "row", md: "column" }}
        alignItems={"center"}
        spacing={{ xs: '8vw', md: 2 }}
        sx={{
          zIndex: 3,
          position: "absolute",
          top: { xs: "8%", md: "25%" },
          left: "40px",
          }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "14rem", md: "26rem" },
            height: "195px",
          }}
        >
          <Image alt="" fill src={"/assets/illustrations/verano-banner.svg"} />
        </Box>
        <Button
          variant={"text"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          disableElevation
          fullWidth={false}
          endIcon={
            <Icon
              width={32}
              icon={"solar:arrow-right-linear"}
              color="white"
              style={{
                transformOrigin: "center center",
                transform: isHovered ? "translateX(4px)" : "",
                transition: "transform 0.25s ease-in-out",
              }}
            />
          }
          sx={{
            display: { xs: "none", md: "flex" },
            color: "white",
            minWidth: "8rem",
            textTransform: "none",
            borderRadius: "8px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant={"h5"} fontWeight={"medium"}>
            Explorar más
          </Typography>
        </Button>
      </Stack>
        <IconButton
          title="Arrow Right"
          children={<Icon icon={"solar:arrow-right-linear"} color="black" />}
          sx={{
            position: "absolute",
            visibility: { xs: "visible", md: "hidden" },
            width: "40px",
            height: "40px",
            bgcolor: "#FFD644",
            "&:hover": {
              bgcolor: "white",
            },
            top: "45%",
            right: "40px",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
          }}
        />
      <Box
        maxWidth={"lg"}
        width={"100%"}
        height={{ xs: "10rem", md: "30rem" }}
        borderRadius={3}
        sx={{
          position: "relative",
          overflowY: "hidden",
        }}
      >
        <Image
          fill
          objectFit="cover"
          src="/assets/images/banner.png"
          alt="Banner"
        />
      </Box>
    </Box>
  );
};

export default Hero;
