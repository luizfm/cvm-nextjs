import { Inter, Roboto, League_Spartan } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import classnames from "classnames";

import styles from "./styles.module.scss";
import "../styles/globals.css";

const leagueSpartan = League_Spartan({ subsets: ["latin"], weight: "700" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classnames(
          leagueSpartan.className,
          styles["application-body"]
        )}
      >
        <Header />
        <main className={styles["main-content"]}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
