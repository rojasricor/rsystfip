import { Box, Container, Typography } from "@mui/material";
import { GoHome } from "./ui";
import Image from "next/image";

function ResetTokenInvalid(): React.ReactNode {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Image
            src={"/rsystfip_logotype.svg"}
            alt="RSystfip logotype"
            width={72}
            height={57}
            priority
          />
        </Box>
        <Typography component="h1" variant="h3" gutterBottom>
          {"Invalid Link"}
        </Typography>

        <Typography variant="body1" gutterBottom>
          {"The link to change your password is invalid!"}
        </Typography>

        <GoHome />
      </Box>
    </Container>
  );
}

export default ResetTokenInvalid;
