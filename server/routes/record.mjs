import express from "express";
import Record from "../models/records.mjs";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let results = await Record.find();
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let result = await Record.findById(req.params.id);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  let newRecord = new Record({
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  });
  let result = await newRecord.save();
  res.send(result).status(204);
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  let recordToUpdate = await Record.findById(req.params.id);

  recordToUpdate.set({
    name: req.body.name,
    position: req.body.position,
    level: req.body.level
  });

  let result = await recordToUpdate.save();

  res.send(result).status(200);
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  let result = await Record.findByIdAndDelete(req.params.id);

  res.send(result).status(200);
});

export default router;
