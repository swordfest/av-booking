import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Articles = () => {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "100%",
        height: "640px",
        borderRadius: "1rem",
        overflow: "hidden",
        display: "grid",
        "& > *": {
          gridArea: "1 / 1",
        },
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: "640px" }}>
        <Image
          fill
          objectFit="cover"
          src={"/images/banner-articles.png"}
          alt="Articles"
        />
      </Box>
      <Box
        sx={{
          width: "600px",
          height: "278px",
          p: 3,
          bgcolor: "rgba(255, 255, 255, 70%)",
          backdropFilter: "blur(16px)",
          borderRadius: 2,
          // alignSelf: "end",
          // justifySelf: "start",
          placeSelf: "end start",
          inset: "-2rem 2rem",
          position: "relative",
        }}
      >
        <Stack direction={"column"} spacing={3}>
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
          <Box>
            <Button
              size="large"
              fullWidth={false}
              sx={{
                p: 1,
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
