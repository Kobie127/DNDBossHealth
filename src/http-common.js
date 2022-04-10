import axios from "axios";

// Configuring the base url call for our api
export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json"
    }
});