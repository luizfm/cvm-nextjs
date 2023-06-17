"use client";

import Link from "next/link";
import Image from "next/image";

import CompanyLogo from "@/assets/svg/cvm-logo.svg";

import styles from "./styles.module.scss";

const MENU_ITEMS = [
  {
    label: "Quem somos",
    path: "/about-us",
  },
  {
    label: "Projetos",
    path: "/projects",
  },
  {
    label: "Como ajudar",
    path: "/help",
  },
  {
    label: "Fotos",
    path: "/photos",
  },
];

function Header() {
  return (
    <header className={styles["header-container"]}>
      <nav className={styles["nav-wrapper"]}>
        <ul className={styles["item-list"]}>
          <li className={styles["company-logo"]}>
            <Link href="/">
              <Image
                src={CompanyLogo}
                alt="Uma mão segurando várias crianças"
                width={80}
                height={80}
              />
            </Link>
          </li>
          {MENU_ITEMS.map((item) => (
            <li key={item.label} className={styles["nav-item"]}>
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
