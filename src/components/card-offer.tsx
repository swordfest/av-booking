import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

export interface OfferProps {
  title?: string;
  description?: string;
  imageURL?: string;
  variant: string;
}

const CardOffer = (props: OfferProps) => {
  switch (props.variant) {
    case "1":
      return (
        <Box
          minWidth="sm"
          maxWidth="lg"
          maxHeight={{ sm: "250px", lg: "153px" }}
          borderRadius={2}
          sx={{
            border: "2px",
            borderStyle: "solid",
            borderColor: "#0094FF",
            width: "100%",
          }}
        >
          <Stack direction={"column"} p={2} gap={1}>
            <Stack direction={"column"}>
              <Typography variant="h5">{props?.title}</Typography>
              <Typography
                variant="body1"
                color="secondary"
                sx={{
                  color: "gray",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                }}
              >
                {props?.description}
              </Typography>
            </Stack>
            <Box minWidth={"10vw"}>
              <Button
                variant={"contained"}
                color="primary"
                disableElevation
                sx={{
                  minWidth: "8rem",
                  textTransform: "none",
                  borderRadius: "8px",
                }}
              >
                Explorar más
              </Button>
            </Box>
          </Stack>
        </Box>
      );
    case "2":
      return (
        <Box
          minWidth="sm"
          maxWidth="lg"
          maxHeight={{ sm: "250px", lg: "153px" }}
          borderRadius={2}
          sx={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%)",
          }}
        >
          <Stack direction={"column"} p={2} gap={1}>
            <Stack direction={"column"}>
              <Typography variant="h5" color="white">
                {props?.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  maxHeight: "48px",
                  color: "white",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                }}
              >
                {props?.description}
              </Typography>
            </Stack>
            <Box minWidth={"10vw"}>
              <Button
                variant={"contained"}
                color="primary"
                disableElevation
                sx={{
                  minWidth: "8rem",
                  textTransform: "none",
                  borderRadius: "8px",
                }}
              >
                Explorar más
              </Button>
            </Box>
          </Stack>
          <Image
            fill
            objectFit="cover"
            src={props?.imageURL as string}
            alt="imagen"
            style={{
              position: "absolute",
              zIndex: "-1",
              top: "0",
              left: "0",
            }}
          />
        </Box>
      );

      break;

    default:
      break;
  }
};

export default CardOffer;
