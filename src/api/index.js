import axios from 'axios';

export const fetchAll = async () => {
    return await axios.get('https://api.tvmaze.com/shows')
}