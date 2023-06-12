import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/header";

import styles from "./styles.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className={styles["main-content"]}>{children}</main>
      </body>
    </html>
  );
}
