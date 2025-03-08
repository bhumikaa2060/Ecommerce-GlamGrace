

import { Link, useNavigate } from "react-router-dom";
import { HousePlug, Menu, ShoppingCart, UserRoundCog, LogOut } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback
} from "@/components/ui/avatar";
import UserCartWrapper from "./cart-wrapper";
import { useState } from "react";

function MenuItems() {
  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {shoppingViewHeaderMenuItems.map(menuItem => (
        <Link
          className="text-sm font-medium"
          key={menuItem.id}
          to={menuItem.path}
        >
          {menuItem.label}
        </Link>
      ))}
    </nav>
  );
}

function HeaderRightContent() {
  const [openCartSheet, setOpenCartSheet] = useState(false);
  const { user } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
    navigate('/login'); // Navigate to login page after logout
  }

  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4">
 
       {/* <Sheet open={openCartSheet} onOpenChange={setOpenCartSheet}>
        <SheetTrigger asChild>
          <Button onClick={() => setOpenCartSheet(true)} variant="outline" size="icon">
            <ShoppingCart className="w-6 h-6" />
            <span className="sr-only">User Cart</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <UserCartWrapper />
        </SheetContent>
      </Sheet>  */}







<Sheet open={openCartSheet} onOpenChange={setOpenCartSheet}>
  <SheetTrigger asChild>
    <Button variant="outline" size="icon">
      <ShoppingCart className="w-6 h-6" />
      <span className="sr-only">User Cart</span>
    </Button>
  </SheetTrigger>
  <SheetContent className="bg-gray-100 p-4 w-[400px] sm:w-[540px]">
    <div className="bg-white p-4 rounded-lg shadow-md">
      <UserCartWrapper />
    </div>
  </SheetContent>
</Sheet>  














      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="w-10 h-10 bg-black flex items-center justify-center rounded-full cursor-pointer">
            <AvatarFallback className="text-white font-extrabold">
              {user?.userName?.[0]?.toUpperCase() || ''}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

          <DropdownMenuContent side="right" className="w-56">
          <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate('/shop/account')}>
            <UserRoundCog className="mr-2 h-4 w-4" />
            Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> 
 



 
























    </div>
  );
}

function ShoppingHeader() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="relative flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/shop/home" className="flex items-center gap-2">
          <HousePlug className="h-6 w-6" />
          <span className="font-bold">GlamGrace</span>
        </Link>
        
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
          <MenuItems />
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs bg-white">
            <MenuItems />
            <HeaderRightContent />
          </SheetContent>
        </Sheet>

        <div className="hidden lg:block">
        </div>

        {/* {
          isAuthenticated ? <div></div> :null   // it will work if we remove it also
        } */}
          
        <div className="hidden lg:block">
          <HeaderRightContent />
        </div>
      </div>
    </header>
  );
}

export default ShoppingHeader;









