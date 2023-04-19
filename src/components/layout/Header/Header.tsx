import React from "react";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="mx-auto">
        <div className="relative flex gap-4">
          <div className="flex flex-1"></div>
          <div className="flex flex-1 justify-end md:justify-center">
            <div className="pointer-events-auto hidden md:block">
              <ul className="flex rounded-full bg-white/90 px-2.5 py-1.5 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                <li>
                  <a
                    className="relative block px-5 py-2 text-base transition hover:text-purple-500 dark:hover:text-purple-400"
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="relative block px-5 py-2 text-base transition hover:text-purple-500 dark:hover:text-purple-400"
                    href="/about"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="relative block px-5 py-2 text-base transition hover:text-purple-500 dark:hover:text-purple-400"
                    href="/about"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    className="relative block px-5 py-2 text-base transition hover:text-purple-500 dark:hover:text-purple-400"
                    href="/about"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end md:flex-1">
            <div className="pointer-events-auto">
              <button type="button">Theme</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
