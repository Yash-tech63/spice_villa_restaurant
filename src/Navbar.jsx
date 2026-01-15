import React from "react";
import images from "./images/logo-spice.png";
import { FloatingNav } from "./components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Footer from "./components/home/Footer";


const Navbar = ({ children }) => {
    const navItems = [
        {
            name: "Product",
            link: "/login/home",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Report",
            link: "/login/report",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Dashboard",
            link: "/login/dashboard",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        }

    ];

    return (
        <div className="relative">
            {/* Logo */}
            <img src={images} alt="logo" className="h-30  p-2" />

            {/* Floating Navbar */}
            <FloatingNav navItems={navItems} />

            <hr />

            {/* Children rendered INSIDE navbar layout */}
            <div className="mt-4">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Navbar;
