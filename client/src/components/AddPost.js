import React, { useState } from 'react'

const AddPost = (props) => {
    const [creator, setCreator] = useState("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const addPostButtonPressed = () => {
        props.createPost({
            creator: creator,
            message: message,
            title: title,
        });
        setCreator("");
        setTitle("");
        setMessage("");
    }
    
    return (
        <div className="container">
            <div className="row">
                <h2>Add Post</h2>
            </div>
            <div className="row">
            <label htmlFor="creator-field">creator:</label>
                <input
                    type="text"
                    id="creator-field"
                    className="form-control"
                    value={creator}
                    onChange={(e) => setCreator(e.target.value)}
                />
                <label htmlFor="title-field">title:</label>
                <input
                    type="text"
                    id="title-field"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="message-field">message:</label>
                <input
                    id="message-field"
                    type="text"
                    value={message}
                    className="form-control"
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <div className="row mt-3">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={addPostButtonPressed}
                >
                    Add
                </button>
            </div>
            <div className="row mt-3"></div>
        </div>
    )
}

export default AddPost;
