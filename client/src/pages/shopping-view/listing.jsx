import { useSelector, useDispatch } from 'react-redux'; // Add useSelector import
import ProductFilter from "@/components/shopping-view/filter";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ArrowUpDown, ArrowUpDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu";
import { sortOptions } from "@/config";
import { useEffect } from "react";
import { fetchAllFilteredProducts } from "@/store/shop/products-slice";

function ShoppingListing() {

  // Fetch list of product
  const dispatch = useDispatch();
  const { productList } = useSelector(state => state.shopProducts);  // State access via useSelector

  useEffect(() => {
    dispatch(fetchAllFilteredProducts());
  }, [dispatch]);

  console.log(productList);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6">
      <ProductFilter />

      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-extrabold">All Products</h2>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground"> 10 Products </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ArrowUpDownIcon className="h-4 w-4" />
                  <span>Sort by</span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuRadioGroup>
                  {sortOptions.map(sortItem => (
                    <DropdownMenuRadioItem key={sortItem.id}>
                      {sortItem.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {/* Product listing would go here */}
        </div>
      </div>
    </div>
  );
}
export default ShoppingListing;









// import ProductFilter from "@/components/shopping-view/filter";
// import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
// import { ArrowUpDownIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu";
// import { sortOptions } from "@/config";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux"; // Added useSelector import
// import { fetchAllFilteredProducts } from "@/store/shop/products-slice";

// function ShoppingListing() {
//   // Fetch list of products
//   const dispatch = useDispatch();
//   const { productList } = useSelector((state) => state.shopProducts);

//   useEffect(() => {
//     dispatch(fetchAllFilteredProducts());
//   }, [dispatch]);

//   console.log(productList);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6">
//       <ProductFilter />

//       <div className="bg-background w-full rounded-lg shadow-sm">
//         <div className="p-4 border-b flex items-center justify-between">
//           <h2 className="text-lg font-extrabold">All Products</h2>
//           <div className="flex items-center gap-3">
//             <span className="text-muted-foreground">{productList.length} Products</span>

//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="outline" size="sm" className="flex items-center gap-1">
//                   <ArrowUpDownIcon className="h-4 w-4" />
//                   <span>Sort by</span>
//                 </Button>
//               </DropdownMenuTrigger>

//               <DropdownMenuContent align="end" className="w-[200px]">
//                 <DropdownMenuRadioGroup>
//                   {sortOptions.map((sortItem) => (
//                     <DropdownMenuRadioItem key={sortItem.id}>{sortItem.label}</DropdownMenuRadioItem>
//                   ))}
//                 </DropdownMenuRadioGroup>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//           {productList.map((product) => (
//             <div key={product.id} className="border p-4 rounded-lg shadow">
//               <h3 className="font-bold">{product.name}</h3>
//               <p>{product.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ShoppingListing;









