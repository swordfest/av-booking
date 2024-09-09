import { Box } from "@mui/material";
import Image from "next/image";

const Logo = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "10rem",
        height: "5rem",
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
