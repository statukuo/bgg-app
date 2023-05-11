import { Router as expressRouter } from "express";
import passport from "passport";

const router = expressRouter();

router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/login", session: false }),
    function (req, res) {
        const token = req.user.token;
        res.redirect("http://localhost:3000/list?token=" + token);
    }
);

export default router;
