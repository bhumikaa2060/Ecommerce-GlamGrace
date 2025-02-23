

import { Link } from "react-router-dom"; 
import { HousePlug, Menu } from "lucide-react"; // Make sure Menu is imported
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"; // Ensure both are imported correctly
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";

function MenuItems(){
    return (
        <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
            {shoppingViewHeaderMenuItems.map(menuItem => 
                <Link className="text-sm font-medium" key={menuItem.id} to={menuItem.path}>
                    {menuItem.label}
                </Link>
            )}
        </nav>
    );
}


function HeaderRightContent(){
    return <div>

    </div>
}

function ShoppingHeader() {
    const { isAuthenticated } = useSelector(state => state.auth);

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="relative flex h-16 items-center justify-between px-4 md:px-6">
                {/* Left-aligned GlamGrace */}
                <Link to="/shop/home" className="flex items-center gap-2">
                    <HousePlug className="h-6 w-6"/>
                    <span className="font-bold">GlamGrace</span>
                </Link>

                {/* Center-aligned MenuItems */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                    <MenuItems/>
                </div>

                {/* Mobile Menu Button */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                            <Menu className="h-6 w-6"/>
                            <span className="sr-only">Toggle header menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-full max-w-x-5xs">

                    <MenuItems/>
                    </SheetContent>


                </Sheet>
                <div className="hidden lg:block">

                </div>

                {/* Placeholder for authenticated state */}
                {isAuthenticated ? <div></div> : null}
            </div>
        </header>
    );
}

export default ShoppingHeader;

