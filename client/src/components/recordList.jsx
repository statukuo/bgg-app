import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecord, getRecords } from "../server_thunks/recordThunks";
import { selectRecords } from "../slicers/recordsSlice";

export default function RecordList () {
    const dispatch = useDispatch();

    const records = useSelector(selectRecords);

    useEffect(() => {
        dispatch(getRecords());
    }, [records.length]);

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
                            dispatch(deleteRecord(record._id));
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
