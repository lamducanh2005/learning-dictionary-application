import StartProfileList from "Frontend/components/Start/Profiles/StartProfileList";
import LambdaHeaderTitle from "Frontend/components/LambdaComponents/LambdaHeader/LambdaHeaderTitle";

export default function StartBody() {
    return (
        <div className={"start-view-body"}>
            <div style={{flex: 1}}/>
            <div className={"left-view"}>
                <StartProfileList/>
            </div>
            <div className={"right-view"}>
                <div className={"logo-title"}>LAMBDA</div>
                <div className={"logo-subtitle"}>Phiên bản 2</div>
            </div>
            <div style={{flex: 1}}/>
        </div>
    )
}