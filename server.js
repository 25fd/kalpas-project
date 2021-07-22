
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");


dotenv.config({ path: "./config.env" });

console.log(process.env.NODE_ENV)

process.on("uncaughtException", err => {
  console.log(err.name, err.message);
  process.exit(1);
});

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(con => {
    //console.log(con.connections);
    console.log("db connected successfully");
  })
  .catch(err => {
    console.log("Error connecting to DB" + err);
  });

mongoose.set("debug", true);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("Server Running on port " + port);
});

process.on('exit', () => {
  console.log("Exiting Server");
  process.exit(1);
})

process.on("unhandledRejection", err => {
  console.log(err, err.name, err.message);
  app.close(() => {
    process.exit(1);
  });
});
