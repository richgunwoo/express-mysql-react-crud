const pool = require("./db");

module.exports = {
    getTotalCount:() => {
        return new Promise((resolve, reject) => {
            pool.query("select count(*) as cnt from 1_posts", (error, results) => {
                if(error) return reject(error);;
                resolve(results);
            })
        })
    },
    getPosts:() => {
        return new Promise((resolve, reject) => {
            pool.query("select * from 1_posts", (error, results) => {
                if(error) return reject(error);;
                resolve(results);
            })
        })
    },
    getPost: (id) => {
        return new Promise((resolve, reject) => {
            pool.query("select * from 1_posts where id = ?",[id], (error, results) => {
                if(error) return reject(error);;
                resolve(results);
            })
        });
    },
    getPostByEmail: (email) => {
        return new Promise((resolve, reject) => {
            pool.query("select * from 1_posts where email = ?",[email], (error, results) => {
                if(error) return reject(error);;
                resolve(results);
            })
        });
    },
    createPost: (post) => {
        return new Promise((resolve, reject) => {
            pool.query("insert into 1_posts SET ?",[post], (error, results) => {
                if(error) return reject(error);;
                resolve(results);
            })
        });
    },
    updatePost: (id, post) => {
        return new Promise((resolve, reject) => {
            pool.query("update 1_posts SET ? where id = ?",[post, id], (error, results) => {
                if(error) return reject(error);;
                resolve(results);
            })
        });
    },
    deletePost: (id) => {
        return new Promise((resolve, reject) => {
            pool.query("delete from 1_posts where id = ?",[id], (error, results) => {
                if(error) return reject(error);;
                resolve(results);
            })
        });
    },
    likePost: (id, likeCount) => {
        return new Promise((resolve, reject) => {
            pool.query("update 1_posts SET likeCount = ? where id = ?",[likeCount, id], (error, results) => {
                if(error) return reject(error);;
                resolve(results);
            })
        });
    },
}