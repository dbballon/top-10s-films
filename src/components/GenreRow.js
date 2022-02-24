import React from 'react'

export const GenreRow = ({ data }) => {
    return (
        <div className={"genreRow"}>
            <div className={"GenreTitle"}>{data.genre}</div>
            {data.shows.map((show, i) => (
                <div className={"showBox"} key={i}><img alt={show.name} src={show.image.medium} /></div>)
            )}
        </div>
    )
}
export default GenreRow;