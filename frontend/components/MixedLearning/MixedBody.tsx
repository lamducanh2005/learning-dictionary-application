import {Suspense} from "react";
import {Outlet} from "react-router-dom";

export default function MixedBody() {
    return (
        <Suspense>
            <Outlet/>
        </Suspense>
    )
}