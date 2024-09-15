"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ChipRate from "../rating/chip-rate";
import { useState } from "react";

interface Props {
  name: string;
  price: number;
  imageURL: string;
  rate: number;
}

const CardLodge = ({name, price, imageURL, rate}: Props) => {
  const handleClick = () => {
    alert(`You clicked on ${name}`);
    console.log("You clicked on", name);
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      sx={{
        width: "260px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        cursor: isHovered ? "pointer" : "none",
      }}
    >
      <Box
        position={"relative"}
        sx={{
          width: "260px",
          height: "260px",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <ChipRate rateValue={rate} isHovered={isHovered} />
        <Image
          fill
          src={imageURL}
          alt="Lodge"
          style={{
            transformOrigin: "center center",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.25s ease-in-out",
            background: isHovered
              ? "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 40%, rgba(0, 0, 0, 0.50) 100%)"
              : "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%)",
          }}
        />
      </Box>
      <Stack direction={"column"}>
        <Typography variant="subtitle1" fontWeight={"bold"} color="#005B7F">
          {name}
        </Typography>
        <Typography variant="caption" sx={{ textTransform: "uppercase" }}>
          Desde{" "}
          <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
            {price}
          </span>
        </Typography>
      </Stack>
    </Box>
  );
};

export default CardLodge;
