import React from "react";
import Header from "./header";
import BottomNav from "./bottomNav";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../slicers/authSlice";

const Layout = ({ children }) => {
    const loggedIn = useSelector(selectLoggedIn);
    return (
        <div>
            {loggedIn && <Header/>}
            <main className="bg-zinc-700 flex-grow min-h-screen">
                <div className="grid h-full max-w-lg grid-cols-1 mx-auto gap-3 p-3">
                    {children}
                </div>
            </main>
            {loggedIn && <BottomNav/>}
        </div>
    );
};

export default Layout;
