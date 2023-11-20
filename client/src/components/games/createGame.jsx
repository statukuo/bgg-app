import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { createGame } from "../../server_thunks/gameThunks";

const DEFAULT_STATE = {
    imagePath: "",
    title: "",
    date: Date.now(),
    duration: 1,
    maxPlayers: 1,
    players: [],
    playersOnWait: []
};

const CreateGame = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState(DEFAULT_STATE);
    const navigate = useNavigate();

    // These methods will update the state properties.
    const updateForm = (value) => {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const newGame = { ...form };

        dispatch(createGame(newGame));

        setForm(DEFAULT_STATE);
        navigate("/list");
    };

    return (
        <div className="w-full max-w-sm p-4 bg-dark rounded-lg shadow sm:p-6 md:p-8">
            <form className="space-y-6" onSubmit={onSubmit}>
                <h5 className="text-xl font-medium">Crear nueva partida</h5>
                <div>
                    <label
                        htmlFor="imagePath"
                        className="block mb-2 text-sm font-medium">
                            Image Path:
                    </label>
                    <input
                        type="text"
                        name="imagePath"
                        id="imagePath"
                        className="bg-zinc-50 bg-zinc-600 placeholder-zinc-400 text-sm rounded-full focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                        placeholder="image Path" required
                        value={form.imagePath}
                        onChange={(e) => updateForm({ imagePath: e.target.value })}
                    />
                </div>
                <div>
                    <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium">
                            Title:
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="bg-zinc-50 bg-zinc-600 placeholder-zinc-400 text-sm rounded-full focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                        placeholder="image Path" required
                        value={form.title}
                        onChange={(e) => updateForm({ title: e.target.value })}
                    />
                </div>
                <div>
                    <label
                        htmlFor="date"
                        className="block mb-2 text-sm font-medium">
                            Date:
                    </label>
                    <input
                        type="datetime-local"
                        name="date"
                        id="date"
                        className="bg-zinc-50 bg-zinc-600 placeholder-zinc-400 text-sm rounded-full focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                        placeholder="image Path" required
                        value={form.date}
                        onChange={(e) => updateForm({ date: e.target.value })}
                    />
                </div>
                <div>
                    <label
                        htmlFor="duration"
                        className="block mb-2 text-sm font-medium">
                            Duration:
                    </label>
                    <input
                        type="time"
                        step="0.001"
                        name="duration"
                        id="duration"
                        className="bg-zinc-50 bg-zinc-600 placeholder-zinc-400 text-sm rounded-full focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                        placeholder="image Path" required
                        value={form.duration}
                        onChange={(e) => updateForm({ duration: e.target.value })}
                    />
                </div>
                <div>
                    <label
                        htmlFor="maxPlayers"
                        className="block mb-2 text-sm font-medium">
                            Max Players:
                    </label>
                    <input
                        type="number"
                        name="maxPlayers"
                        id="maxPlayers"
                        className="bg-zinc-50 bg-zinc-600 placeholder-zinc-400 text-sm rounded-full focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                        placeholder="image Path" required
                        value={form.maxPlayers}
                        onChange={(e) => updateForm({ maxPlayers: e.target.value })}
                    />
                </div>
                <div className="flex space-x-4 justify-center items-center">
                    <button
                        onClick={onSubmit}
                        className="linear rounded-full text-xs md:text-sm border-2 border-solid border-orange-400 px-4 py-2 mb-1 text-orange-400 font-semibold transition duration-200 hover:bg-orange-400 hover:text-zinc-700 active:bg-orange-500 active:text-zinc-700 active:border-orange-500"
                    >
                        Create game
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateGame;
