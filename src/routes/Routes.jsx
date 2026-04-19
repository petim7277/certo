import Layout from "../components/layouts/Layout";
import Features from "../Features/Features";

export const Routes = [
    {
        path:"",
        element:<Layout/>,
        children:[
            {
                path:"",
                element:<Features/>
            },
        ]
    }
]