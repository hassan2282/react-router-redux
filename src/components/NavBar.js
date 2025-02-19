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

function NavBar() {
  return (
    <div
      className="flex flex-row justify-center hover:shadow-lg hover:*:text-[#4deaff] items-center w-screen h-16 bg-zinc-800"
      dir="rtl"
    >
      <Icon
        icon={home}
        className="text-white border-white flex justify-center items-center rounded-full
       p-2 border-2 text-center mr-5 hover:scale-110 hover:duration-300 duration-300 cursor-pointer"
        size={28}
      />
      <Icon
        icon={gears}
        className="text-white border-white flex justify-center items-center rounded-full
       p-2 border-2 text-center mr-5 hover:scale-110 hover:duration-300 duration-300 cursor-pointer"
        size={28}
      />
      <Icon
        icon={film}
        className="text-white border-white flex justify-center items-center rounded-full
       p-2 border-2 text-center mr-5 hover:scale-110 hover:duration-300 duration-300 cursor-pointer"
        size={28}
      />
      <Icon
        icon={lock}
        className="text-white border-white flex justify-center items-center rounded-full
       p-2 border-2 text-center mr-5 hover:scale-110 hover:duration-300 duration-300 cursor-pointer"
        size={28}
      />
      <Icon
        icon={pencil}
        className="text-white border-white flex justify-center items-center rounded-full
       p-2 border-2 text-center mr-5 hover:scale-110 hover:duration-300 duration-300 cursor-pointer"
        size={28}
      />
      <Icon
        icon={comment}
        className="text-white border-white flex justify-center items-center rounded-full
       p-2 border-2 text-center mr-5 hover:scale-110 hover:duration-300 duration-300 cursor-pointer"
        size={28}
      />
        <Icon
          icon={shoppingCart}
          className="text-white border-white flex justify-center items-center rounded-full
          p-2 border-2 text-center mr-5 hover:scale-110 hover:duration-300 duration-300 cursor-pointer"
          size={28}
        />
    </div>
  );
}

export default NavBar;
