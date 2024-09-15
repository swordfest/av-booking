import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  imageUrl: string;
  destinationName: string;
  destinationArea: string;
}

const CardPlanningTrip = ({
  imageUrl,
  destinationName,
  destinationArea,
}: Props) => {
  return (
    <Box
      //   onClick={handleClick}
      sx={{
        width: "260px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        cursor: "pointer",
        "&:hover": {
          "& .name": {
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            textDecorationThickness: "2px",
            
          }
        }
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
        <Image
          fill
          src={imageUrl}
          alt="Lodge"
          style={{
            transformOrigin: "center center",
            // transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.25s ease-in-out",
          }}
        />
      </Box>
      <Stack direction={"column"}>
        <Typography className="name" variant="subtitle1" fontWeight={"bold"} color="#005B7F">
          {destinationName}
        </Typography>
        <Typography variant="caption" sx={{ textTransform: "uppercase" }}>
          {destinationArea}
        </Typography>
      </Stack>
    </Box>
  );
};

export default CardPlanningTrip;
