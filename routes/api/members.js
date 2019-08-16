const express = require("express");
const router = express.Router();
const members = require('./Members');

// ALL MEMBERS
router.get("/api/members", (req, res) => {
    res.json(members);
  });
  
// SINGLE MEMBER
router.get("/api/members/:id", (req, res) => {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  });