import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import AddPost from './components/AddPost';
import ViewItem from './components/ViewItem';

function App() {
  const [filters, setFilters] = useState({});
  const [posts, setPosts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    fetch('http://localhost:5000/api/v1/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
        setTotalCount(data.totalCount);
      })
  };

  const deletePost = (item) => {
    const requestOptions = {
      method: "DELETE",
    }
    fetch(`http://localhost:5000/api/v1/posts/${item.id}`, requestOptions)
      .then((res) => {
        if (res.ok) {
          getPosts();
        }
      })
  };

  const createPost = (item) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item),
    }
    fetch('/api/v1/posts', requestOptions)
      .then((res) => {
        if (res.ok) {
          getPosts();
        }
    })
  };

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const filterData = (data) => {
    const filteredData = [];
    
    if (!filters.creator && !filters.title && !filters.message && !filters.likeCount) {
      return data;
    }    

    for (const item of data) {
      if (!item.creator.includes(filters.creator)){
        continue;
      }

      if (!item.title.includes(filters.title)){
        continue;
      }

      if (!item.message.includes(filters.message)){
        continue;
      }

      if (filters.likeCount !== 0 && item.likeCount < filters.likeCount) {
        continue;
      }

      filteredData.push(item);
    }

    return filteredData;
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <ViewItem posts={filterData(posts)} totalCount={totalCount} deletePost={deletePost} />
      </div>
      <div className="row mt-3">
        <AddPost createPost={createPost} />
      </div>
    </div>
  );
}

export default App;
