import axios from "axios"


const instance=axios.create({
    baseURL:"https://discord-app-9b2a.onrender.com"
})

export default instance;