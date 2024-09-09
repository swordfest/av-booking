"use client";
import { Box, Card, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Icon } from "@iconify/react";
import ChipRate from "./chip-rate";
import { useState } from "react";

export interface lodgeProps {
  name: string;
  price: number;
  imageURL: string;
  rate: number;
}


const CardLodge = (props: lodgeProps) => {
  const handleClick = () => {
    alert(`You clicked on ${props.name}`);
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
        <ChipRate rate={props.rate} isHovered={isHovered} />
        <Image
          fill
          src={props.imageURL}
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
      <Stack direction={"column"} gap={"2px"}>
        <Typography variant="subtitle2" color="#005B7F">
          {props.name}
        </Typography>
        <Typography variant="body1">
          Desde <span style={{fontWeight: "bold"}}>{props.price}</span>
        </Typography>
      </Stack>
    </Box>
  );
};

export default CardLodge;
