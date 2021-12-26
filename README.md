# TravelApp
A front end app for users to solve common word games.

## Technologies
- Webpack
- Babel
- Docker
- React v17
- Sass
- ESLint
- Jest
- Enzyme
- Material UI

## Commands
- `yarn install` installs all dependencies
- `yarn start` uses webpack to serve content at `http://localhost:8080/`
- `yarn build` uses webpack to build content distributables`
- `yarn deploy` builds and copies distrubtable to correct location for updating prod
- `bundle-report` learn more info about the distributable file contents
- `yarn test` runs our testing suite using Jest and Enzyme
- `yarn lint-fix` runs ESLint against all js and jsx files

## Building and running the docker image
Built using Docker v20.10.2

####  1. build the image
`docker build -t web-games:dev .`
####  2. verify image creation
`docker image ls`
####  3. run the image in a container
```
docker run -it --rm \
  -v ${PWD}:/app \
  -v /app/node_modules \
  -p 8080:8080 \
  -e CHOKIDAR_USEPOLLING=true \
  travel-app:dev
```
####  4. Visit the url in a browser
- http://0.0.0.0:8080/
- http://localhost:8080/
