const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Sample user data array
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
];

// Endpoint to get all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Endpoint to add a new user
app.post('/api/user', (req, res) => {
    const userData = req.body;

    if (!userData || !userData.name || !userData.email) {
        return res.status(400).json({ error: 'Invalid user data' });
    }

    // Add the new user to the array
    const newUser = {
        id: users.length + 1,
        name: userData.name,
        email: userData.email,
    };

    users.push(newUser);

    // Sending a response with the newly added user
    res.json(newUser);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
