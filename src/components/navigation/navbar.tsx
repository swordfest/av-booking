import { Box, Container } from "@mui/material";
import Logo from "../logo";
import MenuDesktop from "../menu/menu-desktop";
import MenuMobile from "../menu/menu-mobile";

const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: {xs: "56px", md: "96px"},
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid #E5E5E5",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          bgcolor: "white",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Logo />
          <MenuDesktop />
          <MenuMobile/>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
