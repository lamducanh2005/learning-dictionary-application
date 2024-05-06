import LambdaNavigationButton from "Frontend/components/LambdaComponents/LambdaNavigation/LambdaNavigationButton";
import LambdaHeaderTitle from "Frontend/components/LambdaComponents/LambdaHeader/LambdaHeaderTitle";
import LambdaHeader from "Frontend/components/LambdaComponents/LambdaHeader/LambdaHeader";
import 'Frontend/themes/Assistant/AssistantHeader.css';
import AssistantHistoryButton from "Frontend/components/Assistant/AssistantHeader/AssistantHistoryButton";

export default function AssistantHeader() {
    return (
        <div className={"assistant-view-header"}>
            <LambdaHeader>
                <LambdaNavigationButton/>
                <div style={{width: "20px"}}/>
                <LambdaHeaderTitle title={"Lambda Assistant"}/>
                <div style={{flex: 1}}/>
                <AssistantHistoryButton/>
            </LambdaHeader>
        </div>
    )
}