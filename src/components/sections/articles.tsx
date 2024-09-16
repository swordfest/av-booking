import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Articles = () => {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "100%",
        height: { xs: "auto", lg: "640px" },
        p: { xs: "1rem", md: "0px" },
        border: { xs: "2px solid #ededed", md: "none" },
        borderRadius: "1rem",
        overflow: "hidden",
        display: { xs: "flex", md: "grid" },
        flexDirection: "column",
        gap: { xs: "2rem", md: "0" },
        "& > *": {
          gridArea: "1 / 1",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "292px", md: "640px" },
          borderRadius: { xs: "0.5rem", md: "0px" },
          overflow: "hidden",
        }}
      >
        <Image
          fill
          objectFit="cover"
          src={"/images/banner-articles.png"}
          alt="Articles"
        />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "600px" },
          height: "278px",
          p: { xs: 0, md: 3 },
          bgcolor: { xs: "transparent", md: "rgba(255, 255, 255, 70%)" },
          backdropFilter: { xs: "blur(0px)", md: "blur(7.5px)" },
          borderRadius: 2,
          placeSelf: { xs: "center center", md: "end start" },
          inset: { xs: "0px", md: "-2rem 2rem" },
          position: "relative",
        }}
      >
        <Stack direction={"column"} spacing={{ xs: 2, md: 3 }}>
          <Stack direction={"column"} spacing={2}>
            <Typography variant="h4">
              10 destinos recomendados en la temporada
            </Typography>
            <Typography variant="body2">
              Desde playas paradisíacas en Varadero hasta la vibrante cultura de
              La Habana, disfruta de exclusivos hoteles y experiencias
              inolvidables. ¡Reserva ahora y vive unas vacaciones perfectas en
              el paraíso cubano!
            </Typography>
          </Stack>
          <Box width={{ xs: "100%", md: "auto" }}>
            <Button
              size="large"
              fullWidth
              sx={{
                p: 1,
                maxWidth: { xs: "100%", md: "50%" },
                bgcolor: "#009FA3",
                color: "white",
                textTransform: "none",
              }}
            >
              Mira nuestra selección
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Articles;
