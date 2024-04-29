'use client'

import { useEffect, useState } from 'react'

export default function UserTable(props) {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const response = await fetch(
                '/api/backend/get-all-data/' + props.dataType,
                { method: 'GET' }
            )
            const data = await response.json()
            console.log(data)
            setUserData(data.adminData)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <p className="text-xl mt-4">{props.dataType} Data</p>
            <table className="w-full border-black border border-solid border-r">
                <tbody>
                    <tr className="bg-[#dddddd]">
                        {props.tableHeader.map((header, i) => {
                            return (
                                <th
                                    className="border-black border border-solid"
                                    key={i}
                                >
                                    {header}
                                </th>
                            )
                        })}
                    </tr>
                    {userData.map((row, i) => {
                        return (
                            <tr key={i}>
                                {props.tableHeader.map((header, j) => {
                                    return (
                                        <td
                                            className="border-black border border-solid p-1 m-1"
                                            key={j}
                                        >
                                            <div>
                                                {JSON.stringify(row[header])}
                                                {header === "imageURL" && <img src={row[header]} alt="anti-warn"></img>}
                                            </div>
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
