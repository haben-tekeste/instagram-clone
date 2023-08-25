import React from "react";
import Image from "next/image";

import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
      {/* left */}
      <div className=" cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
        <Image
          src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
          layout="fill"
          className="object-contain"
          alt="instagram logo"
        />
      </div>
      <div className=" cursor-pointer h-24 w-10 relative lg:hidden">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
          layout="fill"
          className="object-contain"
          alt="instagram logo"
        />
      </div>
      {/* middle */}
      <div className="relative mt-1">
        <div className="absolute top-2 left-2">
          <MagnifyingGlassIcon className="h-5 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
        />
      </div>

      {/* right */}
      <div className="flex space-x-4 items-center">
        <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200" />
        <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200" />
        <img
          src="https://placehold.co/400"
          alt="profile image"
          className="h-10 rounded-full"
        />
      </div>
    </div>
  );
}
