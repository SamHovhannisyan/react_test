import {lazy} from 'react';

const routesMain = [
    {
        title: "Home",
        path: "/",
        component: lazy(() => import('../containers/Home/index')),
        exact: true
    },
    {
        title: "Download",
        path: "/download",
        component: lazy(() => import('../containers/Download/index')),
        exact: true
    },
    {
        title: "Contact",
        path: "/contact",
        component: lazy(() => import('../containers/Contact/index')),
        exact: true
    },
    {
        title: "FAQ",
        path: "/faq",
        component: lazy(() => import('../containers/FAQ/index')),
        exact: true
    }
]

export default routesMain;