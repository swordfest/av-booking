import { Box, Stack, Typography } from "@mui/material";
import CardOffer from "@/components/card/card-offer";
import { cardOne, cardTwo } from "@/_mock/_offers";
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
        <Typography variant="h4" fontWeight={"700"}>Ofertas</Typography>
        <Typography variant="body1">Promociones y ofertas para ti</Typography>
      </Stack>
      <Stack maxWidth={"lg"} direction={{ md: "row", lg: "row" }} gap={2}>
        <CardOffer {...cardOne} />
        <CardOffer {...cardTwo} />
      </Stack>
    </Box>
  );
};

export default Offers;
