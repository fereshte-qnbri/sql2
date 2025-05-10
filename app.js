const express = require('express');
const sequelize = require('./database'); 

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req, res) => {
  res.send('REST API with Sequelize and Express!');
});


sequelize.sync()
  .then(() => {
    console.log('Database synced successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error syncing the database:', err);
  });
  

app.post('/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});


app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});


app.put('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    const [updatedRows] = await User.update(req.body, {
      where: { id: userId },
    });
    if (updatedRows > 0) {
      const updatedUser = await User.findByPk(userId);
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
});


app.delete('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    const deletedRows = await User.destroy({
      where: { id: userId },
    });
    if (deletedRows > 0) {
      res.status(204).send(); 
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
});