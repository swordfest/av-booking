"use client";

import { Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import ProductsTabs from "../finder/products-tabs";
import SearchBar from "../finder/search-bar";
import { BarVariant } from "@/types/finder/search-bar-type";

const Finder = () => {
  const [tabValue, setTabValue] = useState<BarVariant>("lodge");

  return (
    <Stack
      direction={"column"}
      spacing={1}
      sx={{
        width: "100%",
        position: "sticky",
        top: "0px",
      }}
    >
      <ProductsTabs tabValue={tabValue} setTabValue={setTabValue} />
      <SearchBar barVariant={tabValue} />
    </Stack>
  );
};

export default Finder;
