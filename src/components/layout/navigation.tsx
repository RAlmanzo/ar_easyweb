"use client"

import Link from "next/link";
import MobileNavigationButton from "./mobile-navigation-button";
import MobileNavigationMenu from "./mobile-navigation-menu";
import { useState } from "react";
import NavigationLinks from "./navigation-links";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 px-4">
            <div className="max-w-4xl mx-auto bg-[linear-gradient(45deg,#999_5%,#fff_18%,#ccc_30%,#ddd_50%,#ccc_70%,#fff_80%,#999_95%)] backdrop-blur-md border border-lime-700 rounded-full shadow-md">
                <div className="flex justify-between items-center h-14 px-6">
                    <Link href="/" className="text-xl font-bold text-foreground mx-auto md:mx-0">
                        AR EasyWeb
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        <NavigationLinks isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>

                    <MobileNavigationButton isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
                <MobileNavigationMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </nav>
    );
}