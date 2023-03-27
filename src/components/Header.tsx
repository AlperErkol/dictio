import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { ThemeWrapper } from "./ThemeWrapper";

import styles from "@/styles/Header.module.css";

const Logo = require("../../public/logo-dictio.svg");

const Header = () => {
  return (
    <header className={styles.Header}>
      <nav className="flex items-center justify-between mb-4">
        <Link href={"/"}>
          <Image
            priority={true}
            width={30}
            height={30}
            src={Logo}
            alt="Dict.io Logo"
          />
        </Link>
        <ThemeWrapper />
      </nav>
      <SearchBar />
    </header>
  );
};

export default Header;
