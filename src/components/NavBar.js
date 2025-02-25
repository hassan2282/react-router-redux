import React from "react";
import { Icon } from "react-icons-kit";
import {
  home,
  gears,
  film,
  lock,
  pencil,
  comment,
  shoppingCart,
} from "react-icons-kit/fa";
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div
      className="flex md:max-2xl:flex-row flex-col justify-center
      items-center md:max-2xl:items-center md:max-2xl:w-screen p-3 md:max-2xl:h-16 h-screen md:max-2xl:gap-4 gap-6 w-[20%]"
    >
      <Zoom>

        <Link to='/'>
          <Icon
            icon={home}
            className="text-white border-white flex justify-center items-center rounded-full
        md:max-2xl:p-2 md:max-2xl:border-2 text-center hover:scale-110 hover:duration-300 duration-300 cursor-pointer"
            size={28}
          />
        </Link>
        
        <Icon
          icon={gears}
          className="text-white border-white flex justify-center items-center rounded-full
       md:max-2xl:p-2 md:max-2xl:border-2 text-center hover:scale-110 hover:duration-300 duration-300 cursor-pointer"
          size={28}
        />
        <Icon
          icon={film}
          className="text-white border-white flex justify-center items-center rounded-full
       md:max-2xl:p-2 md:max-2xl:border-2 text-center hover:scale-110 hover:duration-300 duration-300 cursor-pointer"
          size={28}
        />
        <Icon
          icon={lock}
          className="text-white border-white flex justify-center items-center rounded-full
       md:max-2xl:p-2 md:max-2xl:border-2 text-center hover:scale-110 hover:duration-300 duration-300 cursor-pointer"
          size={28}
        />
        <Icon
          icon={pencil}
          className="text-white border-white flex justify-center items-center rounded-full
       md:max-2xl:p-2 md:max-2xl:border-2 text-center hover:scale-110 hover:duration-300 duration-300 cursor-pointer"
          size={28}
        />

        <Link to='/comments'>
          <Icon
            icon={comment}
            className="text-white border-white flex justify-center items-center rounded-full
        md:max-2xl:p-2 md:max-2xl:border-2 text-center hover:scale-110 hover:duration-300 duration-300 cursor-pointer"
            size={28}
          />
        </Link>

      <Link to='/products'>
          <Icon
            icon={shoppingCart}
            className="text-white border-white flex justify-center items-center rounded-full
            md:max-2xl:p-2 md:max-2xl:border-2 text-center hover:scale-110 hover:duration-300 duration-300 cursor-pointer"
            size={28}
          />
      </Link>
      </Zoom>
    </div>
  );
}

export default NavBar;
