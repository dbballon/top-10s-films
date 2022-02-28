import React from 'react'
import { Link } from "react-router-dom";

export const GenreRow = ({ data }) => {
    return (
        <div className={"genreRow"}>
            <div className={"GenreTitle"}>Top 10 {data.genre}</div>
            {data.shows.map((show, i) => (
                <Link to={`/show/${show.id}`} className={"showBox"} key={i}><img alt={show.name} src={show.image.medium} /></Link>)
            )}
        </div>
    )
}
export default GenreRow;