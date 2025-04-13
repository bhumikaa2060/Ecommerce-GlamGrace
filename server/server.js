



// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const authRouter = require('./routes/auth/auth-routes');
// const adminProductsRouter = require('./routes/admin/products-routes');

// const adminOrderRouter = require("./routes/admin/order-routes");
// const shopProductsRouter = require('./routes/shop/products-routes')
// const shopCartRouter = require("./routes/shop/cart-routes");
// const shopAddressRouter = require('./routes/shop/address-routes')


// const shopSearchRouter = require("./routes/shop/search-routes");


// const shopOrderRouter = require("./routes/shop/order-routes");



// mongoose
//     .connect('mongodb+srv://bhumika1:MCMC2ug4JfN23ok9@cluster.gvyn5.mongodb.net/')
//     .then(() => console.log('MongoDb connected'))
//     .catch((error) => console.log(error));

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(
//     cors({
//         origin: "http://localhost:5173",
//         methods: ["GET", "POST", "DELETE", "PUT"],
//         allowedHeaders: [
//             "Content-Type",
//             "Authorization",
//             "Cache-Control",
//             "Expires",
//             "Pragma",
//         ],
//         credentials: true,
//     })
// );

// app.use(cookieParser());
// app.use(express.json());
// app.use("/api/auth", authRouter);
// app.use("/api/admin/products", adminProductsRouter);
// app.use("/api/shop/products", shopProductsRouter);

// app.use("/api/shop/order", shopOrderRouter);

// app.use("/api/shop/cart", shopCartRouter);
// app.use("/api/shop/address", shopAddressRouter);
// app.use("/api/shop/search", shopSearchRouter);


// app.use("/api/shop/order", shopOrderRouter);



// app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));










require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require('./routes/auth/auth-routes');
const adminProductsRouter = require('./routes/admin/products-routes');
const adminOrderRouter = require("./routes/admin/order-routes");
const shopProductsRouter = require('./routes/shop/products-routes');
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require('./routes/shop/address-routes');
const shopSearchRouter = require("./routes/shop/search-routes");
const shopOrderRouter = require("./routes/shop/order-routes");

mongoose
    .connect('mongodb+srv://bhumika1:MCMC2ug4JfN23ok9@cluster.gvyn5.mongodb.net/')
    .then(() => console.log('MongoDb connected'))
    .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "DELETE", "PUT"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",
        ],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter); // Added to mount admin order routes
app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/search", shopSearchRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));












// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const authRouter = require('./routes/auth/auth-routes');
// const adminProductsRouter = require('./routes/admin/products-routes');
// const shopProductsRouter = require('./routes/shop/products-routes');
// const shopCartRouter = require("./routes/shop/cart-routes");
// const shopAddressRouter = require('./routes/shop/address-routes');
// const shopSearchRouter = require("./routes/shop/search-routes");
// const shopOrderRouter = require("./routes/shop/order-routes");

// mongoose
//     .connect('mongodb+srv://bhumika1:MCMC2ug4JfN23ok9@cluster.gvyn5.mongodb.net/')
//     .then(() => console.log('MongoDb connected'))
//     .catch((error) => console.log(error));

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(
//     cors({
//         origin: "http://localhost:5173",
//         methods: ["GET", "POST", "DELETE", "PUT"],
//         allowedHeaders: [
//             "Content-Type",
//             "Authorization",
//             "Cache-Control",
//             "Expires",
//             "Pragma",
//         ],
//         credentials: true,
//     })
// );

// app.use(cookieParser());
// app.use(express.json());
// app.use("/api/auth", authRouter);
// app.use("/api/admin/products", adminProductsRouter);
// app.use("/api/shop/products", shopProductsRouter);
// app.use("/api/shop/cart", shopCartRouter);
// app.use("/api/shop/address", shopAddressRouter);
// app.use("/api/shop/search", shopSearchRouter);
// app.use("/api/shop/order", shopOrderRouter);

// app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));














