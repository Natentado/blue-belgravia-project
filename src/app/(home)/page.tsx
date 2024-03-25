import Image from "next/image";
import styles from "./styles.module.scss";
import backGroundImg from "@public/assets/img/background/backgroundImg.png";
import mobileBackGroundImg from "@public/assets/img/background/mobileBackgroundImg.png";
import RestaurantIcon from "@public/assets/img/icons/restaurant.png";
import BuffetIcon from "@public/assets/img/icons/buffet.png";
import PartyIcon from "@public/assets/img/icons/party.png";
import ChampagneIcon from "@public/assets/img/icons/champagne.png";
import employersImg from "@public/assets/img/employers.png";
import candidatesImg from "@public/assets/img/candidates.png";
import Link from "next/link";

interface PageParams {
  params: {};
  searchParams: { 
    viewport: 'desktop' | 'mobile';
  }
};

const HomePage = (props: PageParams) => {
  const isMobile = props.searchParams.viewport === "mobile";

  return (
    <main>
      <section className={styles.homeBgPresentation}>
        <picture className={styles.logoWrapper}>
          <Image
            className={styles.logo}
            src={(isMobile ? mobileBackGroundImg : backGroundImg)}
            alt="background image"
            width={isMobile ? 360 : 1920}
            height={isMobile ? 600 : 699}
            quality={100}
            priority
          />
        </picture>
        <h1>An Event Staff from <br/> a Hospitality Recruitment Agency</h1>
        <p>Let your event run smooth with expert help.</p>
        <Link 
          href="/candidates" 
          prefetch
        >
          Join the team
        </Link>
      </section>
      <section className={styles.ourHosting}>
        <h2>Our Specialized Hosting</h2>

        <ul>
          <li>
            <picture>
              <Image
                src={RestaurantIcon.src}
                alt="icon"
                width={isMobile ? 42 : 64}
                height={isMobile ? 42 : 64}
              />
            </picture>
            Fine Dining
          </li>
          <li>
            <picture>
              <Image
                src={BuffetIcon.src}
                alt="icon"
                width={isMobile ? 42 : 64}
                height={isMobile ? 42 : 64}
              />
            </picture>
            Formal Banquets
          </li>
          <li>
            <picture>
              <Image
                src={PartyIcon.src}
                alt="icon"
                width={isMobile ? 42 : 64}
                height={isMobile ? 42 : 64}
              />
            </picture>
            Private Parties
          </li>
          <li>
            <picture>
              <Image
                src={ChampagneIcon.src}
                alt="icon"
                width={isMobile ? 42 : 64}
                height={isMobile ? 42 : 64}
              />
            </picture>
            Special Events
          </li>
        </ul>

        <span>
          <p>
            Whether is for a <b>large prestigious</b> event, 
            a <b>private intimate dinner</b> or 
            a <b>business lunch</b>.
          </p>

          <p>
            We <b>will always</b> ensure 
            that our clients needs will be dealt with professionally.
          </p>
        </span>
      </section>
      <section className={styles.purpose}>
        <h2>
          Bar Staff, Waiter and 
          Hostess Recruitment in <b>Central London</b>
        </h2>
        <p>
          Transform the face of your event with 
          {" "} <b>professional hosting</b> <br/> 
          from our expert staff.
        </p>
      </section>
      <article className={styles.joinTeamSections}>
        <section>
          <h2>For Employers</h2>
          <small />

          <div>
            <span>
              <p>Count on our impeccably employees today.</p>
              <small>
                With more than 20 years of experience in hosting, 
                we know how to deliver.
              </small>

              <button>Hire candidates</button>
            </span>

            <picture>
              <Image 
                alt=" for employers section image"
                src={employersImg}
                width={180}
                height={180}
              />
            </picture>
          </div>
        </section>
        
        <section>
          <h2>For Candidates</h2>
          <small />

          <div>
            <span>
              <p>Enhance your skills by joining our team.</p>
              <small>
                We offer the finest training, and the opportunity to 
                work in the vibrant hospitality industry of London.
              </small>

              <button>Apply now!</button>
            </span>

            <picture>
              <Image 
                alt=" for employers section image"
                src={candidatesImg}
                width={180}
                height={180}
              />
            </picture>
          </div>
        </section>
      </article>
    </main>
  );
};

export default HomePage;