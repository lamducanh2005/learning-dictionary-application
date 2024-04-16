import 'Frontend/themes/Main/MainBody.css';
import MainViewMenu from "Frontend/components/Main/MainViewMenu/MainViewMenu";
import {useContext} from "react";
import {ProfileContext} from "Frontend/App";

export default function MainBody() {

    const profile = useContext(ProfileContext);

    return (
        <div className={"main-view-body"}>
            <div className={"main-view-body-welcome"}>
                Xin chào {profile?.name}, <br/> hôm nay bạn muốn học gì?
            </div>
            <MainViewMenu/>
        </div>
    )
}