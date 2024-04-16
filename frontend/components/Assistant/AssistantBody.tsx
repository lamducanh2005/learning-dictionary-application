import AssistantChat from "Frontend/components/Assistant/AssistantBody/AssistantChat";

export default function AssistantBody() {
    return (
        <div
            className={"assistant-view-body"}
            style={{paddingTop: 150, paddingBottom: 100}}
        >
            <AssistantChat/>
        </div>
    )
}