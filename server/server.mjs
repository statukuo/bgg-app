import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "./db/conn.mjs";
import passport from "passport";
import "./config/passport.mjs";
import session from "express-session";

import records from "./routes/record.mjs";
import auth from "./routes/auth.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(passport.initialize());
app.use(cors());
app.use(express.json());

app.use(session({
    secret: "18XX games are long AF",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}));

app.use("/record", passport.authenticate("jwt"),  records);
app.use("/auth", auth);

// start the Express server
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port: ${PORT}`);
});
