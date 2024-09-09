import { Box, Container, Stack, Typography } from "@mui/material";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Offers from "@/components/offers";
import LodgeTypes from "@/components/section-lodge-types";
import RecommendedLodges from "@/components/section-recommended-lodges";
import SearchBar from "@/components/search-bar";

export default function Home() {
  const arrayLodgeTypes = ([] = Array(8));

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Hero />
        <SearchBar/> 
        <Box
          component={"main"}
          mt={3}
          gap={4}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Offers />
          <LodgeTypes />
          
          <RecommendedLodges />
        </Box>
      </Container>
    </>
  );
}
