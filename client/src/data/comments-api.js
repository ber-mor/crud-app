import Axios from "axios";
const URL = "localhost"

/**
 * Retrieves the comments from the api
 * @return {Promise} The promise from the api call
 */
export const getComments = () =>{
    return Axios.get(`http://${URL}:3001/`)
}

/**
 * Makes a request to post new data to the api
 * @param {Object} data The object to post
 * @return {Promise}    The promise from the api call
 */
export const addComment = (data) =>{
    return Axios.post(`http://${URL}:3001/new`, data)
}

/**
 * Makes a request to put new data to the api
 * @param {Object} data The object to post
 * @return {Promise}    The promise from the api call
 */
export const updateComment = async (data) =>{
    try{
        await Axios.put(`http://${URL}:3001/update/${data.id}`, data)
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
        await Axios.delete(`http://${URL}:3001/delete/${id}`)
    }catch(error){
        console.error(error)
    }
}
