import React, { useEffect, useState } from 'react'
import { fetchAll } from "../api"
import GenreRow from "./GenreRow"

export const ShowsTable = () => {
    const [shows, setShows] = useState([])
    useEffect(() => {
        (async () => {
            const fetchedShows = await fetchAll();
            setShows(fetchedShows);
        })();
    }, [])
    return shows.length && (
        <div>
            {shows.map((genre) => (
                <GenreRow key={genre.genre} data={genre} />
            ))}
        </div>

    );
}
export default ShowsTable;