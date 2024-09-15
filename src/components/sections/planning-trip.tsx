"use client";
import { Box, IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useRef, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import CardPlanningTrip from "../card/card-planning-trip";
import { _planningTrips } from "@/_mock/_planning";

const PlanningTrips = () => {
  const stackRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  // const [categories] = useState<string[]>(
  //   _planningTrips.map((item) => item.category)
  // );
  // const uniqueCategories = categories.filter(
  //   (item, index) => categories.indexOf(item) === index
  // );

  const [tab, setTab] = useState("romance");

  const handleClickLeft = () => {
    if (stackRef.current) {
      stackRef.current.scrollLeft -= 276;
    }
  };
  const handleClickRight = () => {
    if (stackRef.current) {
      stackRef.current.scrollLeft += 276;
    }
  };
  const handleTabChange = (e: SyntheticEvent, value: string) => {
    setTab(value);
  };

  return (
    <Box
      title="Offers"
      component="section"
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Stack
        direction={"row"}
        spacing={1}
        sx={{
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Stack direction="column">
          <Typography variant="h4" fontWeight={"700"}>
            Planifica tu viaje de forma fácil
          </Typography>
          <Typography variant="body1">
            Escoge la sensación que prefieras y explora los mejores destinos en
            Cuba
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Tabs
          variant="scrollable"
          onChange={handleTabChange}
          value={tab}
          TabIndicatorProps={{ sx: { bgcolor: "#B0E1E2" } }}
          sx={{
            minWidth: {xs: "100%", md: "auto"},
            px: 1,
          }}
        >
          <Tab
            value={"romance"}
            sx={{
              px: 2,
              borderRadius: 1,
            }}
            label={
              <Stack
                direction={"row"}
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "none",
                }}
              >
                <Icon
                  width={24}
                  strokeWidth={"2"}
                  icon={"solar:heart-linear"}
                  color="#005B7F"
                />
                <Typography
                  color="#212B36"
                  fontWeight={"bold"}
                  variant="subtitle1"
                >
                  Romance
                </Typography>
              </Stack>
            }
          />
          <Tab
            value={"naturaleza"}
            sx={{
              px: 2,
              borderRadius: 1,
            }}
            label={
              <Stack
                direction={"row"}
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "none",
                }}
              >
                <Icon
                  width={24}
                  strokeWidth={"2"}
                  icon={"solar:leaf-linear"}
                  color="#005B7F"
                />
                <Typography
                  color="#212B36"
                  fontWeight={"bold"}
                  variant="subtitle1"
                >
                  Naturaleza
                </Typography>
              </Stack>
            }
          />
          <Tab
            value={"verano"}
            sx={{
              px: 2,
              borderRadius: 1,
            }}
            label={
              <Stack
                direction={"row"}
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "none",
                }}
              >
                <Icon
                  width={24}
                  strokeWidth={"2"}
                  icon={"solar:sun-linear"}
                  color="#005B7F"
                />
                <Typography
                  color="#212B36"
                  fontWeight={"bold"}
                  variant="subtitle1"
                >
                  Verano
                </Typography>
              </Stack>
            }
          />
          <Tab
            value={"festejos"}
            sx={{
              px: 2,
              borderRadius: 1,
            }}
            label={
              <Stack
                direction={"row"}
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "none",
                }}
              >
                <Icon
                  width={24}
                  strokeWidth={"2"}
                  icon={"solar:balloon-linear"}
                  color="#005B7F"
                />
                <Typography
                  color="#212B36"
                  fontWeight={"bold"}
                  variant="subtitle1"
                >
                  Festejos
                </Typography>
              </Stack>
            }
          />
        </Tabs>
        <Stack direction={"row"} borderRadius={2} overflow={"hidden"}>
          <IconButton
            title="Arrow Left"
            onClick={handleClickLeft}
            size="small"
            sx={{
              visibility: { xs: "hidden", md: "visible" },
              width: "40px",
              height: "40px",
              bgcolor: "white",
              color: "black",
              "&:hover": {
                bgcolor: "#009FA3",
                color: "white",
              },
              borderRadius: "0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <Icon icon={"solar:alt-arrow-left-linear"} />
          </IconButton>
          <IconButton
            onClick={handleClickRight}
            title="Arrow Right"
            size="small"
            sx={{
              visibility: { xs: "hidden", md: "visible" },
              width: "40px",
              height: "40px",
              bgcolor: "white",
              color: "black",
              "&:hover": {
                bgcolor: "#009FA3",
                color: "white",
              },
              borderRadius: "0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <Icon icon={"solar:alt-arrow-right-linear"} />
          </IconButton>
        </Stack>
      </Stack>
      <Stack
        ref={stackRef}
        direction={"row"}
        spacing={2}
        sx={{
          overflowX: "auto",
          scrollSnapType: { xs: "none", md: "x" },
          scrollBehavior: "smooth",
          scrollSnapAlign: "start",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          msOverflowStyle: "none",
        }}
      >
        {_planningTrips
          .filter((item) => item.category == tab)
          .map((trip, index) => (
            <CardPlanningTrip {...trip} key={index} />
          ))}
      </Stack>
    </Box>
  );
};

export default PlanningTrips;
