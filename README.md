# GitHub Repository Explorer

A simple React application to explore GitHub repositories and display relevant information.

## Features

- List repositories with name, description, and language.
- Filter repositories by programming language.
- View repository details with a direct link to GitHub.

## Screenshots

![Home Page](https://github.com/Sussego/Github-API/blob/main/src/assets/images/Home.png)
![Repositories Page](https://github.com/Sussego/Github-API/blob/main/src/assets/images/Repos.png)

## Installation and Setup

To run this project locally, follow these steps:

### 1. Clone the repository

```git
git clone https://github.com/Sussego/Github-API.git
cd Github-API
```
### 2. Install Depenpencies
```terminal
npm install
```

### 3. Configure the API Source
This project can fetch repositories from two different sources:
- Using JSON Server (Local Database)
- Using GitHub API (Live Data)

## Running the application
For local database, start the JSON Server and Node js application:
```terminal
npm run json-server
npm start
```
Make sure the `.env` file is set this way:
```.env
# REACT_APP_API_BASE_URL=http://api.github.com/
REACT_APP_API_BASE_URL=http://localhost:5000/
```
For direct conection with GitHub API just switch the options in the `.env` file:
```.env
REACT_APP_API_BASE_URL=http://api.github.com/
# REACT_APP_API_BASE_URL=http://localhost:5000/
```
The aplication will be available at `http://localhost:3000/`

## Usage

1. Open `http://localhost:3000/` in your browser.
2. Search a user nickname. (Using local database the only user you can search is "Sussego")
3. Browse and filter repositories by language.
4. Click "VER" to open a repository on GitHub.

Have Fun
