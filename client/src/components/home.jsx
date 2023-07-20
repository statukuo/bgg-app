import React from "react";
import Game from "./game";

const Home = () => (
    <div className="bg-zinc-700">
        <div className="grid h-full max-w-lg grid-cols-1 mx-auto gap-3 p-3 ">
            <Game />
            <Game />
            <Game />
        </div>
    </div>
);

export default Home;
