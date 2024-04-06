import {Suspense} from "react";
import {Outlet} from "react-router-dom";

export default function MixedBody() {
    return (
        <div className={"mixed-body"}>

            <a href={"lambda/mixed/learning"}>Go to Learning Content</a>

            <Suspense>
                <Outlet/>
            </Suspense>
        </div>
    )
}