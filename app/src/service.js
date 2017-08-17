import axios from 'axios';

let obj = {
    "id": 1,
    "item": 'hello'
}

export function getNumbers() {
    return axios.get('/api/numbers')
}