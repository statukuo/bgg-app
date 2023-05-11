import passport from "passport";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";
import User from "../models/users.mjs";

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:5050/auth/google/callback"
        },
        function (accessToken, refreshToken, profile, done) {
            User.findOrCreate({
                email: profile.emails[0].value,
                name: profile.displayName
            }, (err, result) => {
                const userData = {
                    email: result.email,
                    name: result.name,
                    token: accessToken
                };

                done(err, userData);
            });
        }
    )
);
