import axios from 'axios'

const url = 'https://localhost:5000/posts'

export const fetchPotst = () => axios.get(url)