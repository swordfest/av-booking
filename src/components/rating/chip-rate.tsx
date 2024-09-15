import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Typography } from "@mui/material";

interface Props {
  rateValue: number;
  isHovered?: boolean;
}

const ChipRate = ({rateValue, isHovered}: Props) => {
  return (
    <Box
      borderRadius={1}
      px={1}
      py={0.5}
      sx={{
        bgcolor: "#212B36",
        position: "absolute",
        top: isHovered ? "10px" : "8px",
        left: isHovered ? "10px" : "8px",
        transition: "all 0.25s ease-in-out",
        zIndex: "2",
        color: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        
      }}
    >
      <Icon icon={"solar:heart-bold"} color="red" />
      <Typography variant="subtitle2">{rateValue}</Typography>
    </Box>
  );
};

export default ChipRate;
