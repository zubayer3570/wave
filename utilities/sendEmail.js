import axios from "axios"

export const sendEmail = (data) => {
    axios.post("https://mailing-service.onrender.com", {
        name : data.name,
        email : data.email,
        text : data.message
    })
}