import MainHeader from "Frontend/components/Main/MainHeader";
import MainBody from "Frontend/components/Main/MainBody";
import {useContext} from "react";
import {ProfileContext} from "Frontend/App";

export default function MainView() {

    const profile = useContext(ProfileContext)

    return (

        <div className={"application-main-view"}>
            <MainHeader/>
            <MainBody/>
        </div>
    )
}