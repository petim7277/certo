import Layout from "../components/layout/Layout";
import Features from "../features/Features";
import IphoneSection from "../features/iphone/IphoneSection";
import AndroidSection from "../features/android/AndroidSection";
import CompanySection from "../features/company/CompanySection";
import HelpSection from "../features/help/HelpSection";
import SignInSection from "../features/signin/SignInSection";

export const Routes = [
    {
        path:"",
        element:<Layout/>,
        children:[
            {
                path:"",
                element:<Features/>
            },
            {
                path: "iphone",
                element: <IphoneSection />
            },
            {
                path: "android",
                element: <AndroidSection />
            },
            {
                path: "help",
                element: <HelpSection />
            },
            {
                path: "company",
                element: <CompanySection />
            },
            {
                path: "signin",
                element: <SignInSection />
            }
        ]
    }
]