import { Statistics } from "@/components";
import { AppointmentStatus } from "@/enums";
import Container from "@mui/material/Container";
import { type Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Statistics");
  return {
    title: `RSystfip | ${t("title", {
      type: t("daily"),
    })}`,
  };
}

function PageStcsDaily(): React.ReactNode {
  return (
    <Container component="main" maxWidth="xl">
      <Statistics appointment_status={AppointmentStatus.daily} />
    </Container>
  );
}

export default PageStcsDaily;
