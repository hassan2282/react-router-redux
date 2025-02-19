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

function NavBar() {
  return (
    <div
      className="flex md:max-2xl:flex-row flex-col justify-center hover:shadow-lg 
      items-center md:max-2xl:items-center md:max-2xl:w-screen p-3 md:max-2xl:h-16 h-screen md:max-2xl:gap-4 gap-6 bg-zinc-800">
        <Zoom>

        <Icon
        icon={home}
        className="text-white border-white flex justify-center items-center rounded-full
       md:max-2xl:p-2 md:max-2xl:border-2 text-center hover:scale-110 hover:duration-300 duration-300 cursor-pointer"
        size={28}
      />
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
      <Icon
        icon={comment}
        className="text-white border-white flex justify-center items-center rounded-full
       md:max-2xl:p-2 md:max-2xl:border-2 text-center hover:scale-110 hover:duration-300 duration-300 cursor-pointer"
        size={28}
      />

        <Icon
          icon={shoppingCart}
          className="text-white border-white flex justify-center items-center rounded-full
          md:max-2xl:p-2 md:max-2xl:border-2 text-center hover:scale-110 hover:duration-300 duration-300 cursor-pointer"
          size={28}
        />

        </Zoom>
      
    </div>
  );
}

export default NavBar;
