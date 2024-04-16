import StartHeader from "Frontend/components/Start/StartHeader";
import StartBody from "Frontend/components/Start/StartBody";
import 'Frontend/themes/Start/StartView.css'
import {useEffect} from "react";

export default function StartView() {

    useEffect(() => {
        localStorage.setItem('profile-id', '1');
    }, []);

    return (
        <div className={"start-view"}>
            <StartHeader/>
            <StartBody/>
        </div>
    )
}