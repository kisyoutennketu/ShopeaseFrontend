import { createBrowserRouter } from "react-router-dom";
import Shop from "./Shop";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";
import ProductDetails from "./pages/ProductDetailPage/ProductDetails";
import { loadProductBySlug } from "./routes/products";
import AuthenticationWrapper from "./pages/AuthenticationWrapper";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import OAuth2LoginCallback from "./pages/OAuth2LoginCallback";
import Cart from "./pages/Cart/Cart";
import Account from "./pages/Account/Account";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Checkout from "./pages/Checkout/Checkout";
import ConfirmPayment from "./pages/ConfirmPayment/ConfirmPayment";
import OrderConfirmed from "./pages/OrderConfirmed/OrderConfirmed";
import Profile from "./pages/Account/Profile";
import Order from "./pages/Account/Order";
import Settings from "./pages/Account/Settings";


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
            },
            {
                path: "/cart-items",
                element: <Cart />
            },
            {
                path: '/account-details/',
                element: <ProtectedRoute ><Account /></ProtectedRoute>,
                children:[
                    {
                        path:'profile',
                        element:<ProtectedRoute><Profile/></ProtectedRoute>
                    },
                    {
                        path:'orders',
                        element:<ProtectedRoute><Order /></ProtectedRoute>
                    },
                    {
                        path: 'settings',
                        element:<ProtectedRoute><Settings /></ProtectedRoute>
                    }
                ]
            },
            {
                path:'/checkout',
                element: <ProtectedRoute><Checkout /></ProtectedRoute>
            },
            {
                path: '/orderConfirmed',
                element: <OrderConfirmed />
            }
        ]
    },
    {
        path: "/v1/",
        element: <AuthenticationWrapper />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    },
    {
        path: '/oauth2/callback',
        element: <OAuth2LoginCallback />
    },
    {
        path: '/confirmPayment',
        element: <ConfirmPayment />
    }
    
])