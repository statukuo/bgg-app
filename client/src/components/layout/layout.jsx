import React from "react";
import Header from "./header";
import BottomNav from "./bottomNav";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="bg-zinc-700">
                <div className="grid h-full max-w-lg grid-cols-1 mx-auto gap-3 p-3 ">
                    {children}
                </div>
            </main>
            <BottomNav />
        </>
    );
};

export default Layout;
