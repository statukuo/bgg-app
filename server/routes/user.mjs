import { Router as expressRouter } from "express";
import User from "../models/users.mjs";

const router = expressRouter();

router.get("/current", async (req, res) => {
    const results = await User.findById(req.user.id);
    res.send(results).status(200);
});

export default router;
