"use client";
import Logo from "@public/assets/img/logos/Logo.png";
import Image from "next/image";
import styles from "./style.module.scss"
import { MouseEvent, useState } from "react";
import Link from "next/link";

interface IHeader {
    // isMobile: boolean
};

const Header = () => {
    const [ modalOpen, setModalOpen ] = useState(false);

    const dismissModal = (e: MouseEvent) => {
        const elementId = (e.target as HTMLElement).id;
    
        if(elementId === "asideHeader"){
            return setModalOpen(false);
        };
    };
    
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

                <span onClick={() => setModalOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" fill="none" viewBox="0 0 21 14" > <path fill="#fff" d="M2.212 2.875h17.424c.726 0 1.364-.638 1.364-1.364 0-.726-.638-1.386-1.364-1.386H2.212C1.486.125.848.763.848 1.511c0 .748.638 1.364 1.364 1.364zm0 5.5h17.424c.726 0 1.364-.638 1.364-1.364 0-.726-.638-1.386-1.364-1.386H2.212c-.726 0-1.364.638-1.364 1.386 0 .748.638 1.364 1.364 1.364zm0 5.5h17.424c.726 0 1.364-.638 1.364-1.364 0-.726-.638-1.386-1.364-1.386H2.212c-.726 0-1.364.638-1.364 1.386 0 .748.638 1.364 1.364 1.364z" ></path> </svg>
                </span>
            </header>
            {!!modalOpen ?
                <aside
                    id="asideHeader"
                    className={styles.asideHeader} 
                    onClick={(e) => dismissModal(e)}
                >
                    <div className={styles.asideOverlay}>
                        <span>
                            <div className={styles.logoWrapper}>
                                <picture>
                                    <Image 
                                        alt="website logo"
                                        src={Logo}
                                        width={36}
                                        height={36}
                                        priority
                                        />
                                </picture>
                                <span>
                                    <p>Blue Belgravia</p>
                                    Hospitality Ltd
                                </span>
                            </div>
                            <button onClick={() => setModalOpen(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 25 26" > <path fill="#fff" d="M25 3.217L22.532.75l-9.782 9.783L2.967.75.5 3.217 10.283 13 .5 22.782l2.467 2.468 9.783-9.783 9.782 9.783L25 22.782 15.217 13 25 3.217z" ></path> </svg>
                            </button>
                        </span>
                        <nav>
                            <Link href="/" onClick={() => setModalOpen(false)}>
                                Home
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" > <path d="M32 18.451L16 6.031 0 18.451v-5.064L16 .967l16 12.42zM28 18v12h-8v-8h-8v8H4V18l12-9z"></path> </svg>
                            </Link>
                            <Link href="/our-services" onClick={() => setModalOpen(false)}>
                                Our services
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" > <path d="M32.047 25c0-9-8-7-8-14 0-.58-.056-1.076-.158-1.498-.526-3.532-2.88-6.366-5.93-7.23.027-.123.041-.251.041-.382 0-1.04-.9-1.891-2-1.891S14 .85 14 1.89c0 .131.014.258.041.382-3.421.969-5.966 4.416-6.039 8.545L8 11c0 7-8 5-8 14 0 2.382 5.331 4.375 12.468 4.878a3.998 3.998 0 007.064 0C26.669 29.375 32 27.383 32 25l-.001-.021.048.021zm-6.227 1.691c-1.695.452-3.692.777-5.837.958a4 4 0 00-7.968 0c-2.144-.18-4.142-.506-5.837-.958-2.332-.622-3.447-1.318-3.855-1.691.408-.372 1.523-1.068 3.855-1.691 2.712-.724 6.199-1.122 9.82-1.122s7.109.398 9.82 1.122c2.332.622 3.447 1.318 3.855 1.691-.408.372-1.523 1.068-3.855 1.691z"></path> </svg>
                            </Link>
                            <Link href="/clients" onClick={() => setModalOpen(false)}>
                                Clients
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 32" > <path d="M24 24.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649C13.216 24.637 8 27.97 8 32h28c0-4.03-5.216-7.364-12-7.918z"></path> <path d="M10.225 24.854c1.728-1.13 3.877-1.989 6.243-2.513a11.33 11.33 0 01-1.265-1.844c-.95-1.726-1.453-3.627-1.453-5.497 0-2.689 0-5.228.956-7.305.928-2.016 2.598-3.265 4.976-3.734C19.153 1.571 17.746 0 14 0 8 0 8 4.029 8 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784.555-12 3.888-12 7.918h8.719c.454-.403.956-.787 1.506-1.146z"></path> </svg>
                            </Link>
                            <Link href="/contact-us" onClick={() => setModalOpen(false)}>
                                Contact Us
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" > <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path> </svg>
                            </Link>
                        </nav>
                        <Link href="/candidates" onClick={() => setModalOpen(false)}>
                            Join the team
                        </Link>
                    </div>
                </aside>
                : null
            }
        </>
    )
};

export default Header;