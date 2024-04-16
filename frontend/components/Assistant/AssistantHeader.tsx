import LambdaNavigationButton from "Frontend/components/LambdaComponents/LambdaNavigation/LambdaNavigationButton";
import LambdaHeaderTitle from "Frontend/components/LambdaComponents/LambdaHeader/LambdaHeaderTitle";
import LambdaHeader from "Frontend/components/LambdaComponents/LambdaHeader/LambdaHeader";
import 'Frontend/themes/Assistant/AssistantHeader.css';

export default function AssistantHeader() {
    return (
        <div className={"assistant-view-header"}>
            <LambdaHeader>
                <LambdaNavigationButton/>
                <div style={{width: "20px"}}/>
                <LambdaHeaderTitle title={"Lambda Assistant"}/>
            </LambdaHeader>
        </div>
    )
}