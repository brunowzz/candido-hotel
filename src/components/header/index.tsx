"use client";

import { ThemeContext } from "@/context/themeContext";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Header() {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const { data: session } = useSession();

  return (
    <header className="container mx-auto flex flex-wrap items-center justify-between px-4 py-10 text-xl md:flex-nowrap">
      <div className="flex w-full items-center justify-center md:h-2/3 md:w-1/2 md:justify-start">
        <Link href="/" className="font-black text-tertiary-dark">
          Cândido Hotel
        </Link>

        <ul className="ml-5 flex items-center">
          <li className="flex items-center">
            {session?.user ? (
              <Link href={`/users/${session.user.id}`}>
                {session.user.image ? (
                  <figure className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={session.user.image}
                      alt={session.user.name!}
                      width={40}
                      height={40}
                      className="img scale-animation"
                    />
                  </figure>
                ) : (
                  <FaUserCircle className="cursor-pointer" />
                )}
              </Link>
            ) : (
              <Link href="/auth">
                <FaUserCircle className="cursor-pointer" />
              </Link>
            )}
          </li>

          <li className="ml-2">
            {darkTheme ? (
              <MdOutlineLightMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem("hotel-theme");
                }}
              />
            ) : (
              <MdDarkMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem("hotel-theme", "true");
                }}
              />
            )}
          </li>
        </ul>
      </div>

      <ul className="mt-4 flex w-full items-center justify-evenly md:w-1/2">
        <li className="transition-all duration-500 hover:-translate-y-2">
          <Link href="/"> Home </Link>
        </li>

        <li className="transition-all duration-500 hover:-translate-y-2">
          <Link href="/rooms"> Quartos </Link>
        </li>

        <li className="transition-all duration-500 hover:-translate-y-2">
          <Link href="/contact"> Contato </Link>
        </li>
      </ul>
    </header>
  );
}
