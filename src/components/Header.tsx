import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Header.module.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import SearchBar from "./SearchBar";
const Logo = require("../../public/logo.png");
const Header = () => {
  return (
    <header className={styles.Header}>
      <Link href={"/"}>
        <Image width={95} height={70} src={Logo} alt="Dict.io Logo" />
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
              New Tab <div className="RightSlot">⌘+T</div>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
              New Window <div className="RightSlot">⌘+N</div>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem" disabled>
              New Private Window <div className="RightSlot">⇧+⌘+N</div>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </header>
  );
};

export default Header;
