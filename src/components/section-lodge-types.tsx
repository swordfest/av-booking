"use client";
import { Box, IconButton, Stack } from "@mui/material";
import { useRef } from "react";
import CardLodgeType from "./card-lodge-type";
import { initialCategoryProps } from "@/content/content-lodge-categories";
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
        >
          <Icon icon={"solar:alt-arrow-left-linear"} color="black" />
        </IconButton>
        <IconButton
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
        >
          <Icon icon={"solar:alt-arrow-right-linear"} color="black" />
        </IconButton>
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
          {initialCategoryProps.map((cat, index) => (
            <CardLodgeType {...cat} key={index} />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default LodgeTypes;
