import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuLinkProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function NavigationLinks({ isOpen, setIsOpen }: MenuLinkProps) {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/")
            return pathname === "/"
        return pathname.startsWith(path)
    }

    type LinkItem = {
        name: string;
        path: string;
    }

    const links: LinkItem[] = [
        { name: "Home", path: "/" },
        { name: "Diensten", path: "/diensten" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Over Mij", path: "/over" },
        { name: "Contact", path: "/contact" }
    ];


    return (
        <>
            {links.map(link => (
                <Link
                    key={link.path}
                    href={link.path}
                    className={`text-sm px-3 py-1.5 rounded-full transition-colors ${isActive(link.path) ? "bg-amber-500 text-background" : "hover:bg-amber-700 hover:text-background"
                        }`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-current={isActive(link.path) ? "page" : undefined}
                >
                    {link.name}
                </Link>
            ))}
        </>
    )
}