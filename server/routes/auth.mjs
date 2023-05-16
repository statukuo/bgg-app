import { Router as expressRouter } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = expressRouter();

router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "http://localhost:3000/login", session: false }),
    function (req, res) {
        if (req.user) {
            const token = jwt.sign({ id: req.user._id }, "top_secret", {
                expiresIn: 60 * 60 * 24 // equivalente a 24 horas
            });
            res.cookie("token", token);
            res.redirect("http://localhost:3000/list?token=" + token);
        } else {
            res.redirect("http://localhost:3000/");
        }
    }
);

export default router;
