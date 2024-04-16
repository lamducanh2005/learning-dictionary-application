import AssistantChatBox from "Frontend/components/Assistant/AssistantBody/AssistantChatBox";
import AssistantChatDisplay from "Frontend/components/Assistant/AssistantBody/AssistantChatDisplay";
import 'Frontend/themes/Assistant/AssistantChat/AssistantChat.css';
import {useState} from "react";
import AssistantRequest from "Frontend/generated/com/application/models/AssistantRequest";

export default function AssistantChat() {

    const [requestList, setRequestList] = useState<AssistantRequest[]>([]);
    const handleAddRequest = (request: AssistantRequest) => setRequestList([...requestList, request]);

    return (
        <div className={"assistant-chat"}>
            <AssistantChatBox onAddRequest={handleAddRequest}/>
            <AssistantChatDisplay requestList={requestList}/>
        </div>
    )
}