import { FormSignin } from "@/components";
import authOptions from "@/libs/authOptions";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { type Metadata } from "next";
import { getServerSession } from "next-auth";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("PageSignin");
  return {
    title: `RSystfip | ${t("title")}`,
  };
}

async function PageSignin(): Promise<React.ReactElement> {
  const session = await getServerSession(authOptions);
  if (session) redirect("/ITFIP-Rectory/home");

  const t = await getTranslations("PageSignin");

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url("/background.jpg")',
          backgroundRepeat: "no-repeat",
          // backgroundColor: (t) =>
          //   t.palette.mode === "light"
          //     ? t.palette.grey[50]
          //     : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{ px: 3 }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ m: 1 }}>
            <Image
              alt="RSystfip logotype"
              src="/rsystfip_logotype.svg"
              width={40}
              height={32}
              quality={100}
              priority
            />
          </Box>

          <Typography component="h1" variant="h5">
            {t("title")}
          </Typography>

          <Typography component="h1" variant="subtitle1" align="center">
            {t("subtitle")}
            <b>{" ITFIP"}</b>
            {"."}
          </Typography>

          <FormSignin />
        </Box>
      </Grid>
    </Grid>
  );
}

export default PageSignin;
