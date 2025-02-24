
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








// import { Navigate, useLocation } from "react-router-dom";

// function CheckAuth({ isAuthenticated, user, children }) {
//   const location = useLocation();

//   console.log(location.pathname, isAuthenticated);

//   // Allow unauthenticated users to access auth-related pages
//   if (!isAuthenticated && location.pathname.startsWith("/auth")) {
//     return <>{children}</>;
//   }

//   // Redirect unauthenticated users to login page
//   if (!isAuthenticated) {
//     return <Navigate to="/auth/login" />;
//   }

//   // Redirect authenticated users away from login/register pages
//   if (
//     isAuthenticated &&
//     (location.pathname === "/auth/login" || location.pathname === "/auth/register")
//   ) {
//     if (user?.role === "admin") {
//       return <Navigate to="/admin/dashboard" />;
//     } else {
//       return <Navigate to="/shop/home" />;
//     }
//   }

//   // Restrict non-admin users from accessing admin pages
//   if (isAuthenticated && user?.role !== "admin" && location.pathname.startsWith("/admin")) {
//     return <Navigate to="/unauth-page" />;
//   }

//   // Restrict admins from accessing shop pages (EXCEPT `/shop/listing`)
//   if (isAuthenticated && user?.role === "admin" && location.pathname === "/shop/listing") {
//     return <>{children}</>;
//   } else if (isAuthenticated && user?.role === "admin" && location.pathname.startsWith("/shop")) {
//     return <Navigate to="/admin/dashboard" />;
//   }

//   return <>{children}</>;
// }

// export default CheckAuth;







import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  console.log(location.pathname, isAuthenticated);

  // Allow unauthenticated users to access auth-related pages
  if (!isAuthenticated && location.pathname.startsWith("/auth")) {
    return <>{children}</>;
  }

  // Redirect unauthenticated users to login page
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  // Redirect authenticated users away from login/register pages
  if (
    isAuthenticated &&
    (location.pathname === "/auth/login" || location.pathname === "/auth/register")
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  // Restrict non-admin users from accessing admin pages
  if (isAuthenticated && user?.role !== "admin" && location.pathname.startsWith("/admin")) {
    return <Navigate to="/unauth-page" />;
  }

  // Allow admins to access `/shop/home` and `/shop/listing`
  if (isAuthenticated && user?.role === "admin" && (location.pathname === "/shop/home" || location.pathname === "/shop/listing")) {
    return <>{children}</>;
  }

  // Restrict admins from accessing other shop pages
  if (isAuthenticated && user?.role === "admin" && location.pathname.startsWith("/shop")) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuth;








