
// import { Navigate, useLocation } from "react-router-dom";

// function CheckAuth({ isAuthenticated, user, children }) {
//   const location = useLocation();

//   console.log(location.pathname, isAuthenticated);


//   if (!isAuthenticated && location.pathname.startsWith("/auth")) {
//     return <>{children}</>;
//   }

 
//   if (!isAuthenticated) {
//     return <Navigate to="/auth/login" />;
//   }

  
//   if (
//     isAuthenticated &&
//     (location.pathname.includes("/login") || location.pathname.includes("/register"))
//   ) {
//     if (user?.role === "admin") {
//       return <Navigate to="/admin/dashboard" />;
//     } else {
//       return <Navigate to="/shop/home" />;
//     }
//   }

 
//   if (isAuthenticated && user?.role !== "admin" && location.pathname.includes("admin")) {
//     return <Navigate to="/unauth-page" />;
//   }

 
//   if (isAuthenticated && user?.role === "admin" && location.pathname.includes("shop")) {
//     return <Navigate to="/admin/dashboard" />;
//   }

//   return <>{children}</>;
// }

// export default CheckAuth;



















import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  const publicRoutes = [
    "/shop/about", 
    "/shop/contact", 
    "/shop/home", 
    "/shop/listing"
    

  ];

  // Public routes can be accessed by anyone
  if (publicRoutes.includes(location.pathname)) {
    return <>{children}</>;
  }

  // Authentication checks for other routes
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  // Redirect logic for authenticated users trying to access auth routes
  if (location.pathname.startsWith("/auth")) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  // Admin-specific route restrictions
  if (
    user?.role === "admin" &&
    location.pathname.startsWith("/shop") &&
    !["/shop/home", "/shop/listing", "/shop/account"].includes(location.pathname)
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuth;










// it shows about page


// import { Navigate, useLocation } from "react-router-dom";

// function CheckAuth({ isAuthenticated, user, children }) {
//   const location = useLocation();

//   const publicRoutes = [
//     "/shop/about", 
//     "/shop/contact", 
//     "/shop/home", 
//     "/shop/listing"
//   ];

//   // Public routes can be accessed by anyone
//   if (publicRoutes.includes(location.pathname)) {
//     return <>{children}</>;
//   }

//   // Authentication checks for other routes
//   if (!isAuthenticated) {
//     return <Navigate to="/auth/login" />;
//   }

//   // Redirect logic for authenticated users trying to access auth routes
//   if (location.pathname.startsWith("/auth")) {
//     if (user?.role === "admin") {
//       return <Navigate to="/admin/dashboard" />;
//     } else {
//       return <Navigate to="/shop/home" />;
//     }
//   }

//   // Admin-specific route restrictions
//   if (
//     user?.role === "admin" &&
//     location.pathname.startsWith("/shop") &&
//     !["/shop/home", "/shop/listing", "/shop/account"].includes(location.pathname)
//   ) {
//     return <Navigate to="/admin/dashboard" />;
//   }

//   return <>{children}</>;
// }

// export default CheckAuth;








