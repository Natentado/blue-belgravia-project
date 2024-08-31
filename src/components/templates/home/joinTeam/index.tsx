import styles from "./style.module.scss";
import Image from "next/image";
import employersImg from "@public/assets/img/employers.png";
import candidatesImg from "@public/assets/img/candidates.png";
import mobileEmployersImg from "@public/assets/img/mobileEmployers.png";
import mobileCandidatesImg from "@public/assets/img/mobileCandidates.png";
import FormButton from "@/components/buttons/formButton";

interface IJoinTeam {
    isMobile: boolean;
};

const JoinTeam = ({isMobile}: IJoinTeam) => {

    return (
      <article className={`flex-column centered ${styles.joinTeamSections}`}>
        <section className="flex-column">
          <h2>For Employers</h2>
          <small />

          <div className="flex align-center spacing-1x">
            <span className="flex-column spacing-1x">
              <p>Count on our impeccably employees today.</p>
              <small>
                With more than 20 years of experience in hosting, 
                we know how to deliver.
              </small>

              <FormButton segment="recruiter" />
            </span>

            <picture>
              <Image 
                alt=" for employers section image"
                src={isMobile ? mobileEmployersImg : employersImg}
                width={isMobile ? 180 : 500}
                height={isMobile ? 180 : 300}
                quality={100}
              />
            </picture>
          </div>
        </section>
        
        <section className="flex-column">
          <h2>For Candidates</h2>
          <small />

          <div className="flex align-center spacing-1x">
            <span className="flex-column spacing-1x">
              <p>Enhance your skills by joining our team.</p>
              <small>
                We offer the finest training, and the opportunity to 
                work in the vibrant hospitality industry of London.
              </small>

              <FormButton segment="candidate" />
            </span>

            <picture>
              <Image 
                alt=" for employers section image"
                src={isMobile ? mobileCandidatesImg :candidatesImg}
                width={isMobile ? 180 : 500}
                height={isMobile ? 180 : 300}
                quality={100}
              />
            </picture>
          </div>
        </section>
      </article>
    )
};

export default JoinTeam;