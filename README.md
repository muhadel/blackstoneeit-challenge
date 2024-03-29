#### Table of contents

1. [Overview](#blackstoneeit-challenge)
   - [Features](#features)
   - [Dependencies](#dependencies)
2. [Repo structure](#backend-repo-structure)
   -  [Backend](#backend-repo-structure)
   -  [Frontend](#frontend-repo-structure)
3. [How to Install](#how-to-install)
4. [Running the app](#running-the-app)
5. [Running by docker-compose](#running-by-docker-compose)
6. [Swagger Documentation](#swagger-documentation)

## Blackstoneeit Challenge

This challenge imagines that we have a social media platform that is under attack from spam.
We have implemented a reporting system for users that lets them report spam to the platform, and our spam protection team.

## Features

- We need a way to block the content and resolve those reports
- The resolving should be defined as a ```PUT``` request to an endpoint with this structure ```/reports/:reportId```
- ```Block```: Means that the content should no longer be available to users
- ```Resolve```: Means that the report is considered "resolved", and it is no longer visible to the spam protection team

## Dependencies

| Dependencies |  Version   |
| :----------- | :--------: |
| Node.js      | >= 12.13.1 |
| Typescript   |  >= 4.3.5  |
| @nestjs/cli  |  >= 8.0.0  |

## Backend repo structure:

```
- src/
   - config/
   - shared/
   - types/
   - modules/
      - report/
```

## Frontend repo structure:

```
- src/
   - assets/
   - common/
   - components/
   - view/
   - redux/

```

## How to Install

```bash
$ npm i -g @nestjs/cli
$ npm install
$ mv .env.example .env
```

## Running the app

```bash
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running by docker compose

```bash
# Step 1: Edit your_dockerhost_ip located in frontend/.env.example
# Step 2: Edit your_dockerhost_ip located in nginx/default.conf
# Then run
docker-compose up --build

```


## Swagger Documentation

You can access Swagger documentation via acessing the backend on [http://localhost:5000/swagger/](http://localhost:5000/swagger/)
![image](https://user-images.githubusercontent.com/32979588/135359156-c8197bec-578d-4f63-b532-9dc02cf7f6a9.png)


