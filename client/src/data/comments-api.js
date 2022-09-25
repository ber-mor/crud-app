import Axios from "axios";

export const getComments = async (setData) =>{
    try{
        const response = await Axios.get("http://192.168.100.27:3001/")
        setData(response.data)
    }catch(error){
        console.error(error)
    }
}

export const updateComment = async (data) =>{
    try{
        const id = data.id
        await Axios.put(`http://192.168.100.27:3001/update/${id}`)
        alert("Comment updated")
    }catch(error){
        console.error(error)
    }
}

export const deleteComment = async (id) =>{
    try{
        await Axios.delete(`http://192.168.100.27:3001/delete/${id}`)
        alert("Comment deleted")
    }catch(error){
        console.error(error)
    }
}

export const addComment = async (data) =>{
    try{
        await Axios.post(`http://192.168.100.27:3001/new`, data)
        alert("Comment added")
    }catch(error){
        console.log(error)
    }
}