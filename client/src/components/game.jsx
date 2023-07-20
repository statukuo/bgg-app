import React from "react";

const Game = () => (

    <div className="p-3 items-center justify-center rounded-xl group flex space-x-6 bg-dark bg-opacity-50 shadow-xl">
        <div className="grid grid-cols-2 gap-3">

            <div className="relative">
                <img src="./imgs/nemesis-lockown.jpg" className="h-auto w-full rounded-xl 3xl:h-full 3xl:w-full" alt="" />
                <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-orange-400 p-2 hover:cursor-pointer">
                    <div className="flex h-full w-full items-center justify-center rounded-full">
                        <span className="font-bold text-xs md:text-sm text-zinc-700">8.5</span>
                    </div>
                </button>
            </div>

            <div className="flex flex-col justify-between">
                <div className="">
                    <p className="text-sm md:text-lg font-bold text-white">Nemesis LockDown</p>
                    <p className="mt-1 text-xs md:text-sm font-medium text-zinc-300 md:mt-2">Fecha: <span className="font-bold">25/07/23</span></p>
                    <p className="mt-1 text-xs md:text-sm font-medium text-zinc-300 md:mt-2">Hora de Inicio: <span className="font-bold">17:00</span></p>
                    <p className="mt-1 text-xs md:text-sm font-medium text-zinc-300 md:mt-2">Duración: <span className="font-bold">90 - 180 min.</span></p>
                    <p className="mt-1 text-xs md:text-sm font-medium text-zinc-300 md:mt-2">Players: <span className="font-bold">2/5</span></p>
                </div>
                <div className="flex justify-end items-center">
                    <button href="" className="linear rounded-[20px] text-xs md:text-sm border-2 border-solid border-orange-400 px-4 py-2 mb-1 text-orange-400 font-semibold transition duration-200 hover:bg-orange-400 hover:text-zinc-700 active:bg-orange-500 active:text-zinc-700 active:border-orange-500">Im in Bitch!</button>
                </div>
            </div>

        </div>

    </div>

);

export default Game;
