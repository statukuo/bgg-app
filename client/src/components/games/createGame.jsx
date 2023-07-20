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
        <div>
            <h3>Create New Game</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="imagePath">Image Path</label>
                    <input
                        type="text"
                        className="form-control"
                        id="imagePath"
                        value={form.imagePath}
                        onChange={(e) => updateForm({ imagePath: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={form.title}
                        onChange={(e) => updateForm({ title: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={form.date}
                        onChange={(e) => updateForm({ date: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Duration</label>
                    <input
                        type="number"
                        className="form-control"
                        id="duration"
                        value={form.duration}
                        onChange={(e) => updateForm({ duration: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="maxPlayers">Max Players</label>
                    <input
                        type="number"
                        className="form-control"
                        id="maxPlayers"
                        value={form.maxPlayers}
                        onChange={(e) => updateForm({ maxPlayers: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Create game"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateGame;
