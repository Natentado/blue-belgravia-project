import Image from "next/image";
import styles from "./style.module.scss";
import RestaurantIcon from "@public/assets/img/icons/restaurant.png";
import BuffetIcon from "@public/assets/img/icons/buffet.png";
import PartyIcon from "@public/assets/img/icons/party.png";
import ChampagneIcon from "@public/assets/img/icons/champagne.png";

interface IOurHosting {
  isMobile: boolean;
};

const OurHosting = ({isMobile}: IOurHosting) => {
    
  return (
    <section className={`flex-column centered spacing-3x ${styles.ourHosting}`}>
      <h2>Our Specialized Hosting</h2>

      <ul className="flex flex-wrap">
        <li className="flex-column align-center">
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
        <li className="flex-column align-center">
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
        <li className="flex-column align-center">
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
        <li className="flex-column align-center">
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

      <span className="flex-column spacing-1x">
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
  )
};

export default OurHosting;