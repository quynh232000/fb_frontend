import SigninForm from "../components/forms/SigninForm";
import SignunForm from "../components/forms/SignupForm";
import defineRoutes from "../config/defineRoutes";
import Gaming from "../pages/Gaming";
import Groups from "../pages/Groups";
import Home from "../pages/Home";
import Marketpalce from "../pages/Marketplace";
import Watch from "../pages/Watch";
const publicRoutes = [
    {
        path: defineRoutes.signin,
        component:SigninForm
    },
    {
        path: defineRoutes.signup,
        component:SignunForm
    },
] 
const privateRoutes =[
    {
        path: defineRoutes.home,
        component:Home
    },
    {
        path: defineRoutes.watch,
        component:Watch
    },
    {
        path: defineRoutes.marketplace,
        component:Marketpalce
    },
    {
        path: defineRoutes.groups,
        component:Groups
    },
    {
        path: defineRoutes.gaming,
        component:Gaming
    },
]
export { publicRoutes ,privateRoutes } ;