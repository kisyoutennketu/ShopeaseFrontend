import { createBrowserRouter } from "react-router-dom";
import Shop from "./Shop";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";
import ProductDetails from "./pages/ProductDetailPage/ProductDetails";
import { loadProductBySlug } from "./routes/products";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <ShopApplicationWrapper/>,
        children:[
            {
                path:"/",
                element: <Shop />
            },
            {
                path:"/women",
                element: <ProductListPage categoryType={'WOMEN'}/>
            },
            {
                path: "/men",
                element: <ProductListPage categoryType={'MEN'} />
            },
            {
                path: "/product/:slug",
                loader: loadProductBySlug,
                element: <ProductDetails />
            }
        ]
    }
])