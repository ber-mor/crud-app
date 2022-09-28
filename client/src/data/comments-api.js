import Axios from "axios";
const URL = "https://www.api.bernardomorcon.com/"

/**
 * Retrieves the comments from the api
 * @return {Promise} The promise from the api call
 */
export const getComments = () =>{
    return Axios.get(URL)
}

/**
 * Makes a request to post new data to the api
 * @param {Object} data The object to post
 * @return {Promise}    The promise from the api call
 */
export const addComment = (data) =>{
    return Axios.post(URL, data)
}

/**
 * Makes a request to put new data to the api
 * @param {Object} data The object to post
 * @return {Promise}    The promise from the api call
 */
export const updateComment = async (data) =>{
    try{
        await Axios.put(URL, data)
        alert("Comment updated")
    }catch(error){
        console.error(error)
    }
}

/**
 * Makes a request to put new data to the api
 * @param {Integer} id The id of the object to be deleted
 * @return {Promise}   The promise from the api call
 */
export const deleteComment = async (id) =>{
    try{
        await Axios.delete(URL)
    }catch(error){
        console.error(error)
    }
}
