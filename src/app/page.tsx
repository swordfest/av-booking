import Image from "next/image";
import { Container, Stack } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{
      bgcolor: '#e2e2e2',
      height: '30vh',
    }}>
      
      <Stack direction="row" sx={{
        relative: 'true',
        width: '100%',
        height: '20vh',
        bgcolor: '#31a8ff',
        justifyContent:'center',
        alignItems: 'center',
      }}>
        <Image fill src="/images/logo.png" alt="Logo" />
      </Stack>
    </Container>
  );
}
