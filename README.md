

<h1 align="center">
     :heavy_check_mark: To-dos App
</h1>

<h3 align="center">
    :page_with_curl: An API to register users and to-do tasks.
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/henbalmant/to-dos-app-node-js?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/henbalmant/to-dos-app-node-js">
  
  <a href="https://github.com/henbalmant/delivery-app-node-js/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/henbalmant/to-dos-app-node-js">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/henbalmant/delivery-app-node-js/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/henbalmant/to-dos-app-node-js?style=social">
  </a>

  <a href="https://batcave.dev.br">
    <img alt="Made by henbalmant" src="https://img.shields.io/badge/made%20by-henbalmant-%237519C1">
  </a>
  
  <a href="https://batcave.dev.br/">
    <img alt="Stargazers" src="https://img.shields.io/badge/Batcave-Community-%237159c1?style=flat&logo=ghost">
    </a>
  
 
</p>

<h4 align="center">
	Status: Done 🚀
</h4>



Summary
=================
<!--ts-->
   * [About](#-about)
   * [Features](#%EF%B8%8F-features)
   * [How to execute](#-how-to-run-this-project)
     * [Requirements](#requirements)
     * [Running the backend server](#-running-the-backend-server)
   * [Tech Stack](#-tech-stack)
   * [How to contribute](#-how-to-contribute)
   * [Author](#-author)
   * [License](#-license)
<!--te-->


## 💻 About

:heavy_check_mark: To-dos App - is a backend application that serves an API to register users and manage to-do tasks.

---

## ⚙️ Features

- [x] Users can register themselves providing:
  - [x] name
  - [x] username
  - [x] password
  
- [x] Users can:
  - [x] create user usecase and controller
  - [x] create to-do use case and controller
  - [x] find all to-dos by user id
  - [x] update to-do by id
  - [x] mark to-do as done
  - [x] delete to-do by id

---

## 🚀 How to run this project

This project has only a backend application.

💡 All requests needs the backend server up to work.

### Requirements

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/getting-started/install) & [docker-compose](https://docs.docker.com/compose/install/)
Besides that, is good to have an editor to visualize and navigate trough the code like [VSCode](https://code.visualstudio.com/)

#### 🎲 Running the backend server

```bash

# Clone this repository
$ git clone git@github.com:henbalmant/to-dos-app-node-js.git

# Access the project folder with your terminal/cmd
$ cd to-dos-app-node-js

# Install all dependencies
$ yarn install

# Run docker-compose (sometimes you will need run with sudo)
$ docker-compose up -d

# Starts the development application
$ yarn dev

# The server will start on port:3000 - access http://localhost:3000 

```
<p align="center">
  <a href="https://github.com/henbalmant/to-dos-app-node-js/blob/master/Insomnia_API_Todos_App.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>


---

## 🛠 Tech Stack

The following tools were used in the construction of the project:

#### [](https://github.com/tgmarinho/Ecoleta#server-nodejs--typescript)**Backend**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Prisma.io](https://www.prisma.io/)**
-   **[Express](https://expressjs.com/)**
-   **[express-async-errors](https://www.npmjs.com/package/express-async-errors)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**

> See  [package.json](https://github.com/henbalmant/delivery-app-node-js/blob/master/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilities**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Markdown:  **[StackEdit](https://stackedit.io/)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   Commit Conventional:  **[Commitlint](https://github.com/conventional-changelog/commitlint)**
-   API Testing:  **[Insomnia](https://insomnia.rest/)**

---

## 💪 How to contribute

1. **Fork** the project.
2. Create a new branch with your changes: `git checkout -b my-feature`
3. Save your changes and create a commit message telling you what you did: `git commit -m "feature: My new feature"`
4. Submit your changes: `git push origin my-feature`
> If you have any questions check this guide on [how to contribute](./CONTRIBUTING.md)

---

## 🦸 Author

<a href="https://batcave.dev.br/author/henbalmant/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/20211646?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Henrique Balmant</b></sub></a> <a href="https://batcave.dev.br/author/henbalmant/" title="Batcave">🚀</a>
 <br />

[![Gmail Badge](https://img.shields.io/badge/-henrique.balmant@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:henrique.balmant@gmail.com)](mailto:henrique.balmant@gmail.com)
[![Linkedin Badge](https://img.shields.io/badge/-Henrique%20Balmant-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/henrique-balmant/)](https://www.linkedin.com/in/henrique-balmant/)

---

## 📝 License

This project is under the license [MIT](./LICENSE).

Made with ❤️ by Henrique Balmant 👋🏽 [Get in touch!](https://www.linkedin.com/in/henrique-balmant/)
