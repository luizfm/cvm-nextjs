"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import classnames from "classnames";

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
  const currentPath = usePathname();

  return (
    <header className={styles["header-container"]}>
      <nav className={styles["nav-wrapper"]}>
        <Link href="/">
          <Image
            src={CompanyLogo}
            alt="Uma mão segurando várias crianças"
            width={80}
            height={80}
          />
        </Link>
        <ul className={styles["item-list"]}>
          {MENU_ITEMS.map((item) => (
            <li
              key={item.label}
              className={classnames(styles["nav-item"], {
                [styles["active"]]: currentPath === item.path,
              })}
            >
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
