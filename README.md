# ui
[![Build Status](https://travis-ci.org/core-fantasy/ui.svg?branch=master)](https://travis-ci.org/core-fantasy/ui)  

User Interface Code

## Build
To build the code: `yarn build`.

To build the Docker image: `docker build . -t ui`

## Running
To run the Docker image: `docker run -it -p 8080:80 --name test-ui ui`

## Travis builds
This repo supports builds by [Travis CI][2]. The normal setup steps are required for this
to work (i.e., linking GitHub account, etc.). Additionally, two environment variables
are required in order to push the Docker image to Docker Hub.

The `DOCKER_USERNAME` and `DOCKER_PASSWORD` environment variables are required. These
are the username and password for the Docker Hub account. These can be set on the Travis
website, or via the `travis` CLI tool.

## Reference
* https://docs.travis-ci.com/user/docker/

### Google Sign In
* [Web Sign In Help](https://developers.google.com/identity/sign-in/web/)
* [Credentials Manager](https://console.developers.google.com/apis/credentials)

## Dependencies
* [yarn](https://yarnpkg.com)
* [Node.js](https://nodejs.org/) (using 8.12.0)
* [ReactJs](https://reactjs.org)
  * yarn create react-app

[2]:https://travis-ci.org
