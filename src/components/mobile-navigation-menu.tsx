import Link from "next/link";

interface MenuButtonProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function MobileNavigationMenu({ isOpen, setIsOpen }: MenuButtonProps) {
    return (
        <>
            {isOpen && (
                <div className="md:hidden py-4 px-6 border-t border-border rounded-b-3xl">
                    <div className="flex flex-col gap-4 items-center">
                        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/diensten" onClick={() => setIsOpen(false)}>Diensten</Link>
                        <Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
                        <Link href="/over" onClick={() => setIsOpen(false)}>Over Mij</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    </div>
                </div>
            )}
        </>
    );
}