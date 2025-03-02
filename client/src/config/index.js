export const  registerFormControls = [
    {
        name: "userName",
        label: "User Name",
        placeholder: "Enter your user name",
        componentType: "input",
        type: "text",
      },
      {
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        componentType: "input",
        type: "email",
      },
      {
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
        componentType: "input",
        type: "password",
      },
    ];



    export const loginFormControls = [
        {
          name: "email",
          label: "Email",
          placeholder: "Enter your email",
          componentType: "input",
          type: "email",
        },
        {
          name: "password",
          label: "Password",
          placeholder: "Enter your password",
          componentType: "input",
          type: "password",
        },
      ];


      // export const addProductFormElements = [
      //   {
      //     label: "Title",
      //     name: "title",
      //     componentType: "input",
      //     type: "text",
      //     placeholder: "Enter product title",
      //   },
      //   {
      //     label: "Description",
      //     name: "description",
      //     componentType: "textarea",
      //     placeholder: "Enter product description",
      //   },
      //   {
      //     label: "Category",
      //     name: "category",
      //     componentType: "select",
      //     options: [
      //       { id: "men", label: "Men" },
      //       { id: "women", label: "Women" },
      //       { id: "kids", label: "Kids" },
      //       { id: "accessories", label: "Accessories" },
      //       { id: "footwear", label: "Footwear" },
      //     ],
      //   },
      //   {
      //     label: "Brand",
      //     name: "brand",
      //     componentType: "select",
      //     options: [
      //       { id: "nike", label: "Nike" },
      //       { id: "adidas", label: "Adidas" },
      //       { id: "puma", label: "Puma" },
      //       { id: "levi", label: "Levi's" },
      //       { id: "zara", label: "Zara" },
      //       { id: "h&m", label: "H&M" },
      //     ],
      //   },
      //   {
      //     label: "Price",
      //     name: "price",
      //     componentType: "input",
      //     type: "number",
      //     placeholder: "Enter product price",
      //   },
      //   {
      //     label: "Sale Price",
      //     name: "salePrice",
      //     componentType: "input",
      //     type: "number",
      //     placeholder: "Enter sale price (optional)",
      //   },
      //   {
      //     label: "Total Stock",
      //     name: "totalStock",
      //     componentType: "input",
      //     type: "number",
      //     placeholder: "Enter total stock",
      //   },
      // ];




      export const addProductFormElements = [
        {
          label: "Title",
          name: "title",
          componentType: "input",
          type: "text",
          placeholder: "Enter product title",
        },
        {
          label: "Description",
          name: "description",
          componentType: "textarea",
          placeholder: "Enter product description",
        },
        {
          label: "Category",
          name: "category",
          componentType: "select",
          options: [
            { id: "casual", label: "Casual Wear" },
            { id: "party", label: "Party Wear " },
            { id: "wedding", label: "Wedding Saris" },
          ],
        },
        {
          label: "Brand",
          name: "brand",
          componentType: "select",
          options: [
            { id: "sabyasachi", label: "Sabyasachi" },
            { id: "biba", label: "Biba" },
            { id: "manishMalhotra", label: "Manish Malhotra" },
          ],
        },
        {
          label: "Price",
          name: "price",
          componentType: "input",
          type: "number",
          placeholder: "Enter product price",
        },
        {
          label: "Sale Price",
          name: "salePrice",
          componentType: "input",
          type: "number",
          placeholder: "Enter sale price (optional)",
        },
        {
          label: "Total Stock",
          name: "totalStock",
          componentType: "input",
          type: "number",
          placeholder: "Enter total stock",
        },
      ];
      








      export const shoppingViewHeaderMenuItems = [
        {
          id: "home",
          label: "Home",
          path: "/shop/home",
        },
        {
          id: "Shop",
          label: "Shop",
          path: "/shop/listing",
        },
        {
          id: "About",
          label: "About",
          path: "/shop/listing",
        },
        {
          id: "Contact",
          label: "Contact",
          path: "/shop/listing",
        },
        
        
      ];
      




      export const filterOptions = {
        brand: [
          { id: "sabyasachi", label: "Sabyasachi" },
          { id: "biba", label: "Biba" },
          { id: "manishMalhotra", label: "Manish Malhotra" },
        ],
        category: [
          { id: "casual", label: "Casual Wear " },
          { id: "party", label: "Party Wear " },
          { id: "wedding", label: "Wedding Saris" },
        ],
      };
      



      export const sortOptions = [
        { id: "price-lowtohigh", label: "Price: Low to High" },
        { id: "price-hightolow", label: "Price: High to Low" },
        { id: "title-atoz", label: "Title: A to Z" },
        { id: "title-ztoa", label: "Title: Z to A" },
      ];









      export const addressFormControls = [
        {
          label: "Address",
          name: "address",
          componentType: "input",
          type: "text",
          placeholder: "Enter your address",
        },
        {
          label: "City",
          name: "city",
          componentType: "input",
          type: "text",
          placeholder: "Enter your city",
        },
        {
          label: "Pincode",
          name: "pincode",
          componentType: "input",
          type: "text",
          placeholder: "Enter your pincode",
        },
        {
          label: "Phone",
          name: "phone",
          componentType: "input",
          type: "text",
          placeholder: "Enter your phone number",
        },
        {
          label: "Notes",
          name: "notes",
          componentType: "textarea",
          placeholder: "Enter any additional notes",
        },
      ];