"use client";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import useScrollOnDragHorz from "@/lib/useScrollOnDragHorz";
import { useRef } from "react";
import { initialLodgesProps } from "@/content/content-lodges";
import CardLodge from "./card-lodge";
import { Icon } from "@iconify/react/dist/iconify.js";

const RecommendedLodges = () => {
  const stackRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;

  const handleClickLeft = () => {
    if (stackRef.current) {
      stackRef.current.scrollLeft -= 225;
    }
  };
  const handleClickRight = () => {
    if (stackRef.current) {
      stackRef.current.scrollLeft += 225;
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
          <Typography variant="h4">Alojamientos recomendados</Typography>
          <Typography variant="body1">
            Basado en tus preferencias y localización
          </Typography>
        </Stack>
        <Stack direction={"row"} borderRadius={2} overflow={"hidden"}>
          <IconButton
            title="Arrow Left"
            children={
              <Icon icon={"solar:alt-arrow-left-linear"} color="black" style={{
                
              }} />
            }
            onClick={handleClickLeft}
            size="small"
            sx={{
              visibility: { xs: "hidden", md: "visible" },
              width: "40px",
              height: "40px",
              bgcolor: "white",
              "&:hover": {
                bgcolor: "#009FA3",
              },
              borderRadius: "0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
          />
          <IconButton
            onClick={handleClickRight}
            title="Arrow Right"
            children={
              <Icon icon={"solar:alt-arrow-right-linear"} color="black" />
            }
            size="small"
            sx={{
              visibility: { xs: "hidden", md: "visible" },
              width: "40px",
              height: "40px",
              bgcolor: "white",
              "&:hover": {
                bgcolor: "white",
              },
              borderRadius: "0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
          />
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
          scrollSnapAlign: "center",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          msOverflowStyle: "none",
        }}
      >
        {initialLodgesProps.map((lod, index) => (
          <CardLodge {...lod} key={index} />
        ))}
      </Stack>
    </Box>
  );
};

export default RecommendedLodges;
