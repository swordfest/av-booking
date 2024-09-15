"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Hero = () => {
  return (
    <Box
      component={"section"}
      title="banner"
      pt={4}
      pb={1}
      sx={{
        position: "relative",
        maxWidth: "100%",
        height: "auto",
        display: "grid",
        "& > *": {
          gridArea: "1 / 1",
        },
        margin: "auto auto",
        transformOrigin: "center center",
        transform: "scale(1)",
        transition: "all 0.6s ease",
        "&:hover": {
          maxWidth: "99%",
          transformOrigin: "center center",
          transform: "scale(0.99)",
          transition: "all 0.6s ease",
          "& .arrow": {
            transformOrigin: "center center",
            transform: "translateX(4px)",
            transition: "transform 0.25s ease-in-out",
          },
        },

        cursor: "pointer",
      }}
    >
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
          style={{}}
        />
      </Box>
      <Stack
        direction={{ xs: "row", md: "column" }}
        alignItems={"center"}
        spacing={{ xs: "8vw", md: 2 }}
        sx={{
          position: "relative",
          alignSelf: "center",
          justifySelf: "start",
          inset: "0px 0px 0px 30px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "14rem", md: "26rem" },
            height: { xs: "100px", md: "195px" },
          }}
        >
          <Image alt="" fill src={"/assets/illustrations/verano-banner.svg"} />
        </Box>
        <Button
          variant={"text"}
          disableElevation
          fullWidth={false}
          endIcon={
            <Icon
              width={32}
              className="arrow"
              icon={"solar:arrow-right-linear"}
              color="white"
              style={{
                transformOrigin: "center center",
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
      >
        <Icon icon={"solar:arrow-right-linear"} color="black" />
      </IconButton>
    </Box>
  );
};

export default Hero;
