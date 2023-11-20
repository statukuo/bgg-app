import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../slicers/userSlice";
import { patchCurrentUser } from "../../server_thunks/userThunks";
import { UserIcon, AtSymbolIcon, PhoneIcon } from "@heroicons/react/24/solid";

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
        <div className="w-full max-w-sm p-4 bg-dark border border-zinc-700 rounded-lg shadow sm:p-6 md:p-8">
            <form className="space-y-6" onSubmit={onSubmit}>
                <h5 className="text-xl font-medium">Actualiza tu perfil</h5>
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium">
                            Nombre:
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm bg-zinc-600 text-zinc-400 zinc-600 rounded-l-full">
                            <UserIcon className="w-4 h-4 cursor-pointer" />
                        </span>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="rounded-none rounded-r-full bg-zinc-50 text-zinc-900 focus:ring-orange-500 focus:border-orange-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="display name" required
                            value={form.name}
                            onChange={(e) => updateForm({ name: e.target.value })}
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="discordId"
                        className="block mb-2 text-sm font-medium">
                            Id de discord:
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm bg-zinc-600 text-zinc-400 rounded-l-full">
                            <AtSymbolIcon className="w-4 h-4 cursor-pointer" />
                        </span>
                        <input
                            type="text"
                            name=""
                            id="discordId"
                            className="rounded-none rounded-r-full bg-zinc-50 text-zinc-900 focus:ring-orange-500 focus:border-orange-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="example#4568"
                            value={form.discordId || ""}
                            onChange={(e) => updateForm({ discordId: e.target.value })}
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="phoneNumber"
                        className="block mb-2 text-sm font-medium">
                            Numero telefono (opcional):
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm bg-zinc-600 text-zinc-400 rounded-l-full">
                            <PhoneIcon className="w-4 h-4 cursor-pointer" />
                        </span>
                        <input
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            className="rounded-none rounded-r-full bg-zinc-50 text-zinc-900 focus:ring-orange-500 focus:border-orange-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="666-666-666"
                            value={form.phoneNumber || ""}
                            onChange={(e) => updateForm({ phoneNumber: e.target.value })}
                        />
                    </div>
                </div>
                <div className="flex space-x-4 justify-center items-center">
                    <button
                        onClick={() => navigate("/list")}
                        className="linear rounded-full text-xs md:text-sm border-2 border-solid border-red-400 px-4 py-2 mb-1 text-red-400 font-semibold transition duration-200 hover:bg-red-400 hover:text-zinc-700 active:bg-red-500 active:text-zinc-700 active:border-red-500"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={onSubmit}
                        className="linear rounded-full text-xs md:text-sm border-2 border-solid border-green-400 px-4 py-2 mb-1 text-green-400 font-semibold transition duration-200 hover:bg-green-400 hover:text-zinc-700 active:bg-green-500 active:text-zinc-700 active:border-green-500"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
}
