import React, { Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from "../Layout";
import routesMain from "./index";

const RouteBuilder = () => {

    return (
        <div>
            <Suspense fallback={"Loading..."}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        {
                            routesMain.map(({
                                                component: Component,
                                                path,
                                                children,
                                                exact
                                            }) => {
                                return (
                                    <Route key={path}
                                           exact={!!exact}
                                           path={`${path}`}
                                           element={<Component />}
                                    />
                                )
                            })
                        }
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default RouteBuilder;