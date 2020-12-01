# microservices

Answers to Part 2 are in the Answers File

**Other relevant files.**

- ecs.tf
- sysdiagram.png
- buildspec.yml
- docker-compose.yml


## Running the project
- Clone git repo
- To initialise and install Project Dependencies, Run:
```sh
  $ npm install
```
- To build docker files images.
```sh
  $ docker-compose build
```
- To start containers: 
Run:
```sh
  $ docker-compose up
```
This Should start the services on port 3000 and log the message 'Server running on port: 3000' for both services
 
Service's 1 and 2 should be mapped to local port 3001 and 3002 respectively

-Olatara Bisi-Afolabi