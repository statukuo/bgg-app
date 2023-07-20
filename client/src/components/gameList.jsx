import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteGame, getGames } from "../server_thunks/gameThunks";
import { selectGames } from "../slicers/gamesSlice";

export default function GameList () {
    const dispatch = useDispatch();

    const games = useSelector(selectGames);

    useEffect(() => {
        dispatch(getGames());
    }, [games.length]);

    function gameList () {
        return games.map((game) => {
            return (<tr key={game._id}>
                <td>{game.name}</td>
                <td>{game.position}</td>
                <td>{game.level}</td>
                <td>
                    <Link className="btn btn-link" to={`/edit/${game._id}`}>Edit</Link> |
                    <button className="btn btn-link"
                        onClick={() => {
                            dispatch(deleteGame(game._id));
                        }}
                    >
           Delete
                    </button>
                </td>
            </tr>);
        });
    }

    // This following section will display the table with the games of individuals.
    return (
        <div>
            <h3>Game List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{gameList()}</tbody>
            </table>
        </div>
    );
}
