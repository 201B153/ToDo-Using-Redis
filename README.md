# ToDo-App Using Redis-Om

Simple ToDo-App which shows how redis-om  works as db.

![screenshots](todo-frontend/public/images/Screenshot%202022-08-28%20154844.jpg)

## How it works

* The app uses Expres as Backend which provides database access and supports api's.
* And react framework for frontend; the frontend calls api's and displays the data. 
### How the data is stored:

* The data is stored in the redis-cloud database.
* The data is stored in the JSON format of redis-json module.

### How the data is accessed:

* The data can be accessed using RedisInsight or redis-cli.
* The app access the data using api's and callbacks.

## How to run it locally?


### Prerequisites


- Node - v12.19.0
- NPM - v6.14.8
- RedisInsight - v1.11

### Local installation


Go to `/todo-backend` folder (`cd ./todo-backend`) and then:

```
# copy file and set proper data inside
cp .env.example .env
# install dependencies
npm install
# Run dev server
npm start
```

Go to `/todo-frontend` folder (`cd ./todo-frontend`) and then:

```
# install dependencies
npm install
# run development mode
npm start
```


## Deployment

To make deploys work, you need to create free account on [Redis Cloud](https://redis.info/try-free-dev-to)

### Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://todo-redis.herokuapp.com/)

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://to-do-using-redis-67quhj4m9-201b153.vercel.app/)
## More Information about Redis Stack

Here some resources to help you quickly get started using Redis Stack. 
### Getting Started

1. Sign up for a [free Redis Cloud account using this link](https://redis.info/try-free-dev-to) and use the [Redis Stack database in the cloud](https://developer.redis.com/create/rediscloud).
1. Based on the language/framework you want to use, you will find the following client libraries:
   
    - [Redis OM Node (JS)](https://github.com/redis/redis-om-node)
        - Watch this [getting started video](https://www.youtube.com/watch?v=KUfufrwpBkM)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-node/)

