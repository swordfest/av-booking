import { Box } from "@mui/material";
import Image from "next/image";

const Logo = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: {xs: "8rem", md: "10rem"}, 
        height: "5rem",
        flexShrink: 0,
      }}
    >
      <Image
        fill
        src="/logo/logo.svg"
        alt="Logo"
        style={{
        }}
      />
    </Box>
  );
};

export default Logo;
