# GET STARTED

Start here for the steps to get the project up & running.

## STEP-1: START THE FRONT-END

In the project root, run:

- npm install
- npm start

## STEP 2: CREATE THE T1D DATABASE IN SQL

Enter your MySql command line and create the database this way

```
mysql -u root -p
create database t1d;
```

## STEP 3: START THE BACK-END

- cd server
- npm install
- npm run migrate
- npm start

NOTE: You will only have to run install & migrate the first time. When working on it after that, just cd server and npm start to initialize the back-end

## NOTES

--When working, always be sure to npm start in the root and then cd server, npm start in order to start the back end.

--npm start in the root will generate a link to view the project in development mode, usually something like (localhost:19000). Follow through to the link and click on the "run in web browser" option in "Metro Bundler" menu on the left in order to see the project in your web browser

--In the metro bundler on the left, you'll also see a QR code. If you download the "Expo Go" app to your phone and are running the app and your phone on the same wifi, you can scan this code to see the app on your phone.
