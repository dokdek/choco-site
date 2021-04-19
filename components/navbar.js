//import React from "react";
import { useState, useEffect } from "react";
import Navlink from "./navbar-link";
import MobileNavlink from "./mobile-navlink";

export default function Navbar() {
  const [toggleMobile, setToggleMobile] = useState(true);

  function toggleMenu() {
    setToggleMobile(!toggleMobile);
  }

  function setActiveTab(tab) {}

  return (
    <nav class="bg-gray-700">
      <div class="mx-2">
        <div class="relative flex items-center justify-between h-14">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => toggleMenu()}
            >
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <h1 className="pt-1 text-pink-400 font-bold">Choco</h1>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <Navlink isActive={false} name={"Dashboard"} link={"#"} />
                <Navlink isActive={false} name={"Kanji"} link={"#"} />
                <Navlink isActive={false} name={"Vocabulary"} link={"#"} />
                <Navlink isActive={false} name={"Levels"} link={"#"} />
              </div>
            </div>
            <div class="absolute right-0 flex items-center pr-2">
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="sm:hidden" id="mobile-menu" hidden={toggleMobile}>
        <div class="px-2 pt-2 pb-3 space-y-1">
          <MobileNavlink isActive={false} name={"Dashboard"} link={"#"} />
          <MobileNavlink isActive={false} name={"Kanji"} link={"#"} />
          <MobileNavlink isActive={false} name={"Vocabulary"} link={"#"} />
          <MobileNavlink isActive={false} name={"Levels"} link={"#"} />
        </div>
      </div>
    </nav>
  );
}
