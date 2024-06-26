import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BBH | Candidates",
  description: "The Blue Belgravia Hospitality company offers the greatest hospitality services in London.",
};

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
      <section>
        <h1>Candidates Page</h1>
      </section>
    </main>
  );
};

export default CandidatesPage;