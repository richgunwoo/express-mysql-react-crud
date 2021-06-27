const ViewItem = ({ posts, totalCount, deletePost }) => {    
    return (
        <div className="container">
            <div className="row">
                <h2>Posts</h2>
            </div>
            <div className="row">
                <table className="table table-striped">
                    <caption>Total Posts({totalCount})</caption>
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">creator</th>
                            <th scope="col">title</th>
                            <th scope="col">message</th>
                            <th scope="col">likeCount</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.creator}</td>
                                    <td>{item.title}</td>
                                    <td>{item.message}</td>
                                    <td>{item.likeCount}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deletePost(item)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewItem;
