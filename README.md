# adanny *.net*

[![CircleCI](https://circleci.com/gh/daystram/adanny/tree/master.svg?style=svg)](https://circleci.com/gh/danny7899/adanny/tree/master)

[*adanny*](https://adanny.net) is my personal profile page. ReactJS is used for the front-end and Go for the back-end. This is hosted on a Kubernetes platform, using microservices and monorepo pattern. Builds, tests, and deployment are handled using Bazel and CircleCI.

The project uses these technologies:
- [ReactJS](https://reactjs.org)
- [Redux](https://redux.js.org)
- [Go](https://golang.org)
- [MySQL](https://www.mysql.com/) *(soon)*
- [Vagrant](https://www.vagrantup.com)
- [Bazel](https://bazel.build)
- [Yarn](https://yarnpkg.com)
- [Webpack](https://webpack.js.org/)
- [Docker](https://www.docker.com/)
- [Kubernetes](https://kubernetes.io/) *(soon)*
- [Protocol Buffers](https://developers.google.com/protocol-buffers/) *(soon)*
- [gRPC](https://grpc.io/) *(soon)*

I am still learning to use these tools, and this is an attempt to integrate such technologies and features. Keep in mind that it is on an experimental stage.

## Development

### Getting Started

The *monorepo* pattern allows all code for every services to be kept in one repository, seperated by their working directories.

Vagrant is used to setup a guest development environment in your machine, so all of the tools will be contained in the guest and you still can develop in an editor or IDE of choice in your host machine.

### Required Tools
These are one-time dependencies that is needed on your host machine to start developing.
- [VirtualBox](https://www.virtualbox.org)
- [Vagrant](https://www.vagrantup.com)

Use `vagrant up` on the project's root dir to boot the dev environment. It may take some time on the first launch.

Once it has done booting up, use `vagrant ssh` to ssh into the guest machine, all the project files will be placed at `~/go/src/adanny/`. It is all synced to those in your host machine.

### Setting up `GOPATH` (optional)
You may want to place the project on the desired project location for Go projects in the host's `GOPATH` directory. Make sure you have properly [setup the `GOPATH`](https://github.com/golang/go/wiki/SettingGOPATH) beforehand. 
```bash
mkdir -p $GOPATH/src/
git clone git@github.com:danny7899/adanny.git $GOPATH/src/adanny.net/
```

<!-- ### MORE TO COMEEEE! -->

## More?

More documentation on each of the services can be accessed on each services' folders.
