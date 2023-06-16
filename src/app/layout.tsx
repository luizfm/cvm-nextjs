import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

import styles from "./styles.module.scss";
import "../styles/globals.css";

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
        <Footer />
      </body>
    </html>
  );
}
