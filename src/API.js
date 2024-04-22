import axios from 'axios';
// user auth API
export const userAPI = axios.create({ 
    baseURL: process.env.REACT_APP_API_URL 
});
// quiz API
export const quizAPI = axios.create({
    baseURL: 'https://opentdb.com'
})
