

// import { Link } from "react-router-dom"; 
// import { HousePlug, Menu, ShoppingCart, } from "lucide-react"; // Make sure Menu is imported
// import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"; // Ensure both are imported correctly
// import { Button } from "../ui/button";
// import { useSelector } from "react-redux";
// import { shoppingViewHeaderMenuItems } from "@/config";
// import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
// import { Avatar, AvatarFallback} from "@radix-ui/react-avatar";

// function MenuItems(){
//     return (
//         <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
//             {shoppingViewHeaderMenuItems.map(menuItem => 
//                 <Link className="text-sm font-medium" key={menuItem.id} to={menuItem.path}>
//                     {menuItem.label}
//                 </Link>
//             )}
//         </nav>
//     );
// }


// function HeaderRightContent(){
//     return <div className="flex lg:items-center lg:flex-row flex-col gap-4">
//         <Button  variant="outline"
//           size="icon">
//         <ShoppingCart className="w-6 h-6"  />
//         <span className="sr-only">User Cart</span>
//         </Button>
//         <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//                 <Avatar className="bg-black">
//                     <AvatarFallback className="bg-black text-white font-extrabold">
//                         AB
            
//             </AvatarFallback>
//                 </Avatar>
                

//             </DropdownMenuTrigger>
//         </DropdownMenu>
        


//     </div>
// }

// function ShoppingHeader() {
//     const { isAuthenticated } = useSelector(state => state.auth);

//     return (
//         <header className="sticky top-0 z-40 w-full border-b bg-background">
//             <div className="relative flex h-16 items-center justify-between px-4 md:px-6">
//                 {/* Left-aligned GlamGrace */}
//                 <Link to="/shop/home" className="flex items-center gap-2">
//                     <HousePlug className="h-6 w-6"/>
//                     <span className="font-bold">GlamGrace</span>
//                 </Link>

//                 {/* Center-aligned MenuItems */}
//                 <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
//                     <MenuItems/>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <Sheet>
//                     <SheetTrigger asChild>
//                         <Button variant="outline" size="icon" className="lg:hidden">
//                             <Menu className="h-6 w-6"/>
//                             <span className="sr-only">Toggle header menu</span>
//                         </Button>
//                     </SheetTrigger>
//                     <SheetContent side="left" className="w-full max-w-x-5xs">

//                     <MenuItems/>
//                     </SheetContent>


//                 </Sheet>
//                 <div className="hidden lg:block">

//                 </div>

//                 {/* Placeholder for authenticated state */}
//                 {isAuthenticated ? (<div>
//                     <HeaderRightContent/>
//                 </div> ): null}
//             </div>
//         </header>
//     );
// }

// export default ShoppingHeader;




// import { Link } from "react-router-dom";
// import { HousePlug, Menu, ShoppingCart } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
// import { Button } from "../ui/button";
// import { useSelector } from "react-redux";
// import { shoppingViewHeaderMenuItems } from "@/config";
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// function MenuItems() {
//     return (
//         <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
//             {shoppingViewHeaderMenuItems.map(menuItem => (
//                 <Link className="text-sm font-medium" key={menuItem.id} to={menuItem.path}>
//                     {menuItem.label}
//                 </Link>
//             ))}
//         </nav>
//     );
// }

// function HeaderRightContent() {
//     return (
//         <div className="flex lg:items-center lg:flex-row flex-col gap-4">
//             {/* Cart Icon */} 
//             <Button variant="outline" size="icon">
//                 <ShoppingCart className="w-6 h-6" />
//                 <span className="sr-only">User Cart</span>
//             </Button>

//             {/* User Avatar */}
//             <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                     <Avatar className="w-10 h-10 bg-black flex items-center justify-center rounded-full">
//                         <AvatarFallback className="text-white font-extrabold">
//                             AB
//                         </AvatarFallback>
//                     </Avatar>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent align="end">
//                     <DropdownMenuItem>Profile</DropdownMenuItem>
//                     <DropdownMenuItem>Logout</DropdownMenuItem>
//                 </DropdownMenuContent>
//             </DropdownMenu>
//         </div>
//     );
// }

// function ShoppingHeader() {
//     const isAuthenticated = useSelector(state => state.auth?.isAuthenticated ?? true); // Default to true for testing

//     return (
//         <header className="sticky top-0 z-40 w-full border-b bg-background">
//             <div className="relative flex h-16 items-center justify-between px-4 md:px-6">
//                 {/* Left-aligned GlamGrace */}
//                 <Link to="/shop/home" className="flex items-center gap-2">
//                     <HousePlug className="h-6 w-6" />
//                     <span className="font-bold">GlamGrace</span>
//                 </Link>

//                 {/* Center-aligned MenuItems */}
//                 <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
//                     <MenuItems />
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <Sheet>
//                     <SheetTrigger asChild>
//                         <Button variant="outline" size="icon" className="lg:hidden">
//                             <Menu className="h-6 w-6" />
//                             <span className="sr-only">Toggle header menu</span>
//                         </Button>
//                     </SheetTrigger>
//                     <SheetContent side="left" className="w-full max-w-xs">
//                         <MenuItems />
//                     </SheetContent>
//                 </Sheet>

//                 {/* Right-side content always visible for testing */}
//                 <HeaderRightContent />
//             </div>
//         </header>
//     );
// }

// export default ShoppingHeader;















// import { Link } from "react-router-dom"; 
// import { HousePlug, Menu, ShoppingCart  } from "lucide-react"; // Make sure Menu is imported
// import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"; // Ensure both are imported correctly
// import { Button } from "../ui/button";
// import { useSelector } from "react-redux";
// import { shoppingViewHeaderMenuItems } from "@/config";
// import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
// import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

// function MenuItems() {
//   // Corrected menu items to use the imported configuration
//   return (
//     <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
//       {shoppingViewHeaderMenuItems.map(menuItem => (
//         <Link 
//           className="text-sm font-medium" 
//           key={menuItem.id} 
//           to={menuItem.path}
//         >
//           {menuItem.label}
//         </Link>
//       ))}
//     </nav>
//   );
// }

// function HeaderRightContent() {
//   return (
//     <div className="flex lg:items-center lg:flex-row flex-col gap-4">
//       <Button variant="outline" size="icon">
//         <ShoppingCart className="w-6 h-6" />
//         <span className="sr-only">User Cart</span>
//       </Button>

//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Avatar className="w-10 h-10 bg-black flex items-center justify-center rounded-full">
//             <AvatarFallback className="text-white font-extrabold">
//               AB
//             </AvatarFallback>
//           </Avatar>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end">
//           <DropdownMenuItem>Profile</DropdownMenuItem>
//           <DropdownMenuItem>Logout</DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// }

// function ShoppingHeader() {
//   const isAuthenticated = useSelector(state => state.auth?.isAuthenticated ?? true);

//   return (
//     <header className="sticky top-0 z-40 w-full border-b bg-background">
//       <div className="relative flex h-16 items-center justify-between px-4 md:px-6">
//         <Link to="/shop/home" className="flex items-center gap-2">
//           <HousePlug className="h-6 w-6" />
//           <span className="font-bold">GlamGrace</span>
//         </Link>

//         <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
//           <MenuItems />
//         </div>

//         <Sheet>
//           <SheetTrigger asChild>
//             <Button variant="outline" size="icon" className="lg:hidden">
//               <Menu className="h-6 w-6" />
//               <span className="sr-only">Toggle header menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="w-full max-w-xs">
//             <MenuItems />
//           </SheetContent>
//         </Sheet>

//         <HeaderRightContent />
//       </div>
//     </header>
//   );
// }

// export default ShoppingHeader;



















import { Link } from "react-router-dom";
import { HousePlug, Menu, ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem 
} from "@/components/ui/dropdown-menu";
import { 
  Avatar, 
  AvatarFallback 
} from "@/components/ui/avatar";

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
  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4">
      <Button variant="outline" size="icon">
        <ShoppingCart className="w-6 h-6" />
        <span className="sr-only">User Cart</span>
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="w-10 h-10 bg-black flex items-center justify-center rounded-full">
            <AvatarFallback className="text-white font-extrabold">
              AB
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ShoppingHeader() {
  const isAuthenticated = useSelector(state => state.auth?.isAuthenticated ?? true);
  
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
          <SheetContent side="left" className="w-full max-w-xs">
            <MenuItems />
          </SheetContent>
        </Sheet>
        
        <HeaderRightContent />
      </div>
    </header>
  );
}

export default ShoppingHeader;


