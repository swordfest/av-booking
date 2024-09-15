"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export interface Props {
  imageThumbnail: string;
  categoryName: string;
}

const CardLodgeCategory = ({imageThumbnail, categoryName}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      p={2}
      color={"white"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      textTransform={"uppercase"}
      sx={{
        minWidth: "227.2px",
        width: "100%",
        height: "360px",
        display: "flex",
        alignItems: "end",
        borderRadius: "1rem",
        overflow: "hidden",
        scrollSnapAlign: "start",
        position: "relative",
        userSelect: "none",
        cursor: isHovered ? "pointer" : "none",
        transformOrigin: "center center",
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%)`,
        transition: "all 0.5s ease",
        "&:hover": {
          transformOrigin: "center center",
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 20%, rgba(0, 0, 0, 0.50) 100%)`,
          transition: "all 0.5s ease",
        },
      }}
    >
      <Image
        fill
        src={imageThumbnail as string}
        alt="thumb"
        style={{
          position: "absolute",
          zIndex: "-1",
          top: "0",
          left: "0",
          transformOrigin: "center center",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.25s ease-in-out",
        }}
      />
      <Typography fontWeight={"bold"}>{categoryName}</Typography>
    </Box>
  );
};

export default CardLodgeCategory;
