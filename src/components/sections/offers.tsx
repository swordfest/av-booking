import { Box, Card, Stack, Typography } from "@mui/material";
import CardOffer from "@/components/card/card-offer";
import { cardOne, cardTwo } from "@/_mock/_offers";
import { orange } from "@mui/material/colors";
const Offers = () => {
  return (
    <Box
      title="Offers"
      component={"section"}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
    >
      <Stack direction={"column"}>
        <Typography variant="h4" fontWeight={"700"}>
          Ofertas
        </Typography>
        <Typography variant="body1">Promociones y ofertas para ti</Typography>
      </Stack>
      <Stack maxWidth={"lg"} direction={{ md: "row", lg: "row" }} gap={2}>
        <CardOffer {...cardOne} />
        <CardOffer {...cardTwo} />
      </Stack>
      <Card
        sx={{
          width: "20%",
          backgroundColor: "orange",
          cursor: "pointer",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              py: 2,
              px: 2.5,
              height: "auto",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              fontWeight={600}
              fontSize={"18px"}
              margin={0}
              sx={{
                color: "white",
                lineHeight: "90%",
              }}
            >
              Nave 1
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              fontWeight={500}
              fontSize={"48px"}
              margin={0}
              sx={{
                color: "white",
                lineHeight: "75%",
              }}
            >
              78%
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Offers;
