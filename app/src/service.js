import axios from 'axios';

export function getNumbers() {
    return axios.get('http://localhost:3041/api/numbers')
}