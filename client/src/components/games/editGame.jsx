import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getGameToEdit, patchGame } from "../../server_thunks/gameThunks";
import { selectGameToEdit, setGameToEdit } from "../../slicers/gamesSlice";

const DEFAULT_STATE = {
    imagePath: "",
    title: "",
    date: Date.now(),
    duration: 1,
    maxPlayers: 1,
    players: [],
    playersOnWait: []
};

const EditGame = () => {
    const [form, setForm] = useState(DEFAULT_STATE);
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const gameToEdit = useSelector(selectGameToEdit);

    useEffect(() => {
        dispatch(getGameToEdit(params.id));
    }, [params.id]);

    useEffect(() => {
        if (gameToEdit) {
            setForm(gameToEdit);
        }
    }, [gameToEdit]);

    const updateForm = (value) => {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const editedPerson = {
            imagePath: form.imagePath,
            title: form.title,
            date: form.date,
            duration: form.duration,
            maxPlayers: form.maxPlayers,
            players: form.players,
            playersOnWait: form.playersOnWait
        };

        dispatch(patchGame(params.id, editedPerson));
        dispatch(setGameToEdit({}));

        navigate("/list");
    };

    return (
        <div>
            <h3>Update Game</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="imagePath">Image Path: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="imagePath"
                        value={form.imagePath}
                        onChange={(e) => updateForm({ imagePath: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
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
                <br />

                <div className="form-group">
                    <input
                        type="submit"
                        value="Update Game"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
};

export default EditGame;
