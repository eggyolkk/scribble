import axios from 'axios'
import { API } from '../utilities/utilities'

// delete the selected journal post
const deletePost = (id) => {
    const deleteHeader = { headers: { 'Content-Type': 'application/json' }}
    axios.delete(`${API}/journals/${id}`, {deleteHeader, withCredentials: true, crossDomain: true})
    .then(response => window.location.href = response.data.redirect)
}

export default deletePost
