/* Mongo Databasebide
 * - this is where we set up our connection to the mongo database
 */
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
let MONGO_URL;
const MONGO_LOCAL_URL = "mongodb://localhost/GameTest";

if (process.env.DB_URI) {
  mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
  MONGO_URL = process.env.DB_URI;
} else {
  mongoose.connect(MONGO_LOCAL_URL, { useNewUrlParser: true }); // local mongo url
  MONGO_URL = MONGO_LOCAL_URL;
}

// should mongoose.connection be put in the call back of mongoose.connect???
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(`There was an error connecting to the database: ${err}`);
});

db.once("open", () => {
  console.log(
    `You have successfully connected to your mongo database: ${MONGO_URL}`
  );
});

module.exports = db;
