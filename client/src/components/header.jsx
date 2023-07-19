import React from "react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const Header = () => (
    <header className="sticky top-0 z-50 w-full bg-dark shadow-md">

        <div className="grid h-full max-w-lg grid-cols-12 mx-auto px-4">

            {/* Search  */}
            <div className="py-4 col-span-9">
                <div className="flex items-center rounded-full py-2 md:shadow-sm bg-zinc-700">
                    <input
                        type="text"
                        placeholder="Buscar partida"
                        className="flex-grow pl-5 bg-transparent outline-none text-zinc-300 placeholder-zink-200 text-sm"
                    />
                    <MagnifyingGlassIcon
                        className="h-8 bg-orange-400 text-dark rounded-full p-2 cursor-pointer mx-2"
                    />
                </div>
            </div>

            {/* Right  */}
            <div className="py-4 col-span-3">
                <div className="flex items-center space-x-4 justify-end text-zinc-300">
                    <p className="hidden">User Name</p>
                    <div className="flex items-center space-x-2 p-2 rounded-full border-2 border-zink-300">
                        <Bars3Icon className="h-6 cursor-pointer" />
                        <UserCircleIcon className="h-6 cursor-pointer" />
                    </div>
                </div>
            </div>

        </div>

    </header>
);

export default Header;
