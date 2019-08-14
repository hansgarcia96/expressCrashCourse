const express = require("express");
const app = express();
const path = require("path");

const members = [
  {
    id: 1,
    name: "Randy",
    email: "randy@ironhack.com",
    status: "active"
  },
  {
    id: 2,
    name: "Sebastian",
    email: "sebastian@gmail.com",
    status: "inactive"
  }
];

// ROUTES

// ALL MEMBERS
app.get("/api/members", (req, res) => {
  res.json(members);
});

// SINGLE MEMBER
app.get("/api/members/:id", (req, res) => {
  res.json(members.filter(member => member.id === parseInt(req.params.id)));
});

// STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.port || 5000;
// server looks for the port # in the .env file

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
