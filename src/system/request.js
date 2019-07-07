import axios from 'axios'
import router from './../router'

function checkStatus(status) {
    if (status === 401) {
        router.push('/login')
    }
}

const request = axios.create({
    baseURL: (process.env.VUE_APP_BASE_URL !== undefined) ? process.env.VUE_APP_BASE_URL : '//ssd.test/api/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    validateStatus: (status) => {
        checkStatus(status)
        return status >= 200 && status < 500
    },
})

request.CancelToken = axios.CancelToken
request.isCancel = axios.isCancel

request.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem('accessToken')

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }

        return config
    },

    (error) => {
        const { config, response: { status } } = error
        checkStatus(status)
        return Promise.reject(error)
    }
)

export default request