import passport from "passport";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";
import User from "../models/users.mjs";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";

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
                done(err, result);
            });
        }
    )
);

passport.use(new JWTStrategy({
    secretOrKey: "top_secret",
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, (token, done) => {
    try {
        return done(null, token);
    } catch (error) {
        done(error);
    }
}));
