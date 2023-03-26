import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";

import styles from "@/styles/Header.module.css";

const Logo = require("../../public/logo-dictio.svg");

const Header = () => {
  return (
    <header className={styles.Header}>
      <Link href={"/"}>
        <Image
          priority={true}
          width={30}
          height={30}
          src={Logo}
          alt="Dict.io Logo"
        />
      </Link>
      <SearchBar />
      <Dropdown />
    </header>
  );
};

export default Header;
