import React from 'react'
import DeletePostFunction from '../deletePostFunction/deletePostFunction'
import './deletePostModalStyle.scss'

const DeletePostModal = (props) => {
    const { setShowDeleteModal, setDarkenBg, deleteJournalPost, postId } = props

    // cancel deletion
    const cancelDelete = () => {
        setShowDeleteModal(false)
        setDarkenBg(false)
    }

    return (
        <div id="deleteModalContainer">
            <h1 id="deleteTitle">Are you sure you want to delete this post?</h1>
            
            <div id="deleteButtonsDiv">
                <button onClick={() => DeletePostFunction(postId)} id="deleteButton">Delete</button>
                <button onClick={() => {cancelDelete()}} id="cancelButton">Cancel</button>
            </div>
            
        </div>
    )
}

export default DeletePostModal
