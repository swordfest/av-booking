"use client";

import { initialLodgesProps } from "@/content/content-lodges";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  // Autocomplete,
  Box,
  Divider,
  InputAdornment,
  Menu,
  MenuItem,
  Paper,
  // InputLabel,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React, { useRef } from "react";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   tabIndicator: {
//     backgroundColor: "#111111", // Your custom color here!
//   },
// });

const SearchBar = () => {
  const [isDestinationFocused, setIsDestinationFocused] = useState(false);
  const [destinationValue, setDestinationValue] = useState("");
  const searchFieldRef = useRef<HTMLInputElement>(null);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    if (searchFieldRef.current) {
      searchFieldRef.current.focus();
      console.log("Aqui ha funcionao esta validacion"); // focus the text field when it's mounted
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //   const classes = useStyles();

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
        <Tabs
          value={0}
          classes={{}}
          TabIndicatorProps={{ sx: { backgroundColor: "#005B7F" } }}
          variant="scrollable"
        >
          <Tab
            value={0}
            sx={{
              textTransform: "none",
              paddingX: "0px",
              marginX: "16px",
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
                <Typography color="#212B36" variant="subtitle1">
                  Alojamiento
                </Typography>
              </Stack>
            }
          />
          <Tab
            value={1}
            sx={{
              textTransform: "none",
              paddingX: "0px",
              marginX: "16px",
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
                <Typography color="#212B36" variant="subtitle1">
                  Traslados
                </Typography>
              </Stack>
            }
          />
          <Tab
            value={2}
            sx={{
              textTransform: "none",
              paddingX: "0px",
              marginX: "16px",
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
                <Typography color="#212B36" variant="subtitle1">
                  Experiencias
                </Typography>
              </Stack>
            }
          />
          <Tab
            value={3}
            sx={{
              textTransform: "none",
              paddingX: "0px",
              marginX: "16px",
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
                <Typography color="#212B36" variant="subtitle1">
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
          height: { xs: "auto", md: "64px" },
          bgcolor: "#FFFFFF",
          borderRadius: "1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <Box>
            <TextField
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
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
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              slotProps={{ paper: { style: { width: 300, padding: "1rem" } } }}
            >
              <TextField inputRef={searchFieldRef} sx={{}} fullWidth>
                ¿Cuál es tu destino?
              </TextField>
              <Divider />
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>

          {/* <SingleInputDateRangeField label="Departure - Return" /> */}
          <DatePicker
            onChange={() => setDestinationValue("aaa")}
            label={
              isDestinationFocused || destinationValue ? "" : "Fecha de salida"
            }
            slotProps={{
              textField: {
                InputProps: {
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
                InputLabelProps: {
                  shrink: false,
                  style: { paddingLeft: "2rem" },
                },
              },
            }}
            sx={{
              "& fieldset": {
                border: "none",
              },
            }}
          />
        </Stack>
      </Box>
    </Stack>
  );
};

export default SearchBar;
