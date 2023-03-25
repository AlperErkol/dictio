import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Header.module.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import SearchBar from "./SearchBar";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
import SearchBar2 from "./SearchBar";

const Logo = require("../../public/logo-dictio.svg");

interface IProps {
  initialValue: string;
}

const Header: React.FC<IProps> = ({ initialValue }) => {
  return (
    <header className={styles.Header}>
      <Link href={"/"}>
        <Image
          className={styles.Logo}
          priority={true}
          width={30}
          height={30}
          src={Logo}
          alt="Dict.io Logo"
        />
      </Link>
      <SearchBar />
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="IconButton" aria-label="Customise options">
            bana bas
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
            <DropdownMenu.Item className="DropdownMenuItem">
              Light <BsFillSunFill size={24} />
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
              Dark <BsFillMoonFill size={24} />
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
              System <CgScreen size={24} />
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </header>
  );
};

export default Header;
