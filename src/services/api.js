import axios from 'axios'

export const API = axios.create({
  baseURL: `https://got-quotes.herokuapp.com/`
})
