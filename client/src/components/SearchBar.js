import React, { useState } from 'react'

const SearchBar = (props) => {
    const [creator, setCreator] = useState("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [likeCount, setLikeCount] = useState("");

    const searchButtonPressed = () => {
        props.updateSearchParams({
            creator: creator,
            title: title,
            message: message,
            likeCount: likeCount,
        });
    }
    
    return (
        <div className="container">
            <div className="row">
                <h2>Search Post</h2>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="creator-search-field">creator:</label>
                    <input
                        type="text"
                        id="creator-search-field"
                        className="form-control"
                        value={creator}
                        onChange={(e) => setCreator(e.target.value)}
                    />
                </div>
                <div className="col">
                    <label htmlFor="title-search-field">title:</label>
                    <input
                        type="text"
                        id="title-search-field"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="col">
                    <label htmlFor="message-search-field">message:</label>
                    <input
                        type="text"
                        id="message-search-field"
                        className="form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div className="col">
                    <label htmlFor="likeCount-search-field">likeCount:</label>
                    <input
                        type="text"
                        id="likeCount-search-field"
                        className="form-control"
                        value={likeCount}
                        onChange={(e) => setLikeCount(e.target.value)}
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-4"></div>
                <button type="button" className="col-4 btn btn-primary" onClick={searchButtonPressed}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchBar
