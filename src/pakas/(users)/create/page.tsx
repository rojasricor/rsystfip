"use client";

import { FormUserAdd } from "@/components";
import { Container, Paper, Typography } from "@mui/material";
import Head from "next/head";

function PageRegisterUser(): React.ReactNode {
  return (
    <>
      <Head>
        <title>RSystfip | Register user</title>
      </Head>

      <Container component="main" maxWidth="md">
        <Paper sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} elevation={6}>
          <Typography component="h1" variant="h5" gutterBottom align="center">
            Registrar nuevo usuario
          </Typography>

          <FormUserAdd />
        </Paper>
      </Container>
    </>
  );
}

export default PageRegisterUser;