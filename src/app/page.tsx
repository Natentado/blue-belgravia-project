import Image from "next/image";
import styles from "./page.module.scss";
import BackGroundImg from "../../public/assets/backgroundImg.png";
import MobileBackGroundImg from "../../public/assets/mobileBackgroundImg.png";

interface PageParams {
  params: {};
  searchParams: { 
    viewport: 'desktop' | 'mobile';
  }
};

const Home = (props: PageParams) => {
  const isMobile = props.searchParams.viewport === "mobile";

  return (
    <main>
      <section className={styles.homeBgPresentation}>
        <picture className={styles.logoWrapper}>
          <Image
            className={styles.logo}
            src={(isMobile ? MobileBackGroundImg : BackGroundImg).src}
            alt="Next.js Logo"
            width={isMobile ? 360 : 1920}
            height={isMobile ? 600 : 699}
            priority
          />
        </picture>
        <h1>An Event Staff from <br/> a Hospitality Recruitment Agency</h1>
        <p>Let your event run smooth with expert help.</p>
      </section>
    </main>
  );
};

export default Home;