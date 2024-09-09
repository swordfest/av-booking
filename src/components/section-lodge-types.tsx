"use client";
import useScrollOnDragHorz from "@/lib/useScrollOnDragHorz";
import { Box, Button, IconButton, Slide, Stack } from "@mui/material";
import { useRef, useState } from "react";
import CardLodgeType from "./card-lodge-type";
import { initialCategoryProps } from "@/content/content-lodge-categories";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import { Icon } from "@iconify/react/dist/iconify.js";

const LodgeTypes = () => {
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
    <>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <IconButton
          title="Arrow Left"
          children={<Icon icon={"solar:alt-arrow-left-linear"} color="black" />}
          onClick={handleClickLeft}
          sx={{
            position: "absolute",
            visibility: { xs: "hidden", md: "visible" },
            width: "40px",
            height: "40px",
            bgcolor: "white",
            "&:hover": {
              bgcolor: "white",
            },
            top: "45%",
            left: "-1.5%",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
          }}
        />
        <IconButton
          children={
            <Icon icon={"solar:alt-arrow-right-linear"} color="black" />
          }
          onClick={handleClickRight}
          title="Arrow Right"
          sx={{
            position: "absolute",
            visibility: { xs: "hidden", md: "visible" },
            width: "40px",
            height: "40px",
            bgcolor: "white",
            "&:hover": {
              bgcolor: "white",
            },
            top: "45%",
            right: "-1.5%",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
          }}
        />
        <Stack
          // {...events}
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
          {initialCategoryProps.map((cat, index) => (
            <CardLodgeType {...cat} key={index} />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default LodgeTypes;
