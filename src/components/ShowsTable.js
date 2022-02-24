import React, { useEffect, useState } from 'react'
import { fetchAll } from "../api"

export const ShowsTable = () => {
    const [shows, setShows] = useState([])
    useEffect(() => {
        fetchAll().then(function (response) {
            console.log({ response })
            setShows(response.data)
        }).catch(function (error) {
            console.log(error);
        });
    }, [])
    console.log({ shows })
    return (shows.length && <div>shows table</div>)
}
export default ShowsTable;