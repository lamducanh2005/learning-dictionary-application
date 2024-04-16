import AssistantHeader from "Frontend/components/Assistant/AssistantHeader";
import AssistantBody from "Frontend/components/Assistant/AssistantBody";

export default function AssistantView() {
    return (
        <div className={"assistant-view"}>
            <AssistantHeader/>
            <AssistantBody/>
        </div>
    )
}