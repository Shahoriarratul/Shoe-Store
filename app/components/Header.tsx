"use client";
import { useState } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("transtalate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className=" h-[60px] flex justify-between items-center">
        <Link href="/">
          <Image
            width={40}
            height={40}
            src="/logo.svg"
            className=" w-[40px] md:w-[60px]"
            alt="Logo"
          />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        <div className="dlex items-center gap-2 text-black">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/0.05 ">
            <BsCart />
            <div>5</div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;