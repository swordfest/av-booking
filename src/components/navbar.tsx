import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import Logo from "./logo";

const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "96px",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
          <Stack direction="row" spacing={2} alignItems={"center"}>
            <Link href="/" underline="none">
              <Typography variant="subtitle1" color="black" fontWeight={700}>
                Inicio
              </Typography>
            </Link>
            <Link href="/" underline="none">
              <Typography variant="subtitle1" color="black" fontWeight={700}>
                Recomendados
              </Typography>
            </Link>
            <Link href="/" underline="none">
              <Typography variant="subtitle1" color="black" fontWeight={700}>
                Sobre nosotros
              </Typography>
            </Link>
            <Link href="/" underline="none">
              <Typography variant="subtitle1" color="black" fontWeight={700}>
                Contacto
              </Typography>
            </Link>
            <Button variant="text" color="primary">
              <Typography variant="subtitle1" fontWeight={700}>USD</Typography>
            </Button>
            <IconButton aria-label="">US</IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
