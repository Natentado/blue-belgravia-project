"use client";
import Logo from "@public/assets/img/logos/Logo.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss"
import { useState } from "react";
import AsideHeader from "./asideHeader";
import useDeviceDetection from "@/utils/detectDevice"

interface IHeader {};

const Header = () => {
    const [ modalOpen, setModalOpen ] = useState(false);
    const device = useDeviceDetection();
    const isMobile = device === "Mobile";
    
    return (
        <>
            <header className={`${styles.headerContainer} ${modalOpen ? styles.hidden : ""}`}>
                <div className={styles.logoWrapper}>
                    <picture>
                        <Image 
                            alt="website logo"
                            src={Logo}
                            width={42}
                            height={42}
                            priority
                        />
                    </picture>
                    <span>
                        <p>Blue Belgravia</p>
                        Hospitality Ltd
                    </span>
                </div>

                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/our-services">Our services</Link>
                    <Link href="/clients">Clients</Link>
                    <Link href="/contact-us">Contact Us</Link>
                    <Link href="/candidates">Join the team</Link>
                </nav>

                <span onClick={() => setModalOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" fill="none" viewBox="0 0 21 14" > <path fill="#fff" d="M2.212 2.875h17.424c.726 0 1.364-.638 1.364-1.364 0-.726-.638-1.386-1.364-1.386H2.212C1.486.125.848.763.848 1.511c0 .748.638 1.364 1.364 1.364zm0 5.5h17.424c.726 0 1.364-.638 1.364-1.364 0-.726-.638-1.386-1.364-1.386H2.212c-.726 0-1.364.638-1.364 1.386 0 .748.638 1.364 1.364 1.364zm0 5.5h17.424c.726 0 1.364-.638 1.364-1.364 0-.726-.638-1.386-1.364-1.386H2.212c-.726 0-1.364.638-1.364 1.386 0 .748.638 1.364 1.364 1.364z" ></path> </svg>
                </span>
            </header>
            {(!!modalOpen && isMobile) &&
                <AsideHeader setModalOpen={setModalOpen} />
            }
        </>
    )
};

export default Header;