import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://motorss.vercel.app'
})

export default instance
