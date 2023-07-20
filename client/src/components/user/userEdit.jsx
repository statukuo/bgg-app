import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../slicers/userSlice";
import { patchCurrentUser } from "../../server_thunks/userThunks";

export default function UserEdit () {
    const [form, setForm] = useState({
        name: "",
        discordId: "",
        phoneNumber: ""
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    useEffect(() => {
        if (user) {
            setForm(user);
        }
    }, [user]);

    function updateForm (value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit (e) {
        e.preventDefault();
        const editedUser = {
            name: form.name,
            discordId: form.discordId,
            phoneNumber: form.phoneNumber
        };

        dispatch(patchCurrentUser(user.id, editedUser));

        navigate("/list");
    }

    // This following section will display the form that takes input from the user to update the data.
    return (
        <div>
            <h3>Update Game</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={form.name}
                        onChange={(e) => updateForm({ name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="discordId">Id de discord: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="discordId"
                        value={form.discordId || ""}
                        onChange={(e) => updateForm({ discordId: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Numero de telefono (opcional): </label>
                    <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        value={form.phoneNumber || ""}
                        onChange={(e) => updateForm({ phoneNumber: e.target.value })}
                    />
                </div>
                <br />

                <div className="form-group">
                    <input
                        onClick={() => navigate("/list")}
                        value="Cancelar"
                        className="btn btn-danger"
                    />
                </div>
                <div className="form-group">
                    <input
                        onClick={onSubmit}
                        value="Guardar"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}
