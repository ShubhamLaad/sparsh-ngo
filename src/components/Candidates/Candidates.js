import React from 'react';
import CANDIDATES from '../../json/CANDIDATES.json'

export default function Candidates(props) {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                {/* <th>Contact Number</th> */}
                <th>Location</th>
                {/* <th>Position</th> */}
                {/* <th>Duration</th> */}
                <th>Opting For</th>
            </tr>
            {
                CANDIDATES.map(canditate => <tr key={canditate.Email}>
                    <td>{canditate.Name}</td>
                    <td>{canditate.Gender}</td>
                    <td>{canditate.Email}</td>
                    {/* <td>{canditate.ContactNumber}</td> */}
                    <td>{canditate.Location}</td>
                    {/* <td>{canditate.Position}</td> */}
                    {/* <td>{canditate.Duration}</td> */}
                    <td>{canditate.OptingFor}</td>
                </tr>)
            }
        </table>
    );
}
