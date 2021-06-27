const postService = require('./postService')

module.exports = {
    // all post list
    getPosts: async (req, res, next) => {
        try {
            const [cnt] = await postService.getTotalCount();
            const posts = await postService.getPosts();
            
            return res.json({
                success: 1,
                data: posts,
                totalCount: cnt.cnt
            });
        } catch (err) {
            next(err)
        }
        
    },
    // one post info
    getPost: async (req, res, next) => {
        try {
            const id = req.params.id;
            const result = await postService.getPost(id);
            
            if (!result.length) {
                throw new AppError('Record not found.', 404)
            }

            return res.json({
                success: 1,
                data: result,
            });
        } catch (err) {
            next(err)
        }        
    },
    // create post
    createPost: async (req, res, next) => {
        try {
            const result = await postService.createPost(req.body);
            
            const result2  = await postService.getPost(result.insertId);
            
            if (!result2.length) {
                throw new Error('Record not found.', 404)
            }
            
            return res.json({
                success: 1,
                data: result2,
            });
        } catch (err) {
            next(err)
        }
        
    },
    // update post info
    updatePost: async (req, res, next) => {
        try {
            const { id } = req.params;
            
            const { creator, title, message, tags, selectedFile } = req.body;
            let post = {
                creator: creator, title: title, message: message, tags: tags, selectedFile: selectedFile, 
            }

            const result = await postService.updatePost(id, post);

            return res.json({
                success: 1,
                data: result,
            });
        } catch (err) {
            next(err)
        }
        
    },
    // delete post
    deletePost: async (req, res, next) => {
        try {
            const { id } = req.params;

            const result = await postService.deletePost(id);
            
            return res.json({
                success: 1,
                data: result,
            });
        } catch (err) {
            next(err)
        }        
    },
    // like post info
    likePost: async (req, res, next) => {
        try {
            const { id } = req.params;

            const post = await postService.getPost(id);
            
            if (!post.length) {
                throw new AppError('Record not found.', 404)
            }

            let likeCount = post[0].likeCount === null ? 0 : post[0].likeCount + 1;
            
            const result = await postService.likePost(id, likeCount);

            return res.json({
                success: 1,
                data: result,
            });
        } catch (err) {
            next(err)
        }
        
    },
}