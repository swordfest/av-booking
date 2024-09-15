import { Box, Container } from "@mui/material";
import Navbar from "@/components/navigation/navbar";
import Hero from "@/components/sections/hero";
import Offers from "@/components/sections/offers";
import LodgeTypes from "@/components/sections/lodge-types";
import RecommendedLodges from "@/components/sections/recommended-lodges";
import Finder from "@/components/finder/finder";
import PlanningTrips from "@/components/sections/planning-trip";
import Articles from "@/components/sections/articles";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Hero />
        <Box
          component={"main"}
          my={3}
          gap={4}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Finder />
          <Offers />
          <LodgeTypes />
          <RecommendedLodges />
          <PlanningTrips />
          <Articles />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
