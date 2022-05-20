const express = require("express");
const router = require("express").Router();
const Bug = require("../models/bug.js");
const User = require("../models/User.js");

// Create bug route
router.post("/", async (req, res) => {
    try {
        const Bugs = await Bug.create(req.body);
        // res.redirect("/bugs");
        console.log(Bugs);
        res.send(Bugs);
    } catch (e) {
        console.log(e.message);
        res.send(e)
    }
});

router.put("/:id", async (req, res) => {
  try {
    const Bugs = await Bug.findByIdAndUpdate(req.params.id,req.body);
    // res.redirect("/bugs");
    console.log(Bugs);
    res.send(Bugs);
  } catch (e) {
    console.log(e.message);
    res.send(e);
  }
});

router.get("/", async (req, res) => {
  try {
    const Bugs = await Bug.find();
    console.log(Bugs);
    res.send(Bugs);
  } catch (e) {
    console.log(e.message);
    res.send(e);
  }
});

router.get("/:bugId", async (req, res) => {
  try {
    const foundBug = await Bug.findById(req.params.bugId);
    console.log(foundBug);
    res.send(foundBug);
  } catch (e) {
    console.log(e.message);
    res.send(e);
  }
});

router.delete("/delete/:bugId", async (req,res)=>{
    try {
        const foundBug  = await Bug.findByIdAndDelete(req.params.bugId);
        console.log(foundBug);  
    }catch (e){console.log(e.message); res.send(e);}
})


module.exports = router