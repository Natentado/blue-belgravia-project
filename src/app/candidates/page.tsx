import Link from "next/link";
import styles from "./styles.module.scss";

const CandidatesPage = () => {

  return (
    <main>
      <Link 
        href="/" 
        style={
          {
            display: "block", 
            marginBottom: "24px", 
            fontWeight: 600
          }
        }
      >
        Voltar para Home
      </Link>
      <section className={styles.homeBgPresentation}>
        <h1>Candidates Page</h1>
      </section>
    </main>
  );
};

export default CandidatesPage;