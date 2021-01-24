const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp()
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
var express = require('express');
var app = express();
const cors = require('cors');
const routerUser = require('./routes/user');
const routerCosts = require('./routes/costs');
const bodyParser = require("body-parser");
const errorLogger = require('./utilities/errorLogger')

app.use(cors());
app.use(bodyParser.json());
app.use('/user', routerUser);
app.use('/costs', routerCosts);
app.use(errorLogger);

exports.api = functions.https.onRequest(app)

