import {MessageList} from "@hilla/react-components/MessageList";
import ResponseFromAssistant
    from "Frontend/components/Assistant/AssistantBody/AssistantChatDisplay/ResponseFromAssistant";
import 'Frontend/themes/Assistant/AssistantChat/AssistantChatDisplay.css';
import AssistantRequest from "Frontend/generated/com/application/models/AssistantRequest";
import RequestFromProfile from "Frontend/components/Assistant/AssistantBody/AssistantChatDisplay/RequestFromProfile";
import {Suspense, useEffect, useRef, useState} from "react";
import {AssistantRequestService} from "Frontend/generated/endpoints";

export default function AssistantChatDisplay(props: any) {

    const endOfChat = useRef<null | HTMLDivElement>(null);
    const scrollToBottom = () => {
        endOfChat.current?.scrollIntoView({behavior: "smooth"});
    };
    useEffect(scrollToBottom, [props.requestList]);

    return (
        <div className={"assistant-chat-display"}>
            {props.requestList.map((request: AssistantRequest, index: number) => {
                return (
                    <div key={index} className={"assistant-chat-display-group"}>
                        <RequestFromProfile request={request}/>
                        <ResponseFromAssistant request={request}/>
                    </div>
                )
            })}
            <div ref={endOfChat}/>
        </div>
    )
}