# Note-Writer

This project is a web application that has 3 pages which are login,register and note.


If a user has registered he/she can login into the page and add a notes. 

### ER-DIAGRAM

![ER diagram!](/public/images/ER_diagram.png "ER DIAGRAM")


# Note-Writer

**Note-Writer** is a full-stack web application for creating, editing, and managing notes with user authentication. This project uses a MySQL database to store user and note information securely. The server-side functionality is built with Node.js and Express, while the client-side features are implemented with HTML, CSS, and JavaScript.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)


## Features
- **User Registration and Authentication**: Allows users to securely register, log in, and log out.
- **Note Management**: Create, edit, delete, and retrieve notes associated with individual users.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **MySQL Integration**: Uses MySQL for reliable data storage.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript (with modular scripts for data fetching and DOM manipulation)
- **Backend**: Node.js, Express - for handling HTTP requests and server-side logic
- **Database**: MySQL - stores user and note information
- **Environment Configuration**: dotenv - for managing environment variables

## Installation
1. Clone the Repository: `git clone https://github.com/vamsi4476/Note-Writer.git && cd Note-Writer`

2. Install Dependencies: `npm install`

4. Set Up MySQL Database: The `db_connect.js` file will automatically create a database named `my_db` and initialize the necessary tables (`users` and `notes`) if they do not exist.

5. Run the Application: `npm start`

6. Access the Application: Open your browser and navigate to `http://localhost:3000`.

## Usage
1. Register a new user account on `register.html`.
2. Log In using the `login.html` page.
3. Create, View, and Manage Notes on `note.html` once logged in.
4. Log Out to end your session.

## API Endpoints
### User Routes (`/users`)
- **GET `/`**: Retrieve all users (for debugging)
- **POST `/register`**: Register a new user
- **POST `/login`**: Log in a user
- **PUT `/edit`**: Edit user information
- **DELETE `/delete`**: Delete a user account

### Note Routes (`/notes`)
- **POST `/`**: Retrieve all notes for a user
- **POST `/create`**: Create a new note
- **PUT `/edit`**: Edit an existing note
- **DELETE `/delete`**: Delete a note

## Contributing
Contributions are welcome! Please fork this repository, create a new branch, and submit a pull request.
