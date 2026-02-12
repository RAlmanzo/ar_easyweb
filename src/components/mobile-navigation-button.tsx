import { Menu, X } from "lucide-react";

interface MenuButtonProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function MobileNavigationButton({ isOpen, setIsOpen }: MenuButtonProps) {
    return (
        <button className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    );
}