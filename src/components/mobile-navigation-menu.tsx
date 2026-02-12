import NavigationLinks from "./navigation-links";

interface MenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function MobileNavigationMenu({ isOpen, setIsOpen }: MenuProps) {
    return (
        <>
            {isOpen && (
                <div className="md:hidden py-4 px-6 border-t border-border rounded-b-3xl">
                    <div className="flex flex-col gap-4 items-center">
                        <NavigationLinks isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                </div>
            )}
        </>
    );
}