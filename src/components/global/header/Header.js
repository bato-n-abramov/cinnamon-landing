"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [atTop, setAtTop] = useState(true);
    const lastY = useRef(0);
    const ticking = useRef(false);
    const pathname = usePathname();

    const links = [
        { href: "/#barrier-access", label: "Why you need it" },
        { href: "/#how-it-works", label: "How it works" },
        { href: "/#efficiency-scale", label: "What you gain" },
        { href: "/#compliance", label: "Why it’s safe" },
        { href: "/#request-demo", label: "How to start" },
        { href: "/sign-up", label: "Sign Up" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const renderNavLink = (item) => {
        const href = item.href || "#";
        const label = item.label || href;
        const isActive = pathname === href;
        return (
            <Link
                key={item.id || href}
                href={href}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                onClick={() => setIsOpen(false)}
            >
                {label}
            </Link>
        );
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1025 && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        const THRESHOLD = 8;
        const SHOW_AFTER = 64;

        const onScroll = () => {
            if (ticking.current) return;
            ticking.current = true;

            requestAnimationFrame(() => {
                const y = Math.max(0, window.scrollY || 0);
                const diff = y - (lastY.current || 0);

                setAtTop(y < 4);

                if (!isOpen) {
                    if (Math.abs(diff) > THRESHOLD) {
                        if (diff > 0 && y > SHOW_AFTER) setHidden(true);
                        else setHidden(false);
                    }
                } else {
                    setHidden(false);
                }

                lastY.current = y;
                ticking.current = false;
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [isOpen]);


    return (
        <header className={[
            styles.header,
            hidden ? styles.headerHidden : "",
            !atTop ? styles.headerScrolled : "",
        ].join(" ")}>
            <div className={`${styles.headerInner}`}>
                <Link className={styles.headerLogo} href="/" onClick={() => setIsOpen(false)}>
                    <Image
                        src={"/new_logo.png"}
                        alt={"Logo"}
                        width={120}
                        height={40}
                        priority
                        unoptimized
                    />
                </Link>

                <nav className={styles.headerNav}>
                    {links.map(renderNavLink)}
                </nav>

                <Link className={`${styles.headerCta} button-primary`} href={"https://cinnamon.health/contact"} target="_blank">
                    Contact Us
                </Link>
                <div className={`${styles.headerMenuToggler} ${isOpen ? styles.togglerOpen : ''}`} onClick={toggleMenu}>
                    <div className={styles.menuToggler}>
                        <div className={styles.menuTogglerLines}>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={`${styles.mobileMenuInner}  ${isOpen ? styles.mobileMenuOpen : ''}`}>
                    <div className={styles.mobileMenuWrapper}>
                        <div className={styles.mobileMenuWrapperInner}>
                            <div className={styles.mobileMenuContent}>
                                <nav className={styles.mobileMenuNav}>
                                    {links.map(renderNavLink)}
                                </nav>
                                <Link className={`${styles.headerCta} button-primary`} href={"https://cinnamon.health/contact"} target="_blank">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}