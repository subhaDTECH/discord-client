import axios from "axios"


const instance=axios.create({
    baseURL:"https://discord-app-mern.herokuapp.com"
})

export default instance;