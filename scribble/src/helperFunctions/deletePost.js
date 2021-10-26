import axios from 'axios'

// delete the selected journal post
const deletePost = (id) => {
    const deleteHeader = { headers: { 'Content-Type': 'application/json' }}
    axios.delete(`http://localhost:5000/journals/${id}`, {deleteHeader}, {crossDomain: true})
    .then(response => window.location.href = response.data.redirect)
}

export default deletePost
