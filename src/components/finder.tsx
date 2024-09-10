"use client";

import { Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import ProductsTabs from "./products-tabs";
import SearchBar from "./search-bar";

const Finder = () => {
  const [tabValue, setTabValue] = useState(0);

  // const handleSelectedTab = () => {
  //   setTabValue(newValue)
  // };

  // const changeSearchBar = (value: any) => {
  //   setTabValue(value);
  // };

  return (
    <Stack
      direction={"column"}
      spacing={1}
      sx={{
        width: "100%",
        // position: "sticky",
        // top: "0",
      }}
    >
      <ProductsTabs tabValue={tabValue} setTabValue={setTabValue} />
      <SearchBar barVariant={tabValue} />
    </Stack>
  );
};

export default Finder;
