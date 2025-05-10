# Homework: Building a rest-api with sequelize-orm and express.js

## Task overview

You will be manage two entities: **User** and **Post**.

## Step 1: Setup the project

1. Initialize a new express project and install necessary dependencies such as (sequelize, mysql-2, env, ...).
2. Setup **sequelize** in your project and configure it to use **my-sql** database.
3. Setup **express** to handle incoming requests and sync the database.

## Step 2: Creating models and associations

1. Define the User model with `name` and `email` fields.
2. Define the Post model with `title` and `content` fields.
3. Create the **association** between `User` and `Post`:
   - A **User** has many **Posts**.
   - A **Post** belongs to a **User**.

## Step 3: Implement crud operations

**User crud operations**

1. Create a User: Implement a `POST /users` endpoint to create a new user.
2. Get all Users: Implement a `GET /users` endpoint to fetch all users.
3. Update a User: Implement a `PUT /users/:id` endpoint to update user details.
4. Delete a User: Implement a `DELETE /users/:id` endpoint to delete a user.

**Post crud operations**

1. Create a Post for a User: Implement a `POST /users/:userId/posts` endpoint to create a post for a specific user.
2. Get all Posts for a User: Implement a `GET /users/:userId/posts` endpoint to fetch all posts for a specific user.
3. Update a Post: Implement a `PUT /posts/:id` endpoint to update post details.
4. Delete a Post: Implement a `DELETE /posts/:id` endpoint to delete a specific post.

## Final step: Testing the API :D

Test the API using **Postman** to ensure all CRUD operations and associations work as expected.
