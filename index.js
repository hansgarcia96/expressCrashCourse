const express = require("express");
const app = express();
const path = require("path");
const logger = require("./middleware/logger")

// INIT MIDDLEWARE
// app.use(logger);

// ROUTES

// STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"))

const PORT = process.env.port || 5000;
// server looks for the port # in the .env file

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// EXPORTED MEMBERS.JS 
