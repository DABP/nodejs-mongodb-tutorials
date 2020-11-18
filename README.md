# nodejs-mongodb-tutorials

Docker - mongo:4.4.1-bionic 이미지 사용, Compass 사용 시 27017 포트 개방 필요
<br><br>


## Quick Start
```
$ docker-compose up -d
```
<br><br>
## Docker Scripts

### Dockerfile

```
# ./Dockerfile

FROM ubuntu:18.04

RUN apt update
RUN apt install wget -y
RUN apt install curl -y
RUN cd ~
RUN curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt install nodejs -y
RUN apt-get install build-essential -y
RUN npm install express -g
RUN npm install express-generator -g
RUN npm install pm2 -g
RUN express /root/expressapp
WORKDIR /root/expressapp/

# npm i는 npm install과 같음
RUN npm i
RUN npm i mongoose
RUN npm i swagger-ui-express swagger-jsdoc
RUN npm audit fix
```

### docker-compose.yml

```
# ./docker-compose.yml

version: "3.8"

services:
    node:
        build:
            context: .
            dockerfile: ./Dockerfile
        ports:
            - "8000:3000"
        container_name: node
        command: 
            pm2-runtime start bin/www --watch --name main
    mongo:
        image: mongo:4.4.1-bionic
        container_name: mongo
        ports:
            - "27017:27017"

```
