const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//mongodb+srv://EdenKhaos:work123@google-books.ithdc.mongodb.net/google-books?retryWrites=true&w=majority

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/google-books", { useNewUrlParser: true }); 
  // useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// });
// mongoose.connection.on("connected", () => {
//     console.log("Mongoose is connected!!!!");
// });
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT: http://localhost:3000 ${PORT}!`);
});
