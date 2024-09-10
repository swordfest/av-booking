import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent } from "react";

interface propsProductsTabs {
  tabValue: number;
  setTabValue: React.Dispatch<React.SetStateAction<number>>;
}

const ProductsTabs = ({tabValue, setTabValue} : propsProductsTabs) => {
  const handleChange = (e: SyntheticEvent, value: number) => {
    setTabValue(value)
  };

  return (
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
        value={tabValue}
        onChange={handleChange}
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
  );
};

export default ProductsTabs;
