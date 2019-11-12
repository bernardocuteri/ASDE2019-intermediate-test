import axios from 'axios'


//l'url di base della mia applicazione, lato server, è http://localhost:8080/blog-service/"
export default axios.create( {
    baseURL: "http://localhost:8080/"
});
