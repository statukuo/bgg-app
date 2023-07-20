import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../../server_thunks/gameThunks";
import { selectGames, setGameToEdit } from "../../slicers/gamesSlice";
import Game from "./game";

const GameList = () => {
    const dispatch = useDispatch();
    const games = useSelector(selectGames);

    useEffect(() => {
        dispatch(getGames());
    }, [games.length, setGameToEdit]);

    const gameList = () => {
        return games.map((game) => {
            return <Game
                id={game._id}
                key={game._id}
                title={game.title}
                imagePath={game.imagePath}
                date={game.date}
                duration={game.duration}
                players={game.players}
                maxPlayers={game.maxPlayers}
            />;
        });
    };
    return (

        <div className="bg-zinc-700">
            <div className="grid h-full max-w-lg grid-cols-1 mx-auto gap-3 p-3 ">
                {gameList()}
            </div>
        </div>
    );
};

export default GameList;
