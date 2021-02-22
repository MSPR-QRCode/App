//import extern librairy 
import axios from 'axios'; 

/**
 * export axios
 */
export default axios.create({
    baseURL: "https://api-mspr.thejulienm.fr/api/", 
    headers: {"MSPR-ApiKey": "nAaVgDtxKrygcvzxwagUwvwFJUKwZBHuQWPSYmaAjNqmArxxfTTuaQxxkyvfjFTPmbzwHmjWmdGWejxcVNbphSvnybHEyXfcYEYp"}, 
}); 