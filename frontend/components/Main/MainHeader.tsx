import LambdaHeader from "Frontend/components/LambdaComponents/LambdaHeader/LambdaHeader";
import LambdaHeaderTitle from "Frontend/components/LambdaComponents/LambdaHeader/LambdaHeaderTitle";
import 'Frontend/themes/Main/MainHeader.css';
import MainHeaderProfileSetting from "Frontend/components/Main/MainHeaderProfileSetting";

export default function MainHeader() {
    return (
        <div className={"main-view-header"}>
            <LambdaHeader>
                <LambdaHeaderTitle title={"Lambda"}/>
                <div style={{flex: 1}}/>
                <MainHeaderProfileSetting/>
            </LambdaHeader>
        </div>
    )
}