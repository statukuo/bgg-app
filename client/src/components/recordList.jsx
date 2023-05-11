import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useSelector } from "react-redux";
import { selectToken } from "../features/auth/authSlice";

export default function RecordList () {
    const [records, setRecords] = useState([]);
    const token = useSelector(selectToken);

    useEffect(() => {
        async function getRecords () {
            const response = await Axios.get("http://localhost:5050/record/", { headers: { Authorization: `Bearer ${token}` } });

            if (response.status !== 200) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const records = await response.data;
            setRecords(records);
        }

        getRecords();
    }, [records.length]);

    // This method will delete a record
    async function deleteRecord (id) {
        await Axios.delete(`http://localhost:5050/record/${id}`, { headers: { Authorization: `Bearer ${token}` } });

        const newRecords = records.filter((el) => el._id !== id);
        setRecords(newRecords);
    }

    // This method will map out the records on the table
    function recordList () {
        return records.map((record) => {
            return (<tr key={record._id}>
                <td>{record.name}</td>
                <td>{record.position}</td>
                <td>{record.level}</td>
                <td>
                    <Link className="btn btn-link" to={`/edit/${record._id}`}>Edit</Link> |
                    <button className="btn btn-link"
                        onClick={() => {
                            deleteRecord(record._id);
                        }}
                    >
           Delete
                    </button>
                </td>
            </tr>);
        });
    }

    // This following section will display the table with the records of individuals.
    return (
        <div>
            <h3>Record List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{recordList()}</tbody>
            </table>
        </div>
    );
}
