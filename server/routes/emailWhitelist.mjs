import { Router as expressRouter } from "express";
import EmailWhitelist from "../models/emailWhitelist.mjs";

const router = expressRouter();

router.get("/", async (req, res) => {
    const results = await EmailWhitelist.find();
    res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
    const result = await EmailWhitelist.findById(req.params.id);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

router.post("/", async (req, res) => {
    const newEmail = new EmailWhitelist({
        email: req.body.email
    });
    const result = await newEmail.save();
    res.send(result).status(204);
});

router.patch("/:id", async (req, res) => {
    const emailToUpdate = await EmailWhitelist.findById(req.params.id);

    emailToUpdate.set({
        name: req.body.name,
        position: req.body.position,
        level: req.body.level
    });

    const result = await emailToUpdate.save();

    res.send(result).status(200);
});

router.delete("/:id", async (req, res) => {
    const result = await EmailWhitelist.findByIdAndDelete(req.params.id);

    res.send(result).status(200);
});

export default router;
