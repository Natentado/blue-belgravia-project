import { Metadata } from "next";
import Image from "next/image";
import styles from "./styles.module.scss";
import backGroundImg from "@public/assets/img/background/backgroundImg2.webp";
import Link from "next/link";
import Reviews from "@/components/templates/home/reviews";
import OurHosting from "@/components/templates/home/ourHosting";
import JoinTeam from "@/components/templates/home/joinTeam";
import Purpose from "@/components/templates/home/purpose";
import ContactUs from "@/components/templates/home/contactUs";
import ApplicationModal from "@/components/forms/applicationForms/modalFormLayout";

interface PageParams {
  params: {};
  searchParams: { 
    viewport: 'desktop' | 'mobile';
  }
};

export const metadata: Metadata = {
  title: "BBH | Home",
  description: "The Blue Belgravia Hospitality company offers the greatest hospitality services in London.",
};

const HomePage = (props: PageParams) => {
  const isMobile = props.searchParams.viewport === "mobile";

  return (
    <main>
      <section className={`flex-column spacing-2x ${styles.homeBgPresentation}`}>
        <picture className={styles.logoWrapper}>
          <Image
            className={styles.logo}
            src={(backGroundImg)}
            alt="background image"
            width={1920}
            height={699}
            quality={100}
            priority
          />
        </picture>
        <h1>An Event Staff from <br/> a Hospitality Recruitment Agency</h1>
        <p>Let your event run smooth with expert help.</p>
        <Link 
          href="/candidates" 
          prefetch
          className="flex align-center"
        >
          Join the team
        </Link>
      </section>
      <OurHosting isMobile={isMobile} />
      <JoinTeam isMobile={isMobile} />
      <Reviews />
      <Purpose isMobile={isMobile} />
      <ContactUs />
    </main>
  );
};

export default HomePage;