
**Programming assignment for the [Udacity React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019) program.**
# Readable
This is a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

This project is built with React, Redux, React Router, Reactstrap.


## Installation

Install all necessary modules to run the current project.

```bash
$ git clone https://github.com/ditran93/Readable.git
$ cd Readable-master/api-server/
$ npm install
$ cd Readable-master/frontend
$ npm install
```

## Run The App

```bash
$ cd Readable-master/api-server/
$ node server
$ cd Readable-master/frontend/
$ npm start
```

## Contributor

* Di Tran (https://github.com/ditran93)


## License

This project is licensed under the MIT License. Check the `LICENSE` file.

## Other Info
This project was bootstrapped with [Create React Native App]
(https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

Unable to start server
See https://git.io/v5vcn for more information, either install watchman or run the following snippet:
  sudo sysctl -w kern.maxfiles=5242880
  sudo sysctl -w kern.maxfilesperproc=524288