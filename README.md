# Social-Network-API

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
The application is an API for a social media startup's back end that uses a NoSQL database so that their website can handle large amounts of unstructured data. The requirements were as follows:

* When the user enters the command to invoke the application, the server is started and the Mongoose models are synced to the MongoDB database.
* When the user opens the API GET routes in Insomnia for users and thoughts, the data for each of these routes is displayed in a formatted JSON.
* When the user tests the API POST, PUT, and DELETE routes in Insomnia, they are able to successfully create, update, and delete users and thoughts in their database.
* When the user tests the API POST and DELETE routes in Insomnia, they are able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## Table of Contents
- [Installation](#installation)
- [Links](#links)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)

## Installation
Visit the GitHub repository, Social-Network-API (see the link below), to fork and clone the repository. The JSON file will have the necessary dependencies. Use
````````````
npm install
````````````
to install the dependencies locally.

## Links
- [GitHub Repo](https://github.com/amklenk/Social-Network-API)
- [Walkthrough Video 1: Get All and Get By Id](https://drive.google.com/file/d/1yQQSKl4djfdN_itKD0WFHfzhKEBC78YK/view?usp=sharing)
- [Walkthrough Video 2: Post](https://drive.google.com/file/d/116Hmq6ndsk8k43K8Sb-Yz_3E7lJ86Qp5/view?usp=sharing)
- [Walkthrough Video 3: Put](https://drive.google.com/file/d/1ITSlfmE48tZ_NPVwW7FXnJPPM2L_Iqgh/view?usp=sharing)
- [Walkthrough Video 4: Delete (and Thought on Cascade)](https://drive.google.com/file/d/1z5ATCOivk9TcVbJw2Oqb68ouv1DT1FY-/view?usp=sharing)

## Usage
The following are screenshots of the API routes being tested in Insomnia

Get All Users:
![Get All Users](./assets/images/GetAll.png)

Get User By Id:
![Get User By Id](./assets/images/GetById.png)

Post a Thought:
![Post a Thought](./assets/images/PostThought.png)

Update Thought:
![Put Thought](./assets/images/PutThought.png)

Delete a Reaction:
![Delete Reaction](./assets/images/DeleteReaction.png)

The models directory contains the schema for User, Thought, and Reaction. The controllers directory contains the Mongoose methods for each schema, and the routes directory contains the API routes that access the Mongoose methods. The app is run through opening server.js in an integrated terminal and by typing
`````````
npm start
`````````
into the command line. This will turn on the server at localhost:3001. The API routes can then be tested in Insomnia.

## License
The badge at the top of the page shows that this project is licensed under MIT. The link for that license is shown below.
- [License: MIT](https://opensource.org/licenses/MIT)

## How to Contribute
Please fork and clone the repository and use a pull request to add or make changes to the current repository.

## Questions
Please direct any questions to amandamklenk3@gmail.com. To see more projects, visit the link below for amklenk's respository:
- [Amanda Klenk's GitHub Repository](https://github.com/amklenk)









