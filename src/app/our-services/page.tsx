import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BBH | Our Services",
  description: "The Blue Belgravia Hospitality company offers the greatest hospitality services in London.",
};

const OurServices = () => {

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
        <h1>Our Services</h1>
      </section>
    </main>
  );
};

export default OurServices;