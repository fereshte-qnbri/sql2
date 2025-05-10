
app.post('/users/:userId/posts', async (req, res) => {
  const userId = parseInt(req.params.userId);
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const newPost = await Post.create({ ...req.body, userId });
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});


app.get('/users/:userId/posts', async (req, res) => {
  const userId = parseInt(req.params.userId);
  try {
    const user = await User.findByPk(userId, {
      include: [{ model: Post, as: 'posts' }],
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user.posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});


app.put('/posts/:id', async (req, res) => {
  const postId = parseInt(req.params.id);
  try {
    const [updatedRows] = await Post.update(req.body, {
      where: { id: postId },
    });
    if (updatedRows > 0) {
      const updatedPost = await Post.findByPk(postId);
      res.json(updatedPost);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Failed to update post' });
  }
});


app.delete('/posts/:id', async (req, res) => {
  const postId = parseInt(req.params.id);
  try {
    const deletedRows = await Post.destroy({
      where: { id: postId },
    });
    if (deletedRows > 0) {
      res.status(204).send(); 
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Failed to delete post' });
  }
});