import React from "react";
import { HomeIcon, CalendarDaysIcon, PlusIcon, BuildingStorefrontIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

const BottomNav = () => (
    <div className="sticky bottom-0 z-50 w-full bg-dark bottom-nav">

        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
            <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-zinc-700 group">
                <HomeIcon className="w-6 h-6 mb-1 text-zinc-300 group-hover:text-orange-400" />
                <span className="sr-only">Home</span>
            </button>
            <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Home
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button data-tooltip-target="tooltip-bookmark" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-zinc-700 group">
                <CalendarDaysIcon className="w-6 h-6 mb-1 text-zinc-300 group-hover:text-orange-400" />
                <span className="sr-only">Partidas</span>
            </button>
            <div id="tooltip-bookmark" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Partidas
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button data-tooltip-target="tooltip-post" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-zinc-700 group">
                <PlusIcon className="w-8 h-8 mb-1 text-zinc-300 group-hover:text-orange-400" />
                <span className="sr-only">Partida Nueva</span>
            </button>
            <div id="tooltip-post" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Partida Nueva
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button data-tooltip-target="tooltip-search" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-zinc-700 group">
                <BuildingStorefrontIcon className="w-6 h-6 mb-1 text-zinc-300 group-hover:text-orange-400"/>
                <span className="sr-only">Tienda</span>
            </button>
            <div id="tooltip-search" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Tienda
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-zinc-700 group">
                <EllipsisHorizontalIcon className="w-8 h-8 mb-1 text-zinc-300 group-hover:text-orange-400" />
                <span className="sr-only">Estadísticas</span>
            </button>
            <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Estadísticas
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </div>
);

export default BottomNav;
