import axios from 'axios';

export function getNumbers() {
    return axios.get('/api/numbers')
}