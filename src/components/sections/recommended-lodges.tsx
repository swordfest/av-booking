"use client";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useRef } from "react";
import { _lodgesList } from "@/_mock/_lodges";
import CardLodge from "../card/card-lodge";
import { Icon } from "@iconify/react/dist/iconify.js";

const RecommendedLodges = () => {
  const stackRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;

  const handleClickLeft = () => {
    if (stackRef.current) {
      stackRef.current.scrollLeft -= 276;
    }
  };
  const handleClickRight = () => {
    if (stackRef.current) {
      stackRef.current.scrollLeft += 276;
    }
  };
  return (
    <Box
      title="Offers"
      component="section"
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Stack direction="column">
          <Typography variant="h4" fontWeight={"700"}>
            Alojamientos recomendados
          </Typography>
          <Typography variant="body1">
            Basado en tus preferencias y localización
          </Typography>
        </Stack>
        <Stack direction={"row"} borderRadius={2} overflow={"hidden"}>
          <IconButton
            title="Arrow Left"
            onClick={handleClickLeft}
            size="small"
            sx={{
              visibility: { xs: "hidden", md: "visible" },
              width: "40px",
              height: "40px",
              bgcolor: "white",
              color: "black",
              "&:hover": {
                bgcolor: "#009FA3",
                color: "white",
              },
              borderRadius: "0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <Icon icon={"solar:alt-arrow-left-linear"} />
          </IconButton>
          <IconButton
            onClick={handleClickRight}
            title="Arrow Right"
            size="small"
            sx={{
              visibility: { xs: "hidden", md: "visible" },
              width: "40px",
              height: "40px",
              bgcolor: "white",
              color: "black",
              "&:hover": {
                bgcolor: "#009FA3",
                color: "white",
              },
              borderRadius: "0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <Icon icon={"solar:alt-arrow-right-linear"} />
          </IconButton>
        </Stack>
      </Stack>
      <Stack
        ref={stackRef}
        direction={"row"}
        spacing={2}
        sx={{
          overflowX: "auto",
          scrollSnapType: { xs: "none", md: "x" },
          scrollBehavior: "smooth",
          scrollSnapAlign: "start",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          msOverflowStyle: "none",
        }}
      >
        {_lodgesList.map((lod, index) => (
          <CardLodge {...lod} key={index} />
        ))}
      </Stack>
    </Box>
  );
};

export default RecommendedLodges;
