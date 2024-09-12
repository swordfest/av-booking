"use client";
import { initialLodgesProps } from "@/content/content-lodges";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Box,
  Divider,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
// import { debounce } from "lodash";
// import { lodgeProps } from "./card-lodge";

interface barProps {
  barVariant?: number;
}

const SearchBar = ({ barVariant }: barProps) => {
  // const [destinationValue, setDestinationValue] = useState("");
  const searchFieldRef = useRef<HTMLInputElement>(null);
  // const [fieldValue, setFieldValue] = useState<lodgeProps[]>([]);
  const [fieldValue, setFieldValue] = useState("");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFocus = () => {
    searchFieldRef.current?.focus();
  };

  // const search = (criteria: string) => {
  //   return initialLodgesProps.filter((lodge) => lodge.name === criteria);
  // }

  // const debouncedSearch = useRef(
  //   debounce((value) => {
  //     setFieldValue(search(value));
  //   }, 300)
  // ).current;

  

  const handleMenuChange = (item: string) => {
    // debouncedSearch(item);
    setFieldValue(item);
  };

  switch (barVariant) {
    case 0:
      return (
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
            <Box position={"relative"}>
              <TextField
                aria-controls={open ? "destination-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                onFocus={handleFocus}
                value={fieldValue[0]}
                variant="outlined"
                slotProps={{
                  inputLabel: {
                    shrink: false,
                    style: { paddingLeft: "2rem" },
                  },

                  htmlInput: {
                    // value: fieldValue,
                    style: {
                      cursor: "pointer",
                    },
                  },
                  input: {
                    value: fieldValue[0],
                    style: {
                      cursor: "pointer",
                    },
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
                placeholder="¿Cuál es tu destino?"
                fullWidth
                sx={{
                  "& fieldset": {
                    border: "none",
                  },
                }}
              />
              <Menu
                id="destination-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                disableScrollLock
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                slotProps={{
                  paper: {
                    style: {
                      width: 480,
                      padding: "0 1rem 1rem 1rem",
                      borderRadius: "16px",
                      // maxHeight: "20rem",
                    },
                  },
                }}
                sx={{
                  position: "fixed",
                }}
              >
                <TextField
                  inputRef={searchFieldRef}
                  fullWidth
                  placeholder="¿Cuál es tu destino?"
                  slotProps={{
                    input: {
                      style: {
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#7d7d7d",
                      },
                    },
                  }}
                  sx={{
                    "& fieldset": {
                      border: "none",
                    },
                  }}
                >
                  ¿Cuál es tu destino?
                </TextField>
                <Divider />
                {initialLodgesProps.map((lod, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      handleClose();
                      handleMenuChange(lod.name);
                    }}
                  >
                    {lod.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* <DatePicker
              label={"¿Cuál es tu destino?"}
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
            /> */}
          </Stack>
        </Box>
      );
    case 1:
      return (
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
          Traslado
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
                label={"¿Cuál es tu destino?"}
                fullWidth
                sx={{
                  "& fieldset": {
                    border: "none",
                  },
                }}
              />
            </Box>

            {/* <SingleInputDateRangeField label="Departure - Return" /> */}
            <DatePicker
              label={"Fecha de salida"}
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
      );
    case 2:
      return (
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
          Experiencias
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
                label={"¿Cuál es tu destino?"}
                fullWidth
                sx={{
                  "& fieldset": {
                    border: "none",
                  },
                }}
              />
            </Box>

            {/* <SingleInputDateRangeField label="Departure - Return" /> */}
            <DatePicker
              label={"Fecha de salida"}
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
      );
    case 3:
      return (
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
          Diversos
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
                label={"¿Cuál es tu destino?"}
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
                slotProps={{
                  paper: { style: { width: 300, padding: "1rem" } },
                }}
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
              label={"Fecha de salida"}
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
      );

    default:
      break;
  }
};

export default SearchBar;
