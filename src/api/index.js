import axios from 'axios';

export const fetchAll = async () => {
    const { data } = await axios.get('https://api.tvmaze.com/shows')
        .then(function (response) {
            return response
        }).catch(function (error) {
            console.log(error);
        });
    const formattedData = formatShows(data)
    return formattedData;
}
export const fetchShow = async (id) => {
    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`)
        .then(function (response) {
            return response
        }).catch(function (error) {
            console.log(error);
        });
    return data;
}
const formatShows = (data) => {
    const genres = data.map(item => item.genres)
    let uniqueGenres = [...new Set(genres.flat())]
    const newData = uniqueGenres.map(genre => {
        const shows = data.filter(d => d.genres.includes(genre))
        const sortedShows = shows.sort((a, b) => {
            if (a.rating.average > b.rating.average) return 1;
            else if (a.rating.average < b.rating.average) return -1;
            else return 0
        })
        return { genre: genre, shows: sortedShows.slice(0, 10) }
    })
    return newData
}