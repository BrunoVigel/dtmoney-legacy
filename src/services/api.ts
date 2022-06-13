import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://dtmoney-one-mu.vercel.app/api'
})