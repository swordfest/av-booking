"use client";

import { initialLodgesProps } from "@/content/content-lodges";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Autocomplete,
  Box,
  InputAdornment,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers';
import { useState } from "react";

const SearchBar = () => {
  const [isDestinationFocused, setIsDestinationFocused] = useState(false);
  const [destinationValue, setDestinationValue] = useState("");
  return (
    <Stack
      direction={"column"}
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "105%",
          height: "56px",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 49.86%, rgba(255, 255, 255, 0.00) 100%);",
        }}
      >
        <Tabs variant="scrollable">
          <Tab
            sx={{
              textTransform: "none",
            }}
            label={
              <Stack
                direction={"row"}
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  width={24}
                  icon={"solar:buildings-3-bold-duotone"}
                  color="#005B7F"
                />
                <Typography color="#212B36" fontWeight={"bold"}>
                  Alojamiento
                </Typography>
              </Stack>
            }
          />
          <Tab
            sx={{
              textTransform: "none",
            }}
            label={
              <Stack
                direction={"row"}
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  width={24}
                  icon={"solar:bus-bold-duotone"}
                  color="#005B7F"
                />
                <Typography color="#212B36" fontWeight={"bold"}>
                  Traslados
                </Typography>
              </Stack>
            }
          />
          <Tab
            sx={{
              textTransform: "none",
            }}
            label={
              <Stack
                direction={"row"}
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  width={24}
                  icon={"solar:compass-big-bold-duotone"}
                  color="#005B7F"
                />
                <Typography color="#212B36" fontWeight={"bold"}>
                  Experiencias
                </Typography>
              </Stack>
            }
          />
          <Tab
            sx={{
              textTransform: "none",
            }}
            label={
              <Stack
                direction={"row"}
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  width={24}
                  icon={"solar:star-bold-duotone"}
                  color="#005B7F"
                />
                <Typography color="#212B36" fontWeight={"bold"}>
                  Servicios diversos
                </Typography>
              </Stack>
            }
          />
        </Tabs>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: {xs: "auto", md: "64px"},
          bgcolor: "#FFFFFF",
          borderRadius: "1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField
            onFocus={() => setIsDestinationFocused(true)}
            onBlur={() => setIsDestinationFocused(false)}
            variant="outlined"
            slotProps={{
              inputLabel: { shrink: false, style: { paddingLeft: "2rem" } },
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon
                      width={24}
                      icon={"solar:compass-big-bold-duotone"}
                      color="#005B7F"
                    />
                  </InputAdornment>
                ),
              },
            }}
            {...initialLodgesProps}
            onChange={(event) => setDestinationValue(event.target.value)}
            label={
              isDestinationFocused || destinationValue
                ? ""
                : "¿Cuál es tu destino?"
            }
            fullWidth
            sx={{
              "& fieldset": {
                border: "none",
              },
            }}
          />
          {/* <SingleInputDateRangeField label="Departure - Return" /> */}
          <DatePicker />
        </Stack>
      </Box>
    </Stack>
  );
};

export default SearchBar;
