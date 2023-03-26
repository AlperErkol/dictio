import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
import React from "react";

const Dropdown = () => {
  return (
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
  );
};

export default Dropdown;
