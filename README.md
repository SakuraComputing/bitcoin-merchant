# Bitcoin Merchant

This is an example of a React application as a sample setup for an online Bitcoin Retailer. The user is able to browse cotent and sellers on the website but must create an account and login to begin trading.  

## Start up

You will need to create a mongo database either locally or in the cloud and then connect to it.

```
create a MongoDB called bitcoin-merchant
create a User within Mongo
Add your credentials to /config/keys.js
```

Clone the repository.
Run yarn or npm if you are using this to create the dependencies.
Then run the webpack dev server as well as nodemon for the API Layer concurrently. 

```
git clone 
yarn 
yarn run dev
```
This will run on port 8080 for your front end and port 5000 for the backend.  Create some sellers via the API Layer then you are up and running to start navigating around the application.

### Tecnologies Used

ReactJS (Front End), NodeJS (API Layer), Mongo DB, Webpack, SASS. Authentication is carried out using JSON Web Tokens.

### License 

MIT