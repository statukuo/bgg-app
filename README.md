# bgg-app

This is an intent to make a booking app for a social club. The implementation will be pretty tied to the actual solution that we are aiming for, so don't expect a template from this code.

## First steps

We have 2 separate projects inside this repo, frontend (react-redux) and backend (express passport mongoose). First of all go to each folder and install all the dependencies:

### Server

1. `cd server`
2. `npm install`

### Client

1. `cd client`
2. `npm install`

I recomend using 2 terminals, one for each project since we will have to launch them at the same time

## Developing the project

Open 2 terminals and do this

### Terminal 1 (server)

1. `cd server`
2. `node server.mjs` (this needs to be manually closed and relaunched on every change, didn't want to over engineer the backend)

### Terminal 2 (client)

1. `cd client`
2. `npm start` (this will automatically open a browser and will update on every change, is easier this way)

