import { Box, Button, Paper, Typography } from "@mui/material";
import NextLink from "next/link";
import FormRecoveryPsw from "./FormRecoveryPsw";

function RecoveryPassword(): React.ReactNode {
  return (
    <>
      <Paper sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} elevation={6}>
        <Typography component="h1" variant="h5" gutterBottom align="center">
          Recuperación de contraseña
        </Typography>

        <FormRecoveryPsw />

        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Button component={NextLink} href="/" sx={{ mt: 3, ml: 1 }}>
            Back
          </Button>
        </Box>
      </Paper>
    </>
  );
}

export default RecoveryPassword;
