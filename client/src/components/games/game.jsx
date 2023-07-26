import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteGame, joinGame, leaveGame } from "../../server_thunks/gameThunks";
import { selectUser } from "../../slicers/userSlice";

const Game = ({ id, title, imagePath, date, duration, players, maxPlayers }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector(selectUser);

    const renderJoinLeaveButton = () => {
        if (!players.find(player => player === currentUser._id)) {
            return <div className="flex justify-end items-center">
                <button href=""
                    className="linear rounded-[20px] text-xs md:text-sm border-2 border-solid border-orange-400 px-4 py-2 mb-1 text-orange-400 font-semibold transition duration-200 hover:bg-orange-400 hover:text-zinc-700 active:bg-orange-500 active:text-zinc-700 active:border-orange-500"
                    onClick={() => {
                        dispatch(joinGame(id, currentUser._id));
                    }}>
                Im in Bitch!
                </button>
            </div>;
        } else {
            return <div className="flex justify-end items-center">
                <button href=""
                    className="linear rounded-[20px] text-xs md:text-sm border-2 border-solid border-orange-400 px-4 py-2 mb-1 text-orange-400 font-semibold transition duration-200 hover:bg-orange-400 hover:text-zinc-700 active:bg-orange-500 active:text-zinc-700 active:border-orange-500"
                    onClick={() => {
                        dispatch(leaveGame(id, currentUser._id));
                    }}>
                Leave!
                </button>
            </div>;
        }
    };

    return <div className="p-3 items-center justify-center rounded-xl group flex space-x-6 bg-dark bg-opacity-50 shadow-xl">
        <div className="grid grid-cols-2 gap-3">

            <div className="relative">
                <img src={imagePath} className="h-auto w-full rounded-xl 3xl:h-full 3xl:w-full" alt="" />
                <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-orange-400 p-2 hover:cursor-pointer">
                    <div className="flex h-full w-full items-center justify-center rounded-full">
                        <span className="font-bold text-xs md:text-sm text-zinc-700">8.5</span>
                    </div>
                </button>
            </div>

            <div className="flex flex-col justify-between">
                <div className="">
                    <p className="text-sm md:text-lg font-bold text-white">{title}</p>
                    <p className="mt-1 text-xs md:text-sm font-medium text-zinc-300 md:mt-2">Fecha: <span className="font-bold">{date.split("T")[0]}</span></p>
                    <p className="mt-1 text-xs md:text-sm font-medium text-zinc-300 md:mt-2">Hora de Inicio: <span className="font-bold">{date.split("T")[1]}</span></p>
                    <p className="mt-1 text-xs md:text-sm font-medium text-zinc-300 md:mt-2">Duración: <span className="font-bold">{duration}</span></p>
                    <p className="mt-1 text-xs md:text-sm font-medium text-zinc-300 md:mt-2">Players: <span className="font-bold">{players.length}/{maxPlayers}</span></p>
                </div>
                <div className="flex justify-end items-center">
                    <button
                        href=""
                        className="linear rounded-[20px] text-xs md:text-sm border-2 border-solid border-orange-400 px-4 py-2 mb-1 text-orange-400 font-semibold transition duration-200 hover:bg-orange-400 hover:text-zinc-700 active:bg-orange-500 active:text-zinc-700 active:border-orange-500"
                        onClick={() => navigate(`/edit/${id}`)}
                    >
                        Edit
                    </button>
                </div>
                <div className="flex justify-end items-center">
                    <button
                        href=""
                        className="linear rounded-[20px] text-xs md:text-sm border-2 border-solid border-orange-400 px-4 py-2 mb-1 text-orange-400 font-semibold transition duration-200 hover:bg-orange-400 hover:text-zinc-700 active:bg-orange-500 active:text-zinc-700 active:border-orange-500"
                        onClick={() => {
                            dispatch(deleteGame(id));
                        }}>
                        Delete
                    </button>
                </div>
                { renderJoinLeaveButton() }
            </div>

        </div>

    </div>;
};

export default Game;
