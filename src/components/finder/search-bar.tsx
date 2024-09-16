"use client";
import { _lodgesList } from "@/_mock/_lodges";
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
import React, { useEffect, useRef, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { debounce } from "lodash";
import { BarVariant } from "@/types/finder/search-bar-type";
import { LodgeType } from "@/types/lodges/_lodges-type";

export interface Props {
  barVariant: BarVariant;
}

const SearchBar = ({ barVariant }: Props) => {
  const searchFieldRef = useRef<HTMLInputElement>(null);
  const [filterData, setFilterData] = useState<LodgeType[]>(_lodgesList);
  const [selected, setSelected] = useState<string>("");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const savedDestination = localStorage.getItem("destination");
    savedDestination && setSelected(savedDestination);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFocus = () => {
    searchFieldRef.current?.focus();
  };

  const search = (criteria: React.ChangeEvent<HTMLInputElement>) => {
    console.log("search", criteria.target?.value);
    return _lodgesList.filter((lodge) =>
      lodge.name.toLowerCase().startsWith(criteria.target?.value.toLowerCase())
    );
  };

  const handleMenuChange = debounce((value) => {
    setFilterData(search(value));
  }, 300);

  const handleSelected = (value: LodgeType) => {
    setSelected(value.name);
    localStorage.setItem("destination", value.name);
  };

  switch (barVariant) {
    case "lodge":
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
                // value={fieldValue[0]}
                variant="outlined"
                slotProps={{
                  inputLabel: {
                    shrink: false,
                    sx: { paddingLeft: "2rem" },
                  },

                  htmlInput: {
                    value: selected,
                    sx: {
                      cursor: "pointer",
                    },
                  },
                  input: {
                    // value: fieldValue[0],
                    sx: {
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
                {..._lodgesList}
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
                autoFocus={false}
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
                  onKeyDown={(e) => {
                    e.stopPropagation();
                  }}
                  onChange={handleMenuChange}
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
                {filterData.map((lod, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      handleClose();
                      handleMenuChange(lod.name);
                      handleSelected(lod);
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
    case "transfer":
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
                {..._lodgesList}
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
    case "experience":
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
                {..._lodgesList}
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
    case "mixed":
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
                {..._lodgesList}
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
